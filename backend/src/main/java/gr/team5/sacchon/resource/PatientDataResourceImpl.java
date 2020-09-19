package gr.team5.sacchon.resource;

import gr.team5.sacchon.exception.BadEntityException;
import gr.team5.sacchon.exception.NotFoundException;
import gr.team5.sacchon.repository.PatientDataRepository;
import gr.team5.sacchon.repository.util.JpaUtil;
import gr.team5.sacchon.representation.PatientDataRepresentation;
import org.restlet.engine.Engine;
import org.restlet.resource.ServerResource;

import java.util.logging.Logger;

public class PatientDataResourceImpl extends ServerResource implements PatientDataResource {

    public static final Logger LOGGER = Engine.getLogger(ConsultationResourceImpl.class);
    private long id;
    private PatientDataRepository patientDataRepository;

    @Override
    protected void doInit() {

        LOGGER.info("Initializing patient data resource starts");

        try {
            patientDataRepository = new PatientDataRepository(JpaUtil.getEntityManager());
            id = Long.parseLong(getAttribute("id"));
        } catch (Exception e) {
            id = -1;
        }

        LOGGER.info("Initializing patient data resource ends");
    }

    @Override
    public PatientDataRepresentation getPatientData() throws NotFoundException {
        return null;
    }

    @Override
    public void remove() throws NotFoundException {

    }

    @Override
    public PatientDataRepresentation store(PatientDataRepresentation patientDataRepresentation) throws NotFoundException, BadEntityException {
        return null;
    }

    @Override
    public PatientDataRepresentation add(PatientDataRepresentation patientDataIn) throws BadEntityException {
        return null;
    }
}
