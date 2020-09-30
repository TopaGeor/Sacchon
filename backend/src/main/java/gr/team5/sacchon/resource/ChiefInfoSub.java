package gr.team5.sacchon.resource;

import gr.team5.sacchon.exception.NotFoundException;
import gr.team5.sacchon.representation.ChiefInfoSubRepresentation;
import org.restlet.resource.Get;

import java.util.List;

public interface ChiefInfoSub {
    @Get("json")
    public List<ChiefInfoSubRepresentation> getInfoSubmit() throws NotFoundException;
}
