package gr.team5.sacchon.resource;

import gr.team5.sacchon.exception.NotFoundException;
import gr.team5.sacchon.repository.ConsultationRepository;
import gr.team5.sacchon.repository.util.JpaUtil;
import gr.team5.sacchon.representation.ConsultationRepresentation;
import org.restlet.engine.Engine;
import org.restlet.resource.ServerResource;

import java.util.logging.Logger;

public class ConsultationResourceImpl extends ServerResource implements ConsultationResource {

    public static final Logger LOGGER = Engine.getLogger(ConsultationResourceImpl.class);
    private long id;
    private ConsultationRepository consultationRepository;

    @Override
    protected void doInit() {

        LOGGER.info("Initializing consultation resource starts");

        try {
            consultationRepository = new ConsultationRepository(JpaUtil.getEntityManager());
            id = Long.parseLong(getAttribute("id"));
        } catch (Exception e) {
            id = -1;
        }

        LOGGER.info("Initializing patient resource ends");
    }

    @Override
    public ConsultationRepresentation getConsultation() throws NotFoundException {
        return null;
    }
}
