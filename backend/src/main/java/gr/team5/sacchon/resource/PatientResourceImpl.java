package gr.team5.sacchon.resource;

import gr.team5.sacchon.repository.PatientRepository;
import gr.team5.sacchon.repository.util.JpaUtil;
import gr.team5.sacchon.representation.PatientRepresentation;
import org.restlet.engine.Engine;
import org.restlet.resource.Get;
import org.restlet.resource.ServerResource;

import java.util.logging.Logger;

public class PatientResourceImpl extends ServerResource implements PatientResource {

    public static final Logger LOGGER = Engine.getLogger(PatientResourceImpl.class);
    private long id;
    private PatientRepository patientRepository;

    @Override
    protected void doInit() {

        LOGGER.info("Initializing patient resource starts");

        try {
            patientRepository = new PatientRepository(JpaUtil.getEntityManager());
            id = Long.parseLong(getAttribute("id"));
        } catch (Exception e) {
            id = -1;
        }

        LOGGER.info("Initializing patient resource ends");
    }

    @Override
    public PatientRepresentation getPatient() {
        return null;
    }

    @Override
    public void remove() {

    }

    @Override
    public PatientRepresentation store(PatientRepresentation patientRepresentation) {
        return null;
    }

}
