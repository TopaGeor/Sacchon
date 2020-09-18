package gr.team5.sacchon.resource;

import gr.team5.sacchon.representation.DoctorRepresentation;
import org.restlet.resource.Delete;
import org.restlet.resource.Get;
import org.restlet.resource.Put;

public interface DoctorResource {
    @Get
    public DoctorRepresentation getDoctor();

    @Delete
    public void remove();

    @Put
    public DoctorRepresentation store(DoctorRepresentation doctorRepresentation);
}
