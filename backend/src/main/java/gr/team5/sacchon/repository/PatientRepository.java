package gr.team5.sacchon.repository;

import gr.team5.sacchon.model.Patient;
import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

/**
 * PatientRepository uses EntityManager from JpaUtil
 * to get/delete/update a patient & save a new one
 */
public class PatientRepository {

    private EntityManager entityManager;

    public PatientRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    //find patient by primary key id
    public Optional<Patient> findById(Long id) {
        Patient patient = entityManager.find(Patient.class, id);
        return patient != null ? Optional.of(patient) : Optional.empty();
    }

    //find all patients
    public List<Patient> findAll() {
        return entityManager.createQuery("from Patient").getResultList();
    }

    //save a new patient
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

    //update username & password
    public Optional<Patient> update(Patient patient) {
        Patient in = entityManager.find(Patient.class, patient.getId());
        in.setUsername(patient.getUsername());
        in.setPassword(patient.getPassword());
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

    //delete account
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