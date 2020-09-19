package gr.team5.sacchon.resource;

import gr.team5.sacchon.representation.PatientRepresentation;
import org.restlet.resource.Delete;
import org.restlet.resource.Get;
import org.restlet.resource.Put;

public interface PatientResource {
    @Get("json")
    public PatientRepresentation getPatient();

    @Delete
    public void remove();

    @Put("json")
    public PatientRepresentation store(PatientRepresentation patientRepresentation);
}
