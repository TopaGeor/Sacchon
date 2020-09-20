package gr.team5.sacchon.resource;

import gr.team5.sacchon.exception.BadEntityException;
import gr.team5.sacchon.exception.NotFoundException;
import gr.team5.sacchon.model.Patient;
import gr.team5.sacchon.repository.PatientRepository;
import gr.team5.sacchon.repository.util.JpaUtil;
import gr.team5.sacchon.representation.PatientRepresentation;
import gr.team5.sacchon.resource.util.ResourceValidator;
import gr.team5.sacchon.security.ResourceUtils;
import gr.team5.sacchon.security.Shield;
import org.restlet.engine.Engine;
import org.restlet.resource.ResourceException;
import org.restlet.resource.ServerResource;

import javax.persistence.EntityManager;
import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;

public class PatientResourceImpl extends ServerResource implements PatientResource {

    public static final Logger LOGGER = Engine.getLogger(PatientResourceImpl.class);

    private long id;
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
    @Override
    protected void doInit() {

        LOGGER.info("Initializing patient resource starts");

        try {
            entityManager = JpaUtil.getEntityManager();
            patientRepository = new PatientRepository(entityManager);
            id = Long.parseLong(getAttribute("id"));
        } catch (Exception e) {
            throw new ResourceException(e);
        }

        LOGGER.info("Initializing patient resource ends");
    }

    /**
     *
     * @return patient by id
     * @throws NotFoundException
     */
    @Override
    public PatientRepresentation getPatient() throws NotFoundException {

        LOGGER.info("Retrieve a patient");

        // Checking authorization
        ResourceUtils.checkRole(this, Shield.ROLE_PATIENT);

        // Initialize persistence layer
        PatientRepository patientRepository = new PatientRepository(entityManager);
        Patient patient;

        try {
            Optional<Patient> oPatient = patientRepository.findById(id);

            setExisting(oPatient.isPresent());
            if (!isExisting()) {

                LOGGER.config("patient id does not exist: " + id);
                throw new NotFoundException("No patient with id: " + id);
            } else {

                patient = oPatient.get();
                LOGGER.finer("User allowed to retrieve a patient.");
                PatientRepresentation result = new PatientRepresentation(patient);

                LOGGER.finer("Patient successfully retrieved.");

                return result;
            }
        } catch (Exception e) {
            throw new ResourceException(e);
        }
    }

    /**
     *
     * remove a patient
     * @throws NotFoundException
     */
    @Override
    public void remove() throws NotFoundException {

        LOGGER.finer("Removal of patient.");

        ResourceUtils.checkRole(this, Shield.ROLE_PATIENT);
        LOGGER.finer("User allowed to remove a patient.");

        try {
            Boolean isDeleted = patientRepository.delete(id);

            if (!isDeleted) {

                LOGGER.config("Patient id does not exist");
                throw new NotFoundException("Patient with following id does not exist: " + id);
            }

            LOGGER.finer("Patient successfully removed.");
        } catch (Exception e) {
            LOGGER.log(Level.WARNING, "Error when removing a patient ", e);
            throw new ResourceException(e);
        }
    }

    /**
     *
     * @param patientReprIn
     * @return updates a patient
     * @throws NotFoundException
     * @throws BadEntityException
     */
    @Override
    public PatientRepresentation store(PatientRepresentation patientReprIn) throws NotFoundException, BadEntityException {

        LOGGER.finer("Update a patient.");

        ResourceUtils.checkRole(this, Shield.ROLE_PATIENT);
        LOGGER.finer("User allowed to update a patient.");

        // Check given entity
        ResourceValidator.notNull(patientReprIn);
        ResourceValidator.validate(patientReprIn);
        LOGGER.finer("Patient checked");

        try {
            Patient patientIn = patientReprIn.createPatient();
            patientIn.setId(id);

            Optional<Patient> patientOut;
            Optional<Patient> oPatient = patientRepository.findById(id);
            setExisting(oPatient.isPresent());

            // if patient exists, update him
            if (isExisting()) {

                LOGGER.finer("Update patient.");

                // update patient in DB and retrieve the new
                patientOut = patientRepository.update(patientIn);

                // Check if retrieved patient is not null
                // if null it means the id is wrong.
                if (!patientOut.isPresent()) {

                    LOGGER.fine("Patient does not exist.");
                    throw new NotFoundException("Patient with the following id does not exist: " + id);
                }
            } else {

                LOGGER.finer("Resource does not exist.");
                throw new NotFoundException("Patient with the following id does not exist: " + id);
            }

            LOGGER.finer("Patient successfully updated.");
            return new PatientRepresentation(patientOut.get());
        } catch (Exception e) {
            throw new ResourceException(e);
        }
    }
}
