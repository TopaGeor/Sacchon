package gr.team5.sacchon.resource;

import gr.team5.sacchon.exception.BadEntityException;
import gr.team5.sacchon.exception.NotFoundException;
import gr.team5.sacchon.model.Doctor;
import gr.team5.sacchon.model.Patient;
import gr.team5.sacchon.repository.DoctorRepository;
import gr.team5.sacchon.repository.util.JpaUtil;
import gr.team5.sacchon.representation.DoctorRepresentation;
import gr.team5.sacchon.security.ResourceUtils;
import gr.team5.sacchon.security.Shield;
import org.restlet.engine.Engine;
import org.restlet.resource.ResourceException;
import org.restlet.resource.ServerResource;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;

public class DoctorListResourceImpl extends ServerResource implements DoctorListResource {

    public static  final Logger LOGGER = Engine.getLogger(DoctorResourceImpl.class);

    private DoctorRepository doctorRepository;
    private EntityManager entityManager;

    /**
     * This release method closes the entityManager
     */
    @Override
    protected void doRelease() {
        entityManager.close();
    }

    /**
     * Initializes the doctor repository
     */
    protected void doInit() {

        LOGGER.info("Initializing doctor list resource starts");

        try {
            entityManager = JpaUtil.getEntityManager();
            doctorRepository = new DoctorRepository(entityManager);
        } catch (Exception e) {
            throw new ResourceException(e);
        }

        LOGGER.info("Initializing doctor list resource ends");
    }

    /**
     *
     * @param doctorReprIn representation of a Doctor given by the frontEnd
     * @return a representation of the persisted object
     * @throws BadEntityException
     */
    @Override
    public DoctorRepresentation add(DoctorRepresentation doctorReprIn) throws BadEntityException {

        LOGGER.finer("Add new doctor.");

        // Check authorization
        ResourceUtils.checkRole(this, Shield.ROLE_DOCTOR);
        LOGGER.finer("User allowed to add a doctor.");

        // Check entity

        if (doctorReprIn == null) throw new BadEntityException("Bad entity");

        LOGGER.finer("doctor checked");

        try {

            // Convert DoctorRepresentation to Doctor
            Doctor doctor = doctorReprIn.createDoctor();

            Optional<Doctor> doctorOptOut = doctorRepository.save(doctor);

            Doctor doctorOut;
            if (doctorOptOut.isPresent())
                doctorOut = doctorOptOut.get();
            else
                throw new BadEntityException("Doctor has not been created");

            DoctorRepresentation result = new DoctorRepresentation(doctorOut);

            LOGGER.finer("Doctor successfully added.");

            return result;
        } catch (Exception ex) {
            LOGGER.log(Level.WARNING, "Error when adding a doctor", ex);
            throw new ResourceException(ex);
        }
    }

    /**
     *
     * @return list of all doctors
     * @throws NotFoundException
     */
    @Override
    public List<DoctorRepresentation> getDoctors() throws NotFoundException {

        LOGGER.finer("Select all doctors.");
        // Check authorization
        ResourceUtils.checkRole(this, Shield.ROLE_DOCTOR);

        try {

            List<Doctor> doctors = doctorRepository.findAll();
            List<DoctorRepresentation> result = new ArrayList<>();

            doctors.forEach(doctor -> result.add(new DoctorRepresentation(doctor)));

            return result;
        } catch (Exception e) {
            throw new NotFoundException("doctors not found");
        }
    }
}
