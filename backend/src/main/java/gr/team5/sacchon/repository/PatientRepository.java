package gr.team5.sacchon.repository;

import gr.team5.sacchon.model.Patient;
import org.restlet.resource.ServerResource;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

/**
 * PatientRepository uses EntityManager from JpaUtil
 * to get/delete/update a patient & save a new one
 */
public class PatientRepository extends ServerResource {

    private EntityManager entityManager;

    // Constructor
    public PatientRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    // Find patient by primary key id
    public Optional<Patient> findById(Long id) {
        Patient patient = entityManager.find(Patient.class, id);
        return patient != null ? Optional.of(patient) : Optional.empty();
    }

    // Find all patients
    public List<Patient> findAll() {
        return entityManager.createQuery("from Patient").getResultList();
    }

    // Find patients with doctor id  null
    public List<Patient> findPatientWithDoctorIdNull() {
        List<Patient> patientList = entityManager
                .createQuery("SELECT p FROM Patient p" +
                        " WHERE doctor_id IS NULL", Patient.class)
                .getResultList();

        return patientList;
    }

    // Find patients for specific doctor id
    public List<Patient> findPatientWithDoctorId(Long id) {
        List<Patient> patientList = entityManager
                .createQuery("SELECT p FROM Patient p" +
                        " WHERE doctor_id = :id", Patient.class)
                .setParameter("id",id)
                .getResultList();

        return patientList;
    }

    // Save a new patient
    public Optional<Patient> save(Patient patient){
        try {
            entityManager.getTransaction().begin();
            entityManager.persist (patient);
            entityManager.getTransaction().commit();
            return Optional.of(patient);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return Optional.empty();
    }

    // Update username & password
    public Optional<Patient> update(Patient patient){
        Patient in = entityManager.find(Patient.class, patient.getId());
        in.setUsername(patient.getUsername());
        in.setHasNotification(patient.isHasNotification());
        in.setPassword(patient.getPassword());
        in.setDoctor(patient.getDoctor());
        try {
            entityManager.getTransaction().begin();
            entityManager.persist(in);
            entityManager.getTransaction().commit();
            return Optional.of(in);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return Optional.empty();
    }

    // Update notification for a new consultation
    public void updateHasNotification(long id, boolean notification){
        Patient patientIn = entityManager.find(Patient.class, id);
        patientIn.setHasNotification(notification);
        try {
            entityManager.getTransaction().begin();
            entityManager.persist(patientIn);
            entityManager.getTransaction().commit();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Delete account
    public boolean delete(Long id){
        Optional<Patient> tempPatient = findById(id);
        if (tempPatient.isPresent()){
            Patient toDelete = tempPatient.get();
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