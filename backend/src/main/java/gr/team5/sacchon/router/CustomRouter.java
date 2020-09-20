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
        router.attach("/patient/login/", PatientDataResourceImpl.class);
        router.attach("/patient/{id}", PatientResourceImpl.class);
        router.attach("/patient/{id}/data", PatientDataResourceImpl.class);
        router.attach("/patient/{id}/data/{id}", PatientDataResourceImpl.class);
        router.attach("/patient/{id}/consultations", ConsultationResourceImpl.class);
        router.attach("/patient/{id}/consultations/{id}", ConsultationResourceImpl.class);
        router.attach("/patient/{id}/data/average", PatientDataResourceImpl.class);

        router.attach("/doctor", DoctorResourceImpl.class);
        router.attach("/doctor/login/", DoctorResourceImpl.class);
        router.attach("/doctor/{id}", DoctorResourceImpl.class);
        router.attach("/doctor/{id}/patient/{id}", PatientDataResourceImpl.class);
//      router.attach("/doctor/{id}/patient/{id}/consultations", ConsultationListResourceImpl.class);
        router.attach("/doctor/{id}/patient/{id}/consultations/{id}", ConsultationResourceImpl.class);

        return router;
    }
}
