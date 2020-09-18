package gr.team5.sacchon.resource;

import gr.team5.sacchon.repository.DoctorRepository;
import gr.team5.sacchon.repository.util.JpaUtil;
import gr.team5.sacchon.representation.DoctorRepresentation;
import org.restlet.engine.Engine;
import org.restlet.resource.ServerResource;

import java.util.logging.Logger;

public class DoctorResourceImpl extends ServerResource implements DoctorResource {

    public static final Logger LOGGER = Engine.getLogger(DoctorResourceImpl.class);
    private long id;
    private DoctorRepository doctorRepository;

    @Override
    protected void doInit() {
        LOGGER.info("Initializing doctor resource starts");

        try {
            doctorRepository = new DoctorRepository(JpaUtil.getEntityManager());
            id = Long.parseLong(getAttribute("id"));
        } catch (Exception e) {
            id = -1;
        }

        LOGGER.info("Initializing doctor resource ends");
    }

    @Override
    public DoctorRepresentation getDoctor() {
        return null;
    }

    @Override
    public void remove() {

    }

    @Override
    public DoctorRepresentation store(DoctorRepresentation doctorRepresentation) {
        return null;
    }
}
