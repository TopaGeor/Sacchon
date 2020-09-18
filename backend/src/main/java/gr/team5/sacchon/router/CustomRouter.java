package gr.team5.sacchon.router;

import gr.team5.sacchon.resource.ConsultationResourceImpl;
import gr.team5.sacchon.resource.PatientDataResourceImpl;
import gr.team5.sacchon.resource.PatientResourceImpl;
import gr.team5.sacchon.resource.PingServerResource;
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

    public Router createPatientRouter() {

        Router router = new Router(app.getContext());

//        router.attach("/patient", PatientResourceImpl.class);
//        router.attach("/patient/", PatientDataResourceImpl.class);
//        router.attach("/patient/{id}", PatientResourceImpl.class);
//        router.attach("/patient/{id}/data", PatientDataResourceImpl.class);
//        router.attach("/patient/{id}/consultation", ConsultationResourceImpl.class);
//        router.attach("/patient/{id}/data/average", PatientDataResourceImpl.class);

        return router;
    }

    public Router createDoctorRouter() {

        Router router = new Router(app.getContext());

        return router;
    }
}
