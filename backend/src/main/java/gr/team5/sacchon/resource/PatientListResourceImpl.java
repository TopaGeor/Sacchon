package gr.team5.sacchon.resource;

import gr.team5.sacchon.exception.BadEntityException;
import gr.team5.sacchon.exception.NotFoundException;
import gr.team5.sacchon.repository.PatientRepository;
import gr.team5.sacchon.representation.PatientRepresentation;
import org.restlet.engine.Engine;
import org.restlet.resource.ServerResource;

import java.util.List;
import java.util.logging.Logger;

public class PatientListResourceImpl  extends ServerResource implements PatientListResource {

    public static  final Logger LOGGER = Engine.getLogger(PatientResourceImpl.class);
    private PatientRepository patientRepository;

    protected void doInit() {

    }

    @Override
    public PatientRepresentation add(PatientRepresentation patientReprIn) throws BadEntityException {
        return null;
    }

    @Override
    public List<PatientRepresentation> getPatients() throws NotFoundException {
        return null;
    }
}
