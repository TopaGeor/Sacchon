package gr.team5.sacchon.resource;

import gr.team5.sacchon.representation.PatientRepresentation;
import org.restlet.resource.Delete;
import org.restlet.resource.Get;

public interface PatientDataResource {

    @Get("json")
    public PatientRepresentation getPatient();

    @Delete
    public void remove();
}
