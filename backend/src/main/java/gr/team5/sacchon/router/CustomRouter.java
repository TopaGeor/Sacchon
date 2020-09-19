package gr.team5.sacchon.router;

import gr.team5.sacchon.resource.*;
import org.restlet.Application;
import org.restlet.routing.Router;

public class CustomRouter {

    private Application app;

    public CustomRouter(Application app) {
        this.app = app;
    }

    public Router publicResources() {
        Router router = new Router();
        router.attach("/ping", PingServerResource.class);
        return router;
    }

    public Router createApiRouter() {

        Router router = new Router(app.getContext());

        router.attach("/patient", PatientResourceImpl.class);
        router.attach("/patient/", PatientDataResourceImpl.class);
        router.attach("/patient/{id}", PatientResourceImpl.class);
        router.attach("/patient/{id}/data", PatientDataResourceImpl.class);
        router.attach("/patient/{id}/consultation", ConsultationResourceImpl.class);
        router.attach("/patient/{id}/data/average", PatientDataResourceImpl.class);

        router.attach("/doctor", DoctorResourceImpl.class);
        router.attach("/doctor/", DoctorResourceImpl.class);
        router.attach("/doctor/{id}", DoctorResourceImpl.class);
        router.attach("/doctor/{id}/consultation", ConsultationResourceImpl.class);

        return router;
    }
}
