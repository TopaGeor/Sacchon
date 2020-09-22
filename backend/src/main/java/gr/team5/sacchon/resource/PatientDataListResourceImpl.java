package gr.team5.sacchon.resource;

import gr.team5.sacchon.exception.BadEntityException;
import gr.team5.sacchon.exception.NotFoundException;
import gr.team5.sacchon.model.Patient;
import gr.team5.sacchon.model.PatientData;
import gr.team5.sacchon.repository.PatientDataRepository;
import gr.team5.sacchon.repository.util.JpaUtil;
import gr.team5.sacchon.representation.PatientDataRepresentation;
import gr.team5.sacchon.resource.util.ResourceValidator;
import gr.team5.sacchon.security.ResourceUtils;
import gr.team5.sacchon.security.Shield;
import org.restlet.engine.Engine;
import org.restlet.resource.ResourceException;
import org.restlet.resource.ServerResource;

import javax.persistence.EntityManager;
import javax.swing.text.html.Option;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;

public class PatientDataListResourceImpl extends ServerResource implements PatientDataListResource {

    public static  final Logger LOGGER = Engine.getLogger(PatientDataResourceImpl.class);

    private long id;
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
            id = Long.parseLong(getAttribute("id"));
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

        // Check authorization, if role is doctor or chief now allowed
        ResourceUtils.checkRole(this, Shield.ROLE_DOCTOR);
        ResourceUtils.checkRole(this, Shield.ROLE_CHIEF);
        LOGGER.finer("User allowed to add patient data.");

        // Check entity
        ResourceValidator.notNull(patientDataReprIn);
        ResourceValidator.validate(patientDataReprIn);

        LOGGER.finer("patient data checked");

        try {

            // Convert PatientDataRepresentation to PatientData
            PatientData patientDataIn = new PatientData();
            patientDataIn.setBloodGlucose(patientDataReprIn.getBloodGlucose());
            patientDataIn.setCarbIntake(patientDataReprIn.getCarbIntake());
            patientDataIn.setDate(patientDataReprIn.getDate());

            Optional<PatientData> patientDataOptOut = patientDataRepository.save(patientDataIn);

            PatientData patientData = null;
            if (patientDataOptOut.isPresent())
                patientData = patientDataOptOut.get();
            else
                throw new BadEntityException("Patient data has not been created");

            PatientDataRepresentation result = new PatientDataRepresentation(patientData);

            result.setBloodGlucose(patientData.getBloodGlucose());
            result.setCarbIntake(patientData.getCarbIntake());
            result.setDate(patientData.getDate());
            result.setUri("http://localhost:9000/patient/" +
                    patientData.getPatient().getId()+"/data/"+ patientData.getId());

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

            List<PatientData> patientsData = patientDataRepository.findDataById(id);
            List<PatientDataRepresentation> result = new ArrayList<>();
            patientsData.forEach( patientData -> result.add(new PatientDataRepresentation(patientData)));

            return result;
        } catch (Exception e) {
            throw new NotFoundException(e.getMessage());
        }
    }
}
