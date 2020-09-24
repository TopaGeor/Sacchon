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
    public Optional<Patient> update(Patient patient) {
        Patient in = entityManager.find(Patient.class, patient.getId());
        in.setUsername(patient.getUsername());
        in.setHasNotification(patient.isHasNotification());

        System.out.println(patient.getPassword());
        in.setPassword(patient.getPassword());
        System.out.println(in.getPassword());
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