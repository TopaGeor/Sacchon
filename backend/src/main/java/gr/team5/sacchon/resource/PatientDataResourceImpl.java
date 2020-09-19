package gr.team5.sacchon.resource;

import gr.team5.sacchon.exception.BadEntityException;
import gr.team5.sacchon.exception.NotFoundException;
import gr.team5.sacchon.representation.PatientDataRepresentation;
import org.restlet.resource.ServerResource;

public class PatientDataResourceImpl extends ServerResource implements PatientDataResource {
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
