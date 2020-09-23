package gr.team5.sacchon.resource;

import gr.team5.sacchon.exception.BadEntityException;
import gr.team5.sacchon.exception.NotFoundException;
import gr.team5.sacchon.model.Consultation;
import gr.team5.sacchon.repository.ConsultationRepository;
import gr.team5.sacchon.repository.util.JpaUtil;
import gr.team5.sacchon.representation.ConsultationRepresentation;
import gr.team5.sacchon.resource.util.ResourceValidator;
import gr.team5.sacchon.security.ResourceUtils;
import gr.team5.sacchon.security.Shield;
import org.restlet.data.Status;
import org.restlet.engine.Engine;
import org.restlet.resource.ResourceException;
import org.restlet.resource.ServerResource;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;

public class ConsultationListResourceImpl extends ServerResource implements ConsultationListResource {

    public static  final Logger LOGGER = Engine.getLogger(ConsultationResourceImpl.class);

    private ConsultationRepository consultationRepository;
    private EntityManager entityManager;

    /**
     * This release method closes the entityManager
     */
    @Override
    protected void doRelease() {
        entityManager.close();
    }

    /**
     * Initializes the consultation repository
     */
    protected void doInit() {

        LOGGER.info("Initializing consultation list resource starts");

        try {
            entityManager = JpaUtil.getEntityManager();
            consultationRepository = new ConsultationRepository(entityManager);
        } catch (Exception e) {
            throw new ResourceException(e);
        }

        LOGGER.info("Initializing consultation list resource ends");
    }

    /**
     *
     * @param consultationReprIn representation of a Consultation given by the frontEnd
     * @return a representation of the persisted object
     * @throws BadEntityException
     */
    @Override
    public ConsultationRepresentation add(ConsultationRepresentation consultationReprIn) throws BadEntityException {

        LOGGER.finer("Add new consultation.");

        // Check authorization
        ResourceUtils.checkRole(this, Shield.ROLE_PATIENT);
        ResourceUtils.checkRole(this, Shield.ROLE_CHIEF);
        LOGGER.finer("User allowed to add a consultation.");

        // Check entity
        ResourceValidator.notNull(consultationReprIn);
        ResourceValidator.validate(consultationReprIn);

        LOGGER.finer("consultation checked");

        try {

            // Convert ConsultationRepresentation to Consultation
            Consultation consultationIn = new Consultation();
            consultationIn.setAdvice(consultationReprIn.getAdvice());
            consultationIn.setDateCreated(consultationReprIn.getDateCreated());
            consultationIn.setId(consultationReprIn.getPatientId());

            Optional<Consultation> consultationOptOut = consultationRepository.save(consultationIn);

            Consultation consultation = null;
            if (consultationOptOut.isPresent())
                consultation = consultationOptOut.get();
            else
                throw new BadEntityException("Consultation has not been created");

            ConsultationRepresentation result = new ConsultationRepresentation(consultation);

            result.setAdvice(consultation.getAdvice());
            result.setDateCreated(consultation.getDateCreated());
            //result.setPatientId(consultation.getPatient().getId());
            result.setUri("http://localhost:9000/patient/" +
                    consultation.getPatient().getId() + "/consultation/" + consultation.getId());

            getResponse().setLocationRef("http://localhost:9000/patient/" +
                    consultation.getPatient().getId() + "/consultation/" + consultation.getId());
            getResponse().setStatus(Status.SUCCESS_CREATED);

            LOGGER.finer("Consultation successfully added.");

            return result;
        } catch (Exception ex) {
            LOGGER.log(Level.WARNING, "Error when adding a consultation", ex);
            throw new ResourceException(ex);
        }
    }

    /**
     *
     * @return list of all consultations
     * @throws NotFoundException
     */
    @Override
    public List<ConsultationRepresentation> getConsultations() throws NotFoundException {

        LOGGER.finer("Select all consultations.");
        // Check authorization
        ResourceUtils.checkRole(this, Shield.ROLE_PATIENT);

        try {

            List<Consultation> consultations = consultationRepository.findAll();
            List<ConsultationRepresentation> result = new ArrayList<>();

            consultations.forEach(consultation -> result.add(new ConsultationRepresentation(consultation)));

            return result;
        } catch (Exception e) {
            throw new NotFoundException("consultations not found");
        }
    }
}
