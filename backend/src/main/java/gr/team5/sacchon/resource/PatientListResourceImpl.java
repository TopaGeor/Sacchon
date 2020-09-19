package gr.team5.sacchon.resource;

import gr.team5.sacchon.exception.BadEntityException;
import gr.team5.sacchon.exception.NotFoundException;
import gr.team5.sacchon.model.Patient;
import gr.team5.sacchon.repository.PatientRepository;
import gr.team5.sacchon.repository.util.JpaUtil;
import gr.team5.sacchon.representation.PatientRepresentation;
import gr.team5.sacchon.security.ResourceUtils;
import gr.team5.sacchon.security.Shield;
import org.restlet.engine.Engine;
import org.restlet.resource.ResourceException;
import org.restlet.resource.ServerResource;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;

public class PatientListResourceImpl extends ServerResource implements PatientListResource {

    public static  final Logger LOGGER = Engine.getLogger(PatientResourceImpl.class);

    private PatientRepository patientRepository;
    private EntityManager entityManager;

    /**
     * This release method closes the entityManager
     */
    @Override
    protected void doRelease() {
        entityManager.close();
    }

    /**
     * Initializes the patient repository
     */
    protected void doInit() {

        LOGGER.info("Initializing patient list resource starts");

        try {
            entityManager = JpaUtil.getEntityManager();
            patientRepository = new PatientRepository(entityManager);
        } catch (Exception e) {
            throw new ResourceException(e);
        }

        LOGGER.info("Initializing patient list resource ends");
    }

    /**
     *
     * @param patientReprIn representation of a Patient given by the frontEnd
     * @return a representation of the persisted object
     * @throws BadEntityException
     */
    @Override
    public PatientRepresentation add(PatientRepresentation patientReprIn) throws BadEntityException {

        LOGGER.finer("Add new patient.");

        // Check authorization
        ResourceUtils.checkRole(this, Shield.ROLE_PATIENT);
        LOGGER.finer("User allowed to add a patient.");

        // Check entity

        if (patientReprIn == null) throw new BadEntityException("Bad entity");

        LOGGER.finer("patient checked");

        try {

            // Convert PatientRepresentation to Patient
            Patient patient = patientReprIn.createPatient();

            Optional<Patient> patientOptOut = patientRepository.save(patient);

            Patient patientOut;
            if (patientOptOut.isPresent())
                patientOut = patientOptOut.get();
            else
                throw new BadEntityException("Patient has not been created");

            PatientRepresentation result = new PatientRepresentation(patientOut);

            LOGGER.finer("Patient successfully added.");

            return result;
        } catch (Exception ex) {
            LOGGER.log(Level.WARNING, "Error when adding a patient", ex);
            throw new ResourceException(ex);
        }
    }

    @Override
    public List<PatientRepresentation> getPatients() throws NotFoundException {

        LOGGER.finer("Select all patients.");
        // Check authorization
        ResourceUtils.checkRole(this, Shield.ROLE_DOCTOR);

        try {

            List<Patient> patients = patientRepository.findAll();
            List<PatientRepresentation> result = new ArrayList<>();

            patients.forEach(patient -> result.add(new PatientRepresentation(patient)));

            return result;
        } catch (Exception e) {
            throw new NotFoundException("patients not found");
        }
    }
}
