package gr.team5.sacchon.repository;

import gr.team5.sacchon.model.Patient;
import gr.team5.sacchon.model.PatientData;
import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

/**
 * PatientDataRepository uses EntityManager from JpaUtil
 * to get/delete/update patient's data & save new ones
 */
public class PatientDataRepository {

    private EntityManager entityManager;

    public PatientDataRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    //find patient data by primary key id
    public Optional<PatientData> findById(Long id) {
        PatientData patientData = entityManager.find(PatientData.class, id);
//        {
//            bloodglucose, timestamp, carbintake, id.patient
//            patient = getbyidPatient(id.patient);
//            patientData.setPatient(patient);
//
//        }
        return patientData != null ? Optional.of(patientData) : Optional.empty();
    }

    //find all patients-data
    public List<PatientData> findAll() {
        return entityManager.createQuery("from PatientData").getResultList();
    }

    //save new patient data
    public Optional<PatientData> save(PatientData patientData){
        try {
            entityManager.getTransaction().begin();
            entityManager.persist (patientData);
            entityManager.getTransaction().commit();
            return Optional.of(patientData);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return Optional.empty();
    }

    //modify incorrect submitted data
    public Optional<PatientData> update(PatientData patientData) {
        PatientData in = entityManager.find(PatientData.class, patientData.getId());
        in.setBloodGlucose(patientData.getBloodGlucose());
        in.setCarbIntake(patientData.getCarbIntake());
        in.setTimestamp(patientData.getTimestamp());
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

    //delete incorrect submitted data
    public boolean delete(Long id){
        Optional<PatientData> tempData = findById(id);
        if (tempData.isPresent()){
            PatientData toDelete = tempData.get();
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
