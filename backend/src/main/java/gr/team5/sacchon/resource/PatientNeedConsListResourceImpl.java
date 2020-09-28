package gr.team5.sacchon.resource;

import gr.team5.sacchon.exception.NotFoundException;
import gr.team5.sacchon.model.Patient;
import gr.team5.sacchon.repository.DoctorRepository;
import gr.team5.sacchon.repository.PatientRepository;
import gr.team5.sacchon.repository.util.JpaUtil;
import gr.team5.sacchon.representation.PatientRepresentation;
import gr.team5.sacchon.security.ResourceUtils;
import gr.team5.sacchon.security.Shield;
import org.restlet.engine.Engine;
import org.restlet.resource.ResourceException;
import org.restlet.resource.ServerResource;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

public class PatientNeedConsListResourceImpl extends ServerResource implements PatientNeedConsListResource{
    public static  final Logger LOGGER = Engine.getLogger(PatientNeedConsListResourceImpl.class);

    private DoctorRepository doctorRepository;
    private long doctorId;
    private EntityManager entityManager;

    /**
     *  This release method closes the entityManager
    **/
    @Override
    protected void doRelease() {
        entityManager.close();
    }

    protected void doInit(){

        LOGGER.info("Initializing patient list resource starts");
        try {
            entityManager = JpaUtil.getEntityManager();
            doctorRepository = new DoctorRepository(entityManager);
            doctorId = Long.parseLong(getAttribute("doctor_id"));
        } catch (Exception e) {
            throw new ResourceException(e);
        }

        LOGGER.info("Initializing patient list resource ends");
    }

    @Override
    public List<Patient> getPatientsWithNoCons() throws NotFoundException {
        LOGGER.finer("Select all patients that they need consultation.");

        // Check authorization, if role is patient, not allowed
        ResourceUtils.checkRole(this, Shield.ROLE_PATIENT);

        try {
//            List<Patient> patients  = doctorRepository.findPatientsNeedsCons(doctorId);
//            return patients;

//
//            List<PatientRepresentation> result = new ArrayList<>();
//            patients.forEach(patient -> result.add(new PatientRepresentation(patient)));

        } catch (Exception e) {
            throw new NotFoundException("patient list not found");
        }
        return null;
    }
}
