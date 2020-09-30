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

        router.attach("/patient", PatientListResourceImpl.class);
        router.attach("/patient_null", PatientNullListResourceImpl.class);
        router.attach("/patient/login", PatientDataResourceImpl.class);
        router.attach("/patient/{id}", PatientResourceImpl.class);

        router.attach("/patient/{id}/data", PatientDataListResourceImpl.class);
        router.attach("/patient/{id}/data/average", PatientDataListResourceImpl.class);
        router.attach("/patient/{patient_id}/data/{id}", PatientDataResourceImpl.class);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // set doctor to a patient
        router.attach("/patient/{id}/{doctor_id}", PatientResourceImpl.class);

        router.attach("/doctor", DoctorListResourceImpl.class);
        router.attach("/doctor/login", DoctorResourceImpl.class);
        router.attach("/doctor/{id}", DoctorResourceImpl.class);
        router.attach("/doctor/{id}/patient", PatientListResourceImpl.class);

        // update/get specific patient of a doctor
        router.attach("/doctor/{doctor_id}/patient/{id}", PatientResourceImpl.class);

        // update & delete
        router.attach("/doctor/{doctor_id}/patient/{patient_id}/consultation/{id}", ConsultationResourceImpl.class);

        // add, get all for specific doctor/patient/all
        router.attach("/consultation", ConsultationListResourceImpl.class);

        // find patients with no consultation
        router.attach("/doctor/{doctor_id}/patientNoCons", PatientNeedConsListResourceImpl.class);

        return router;
    }
}
