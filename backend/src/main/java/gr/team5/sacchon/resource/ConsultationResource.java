package gr.team5.sacchon.resource;

import gr.team5.sacchon.exception.NotFoundException;
import gr.team5.sacchon.representation.ConsultationRepresentation;
import org.restlet.resource.Get;

public interface ConsultationResource {
    @Get("json")
    public ConsultationRepresentation getConsultation() throws NotFoundException;
}
