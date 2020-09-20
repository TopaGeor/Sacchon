package gr.team5.sacchon.resource;

import gr.team5.sacchon.exception.BadEntityException;
import gr.team5.sacchon.exception.NotFoundException;
import gr.team5.sacchon.model.PatientData;
import gr.team5.sacchon.repository.PatientDataRepository;
import gr.team5.sacchon.repository.util.JpaUtil;
import gr.team5.sacchon.representation.PatientDataRepresentation;
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

public class PatientDataListResourceImpl extends ServerResource implements PatientDataListResource {

    public static  final Logger LOGGER = Engine.getLogger(PatientDataResourceImpl.class);

    private PatientDataRepository patientDataRepository;
    private EntityManager entityManager;


    /**
     * This release method closes the entityManager
     */
    @Override
    protected void doRelease() {
        entityManager.close();
    }

    /**
     * Initializes patient data repository
     */
    protected void doInit() {

        LOGGER.info("Initializing patient data list resource starts");

        try {
            entityManager = JpaUtil.getEntityManager();
            patientDataRepository = new PatientDataRepository(entityManager);
        } catch (Exception e) {
            throw new ResourceException(e);
        }

        LOGGER.info("Initializing patient data list resource ends");
    }

    /**
     *
     * @param patientDataReprIn representation of PatientData given by the frontEnd
     * @return a representation of the persisted object
     * @throws BadEntityException
     */
    @Override
    public PatientDataRepresentation add(PatientDataRepresentation patientDataReprIn) throws BadEntityException {

        LOGGER.finer("Add new patient data.");

        // Check authorization
        ResourceUtils.checkRole(this, Shield.ROLE_PATIENT);
        LOGGER.finer("User allowed to add patient data.");

        // Check entity

        if (patientDataReprIn == null) throw new BadEntityException("Bad entity");

        LOGGER.finer("patient data checked");

        try {

            // Convert PatientDataRepresentation to PatientData
            PatientData patientData = patientDataReprIn.createPatientData();

            Optional<PatientData> patientDataOptOut = patientDataRepository.save(patientData);

            PatientData patientDataOut;
            if (patientDataOptOut.isPresent())
                patientDataOut = patientDataOptOut.get();
            else
                throw new BadEntityException("Patient data has not been created");

            PatientDataRepresentation result = new PatientDataRepresentation(patientDataOut);

            LOGGER.finer("Patient data successfully added.");

            return result;
        } catch (Exception ex) {
            LOGGER.log(Level.WARNING, "Error when adding a patient", ex);
            throw new ResourceException(ex);
        }
    }

    /**
     *
     * @return list of all patients data
     * @throws NotFoundException
     */
    @Override
    public List<PatientDataRepresentation> getPatientsData() throws NotFoundException {

        LOGGER.finer("Select all patients data.");
        // Check authorization
        ResourceUtils.checkRole(this, Shield.ROLE_DOCTOR);

        try {

            List<PatientData> patientsData = patientDataRepository.findAll();
            List<PatientDataRepresentation> result = new ArrayList<>();

            patientsData.forEach(patientData -> result.add(new PatientDataRepresentation(patientData)));

            return result;
        } catch (Exception e) {
            throw new NotFoundException("patients data not found");
        }
    }
}
