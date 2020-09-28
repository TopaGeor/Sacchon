package gr.team5.sacchon.repository;

import gr.team5.sacchon.model.Doctor;
import gr.team5.sacchon.model.Patient;
import gr.team5.sacchon.model.PatientData;
import gr.team5.sacchon.representation.PatientRepresentation;

import javax.persistence.EntityManager;
import java.util.Date;
import java.util.List;
import java.util.Optional;

/**
 * DoctorRepository uses EntityManager from JpaUtil
 * to get/delete/update a doctor & save a new one
 */
public class DoctorRepository {

    private EntityManager entityManager;

    // Constructor
    public DoctorRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    // Find doctor by primary key id
    public Optional<Doctor> findById(Long id) {
        Doctor doctor = entityManager.find(Doctor.class, id);
        return doctor != null ? Optional.of(doctor) : Optional.empty();
    }

    // Find all doctors
    public List<Doctor> findAll() {
        return entityManager.createQuery("from Doctor").getResultList();
    }

    // Save a new doctor
    public Optional<Doctor> save(Doctor doctor){
        try {
            entityManager.getTransaction().begin();
            entityManager.persist (doctor);
            entityManager.getTransaction().commit();
            return Optional.of(doctor);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return Optional.empty();
    }

    // Update username & password
    public Optional<Doctor> update(Doctor doctor) {
        Doctor in = entityManager.find(Doctor.class, doctor.getId());
        in.setUsername(doctor.getUsername());
        in.setPassword(doctor.getPassword());
        try {
            entityManager.getTransaction().begin();
            entityManager.persist (in);
            entityManager.getTransaction().commit();
            return Optional.of(in);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return Optional.empty();
    }

    // Delete account
    public boolean delete(Long id){
        Optional<Doctor> tempDoctor = findById(id);
        if (tempDoctor.isPresent()){
            Doctor toDelete = tempDoctor.get();
            try{
                entityManager.getTransaction().begin();
                entityManager.remove(toDelete);
                entityManager.getTransaction().commit();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return true;
    }
}
