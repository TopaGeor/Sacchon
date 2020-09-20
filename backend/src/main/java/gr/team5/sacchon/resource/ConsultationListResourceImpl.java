package gr.team5.sacchon.resource;

import gr.team5.sacchon.exception.BadEntityException;
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

        LOGGER.finer("Add new doctor.");

        // Check authorization
        ResourceUtils.checkRole(this, Shield.ROLE_PATIENT);
        LOGGER.finer("User allowed to add a consultation.");

        // Check entity

        if (consultationReprIn == null) throw new BadEntityException("Bad entity");

        LOGGER.finer("consultation checked");

        try {

            // Convert ConsultationRepresentation to Consultation
            Consultation consultation = consultationReprIn.createConsultation();

            Optional<Consultation> consultationOptOut = consultationRepository.save(consultation);

            Consultation consultationOut;
            if (consultationOptOut.isPresent())
                consultationOut = consultationOptOut.get();
            else
                throw new BadEntityException("Consultation has not been created");

            ConsultationRepresentation result = new ConsultationRepresentation(consultationOut);

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
        ResourceUtils.checkRole(this, Shield.ROLE_DOCTOR);

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
