package gr.team5.sacchon.resource;

import gr.team5.sacchon.exception.NotFoundException;
import gr.team5.sacchon.model.Consultation;
import gr.team5.sacchon.model.Doctor;
import gr.team5.sacchon.repository.ConsultationRepository;
import gr.team5.sacchon.repository.DoctorRepository;
import gr.team5.sacchon.repository.util.JpaUtil;
import gr.team5.sacchon.representation.ConsultationRepresentation;
import gr.team5.sacchon.representation.DoctorRepresentation;
import gr.team5.sacchon.security.ResourceUtils;
import gr.team5.sacchon.security.Shield;
import org.restlet.engine.Engine;
import org.restlet.resource.ResourceException;
import org.restlet.resource.ServerResource;

import javax.persistence.EntityManager;
import java.util.Optional;
import java.util.logging.Logger;

public class ConsultationResourceImpl extends ServerResource implements ConsultationResource {

    public static final Logger LOGGER = Engine.getLogger(ConsultationResourceImpl.class);

    private long id;
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
    @Override
    protected void doInit() {

        LOGGER.info("Initializing consultation resource starts");

        try {
            entityManager = JpaUtil.getEntityManager();
            consultationRepository = new ConsultationRepository(entityManager);
            id = Long.parseLong(getAttribute("id"));
        } catch (Exception e) {
            throw  new ResourceException(e);
        }

        LOGGER.info("Initializing patient resource ends");
    }

    /**
     *
     * @return consultation by id
     * @throws NotFoundException
     */
    @Override
    public ConsultationRepresentation getConsultation() throws NotFoundException {

        LOGGER.info("Retrieve a consultation");

        // Checking authorization
        ResourceUtils.checkRole(this, Shield.ROLE_DOCTOR);

        // Initialize persistence layer
        ConsultationRepository consultationRepository = new ConsultationRepository(entityManager);
        Consultation consultation;

        try {
            Optional<Consultation> oConsultation = consultationRepository.findById(id);

            setExisting(oConsultation.isPresent());
            if (!isExisting()) {

                LOGGER.config("consultation id does not exist: " + id);
                throw new NotFoundException("No consultation with id: " + id);
            } else {

                consultation = oConsultation.get();
                LOGGER.finer("User allowed to retrieve a consultation.");
                ConsultationRepresentation result = new ConsultationRepresentation(consultation);

                LOGGER.finer("Consultation successfully retrieved.");

                return result;
            }
        } catch (Exception e) {
            throw new ResourceException(e);
        }
    }
}
