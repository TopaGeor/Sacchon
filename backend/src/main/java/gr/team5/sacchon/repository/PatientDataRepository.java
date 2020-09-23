package gr.team5.sacchon.repository;

import gr.team5.sacchon.model.PatientData;
import javax.persistence.EntityManager;
import java.util.Date;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Optional;

/**
 * PatientDataRepository uses EntityManager from JpaUtil
 * to get/delete/update patient's data & save new ones
 */
public class PatientDataRepository {

    private EntityManager entityManager;

    // Constructor
    public PatientDataRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    // Find patient data by primary key id
    public Optional<PatientData> findById(Long id) {
        PatientData patientData = entityManager.find(PatientData.class, id);
        return patientData != null ? Optional.of(patientData) : Optional.empty();
    }

    // Find all patients data
    public List<PatientData> findAll() {
        return entityManager.createQuery("from PatientData").getResultList();
    }


    public List<PatientData> findDataById(long id) {
        List<PatientData> pd = entityManager.createQuery("SELECT pd" +
                " FROM PatientData pd" +
                " INNER JOIN Patient p" +
                " ON pd.patient = p" +
                " WHERE p.id = :id")
            .setParameter("id", id)
            .getResultList();

        return pd;
    }

    // Save new patient data
    public Optional<PatientData> save(PatientData patientData){
        //set date automatically
        patientData.setDate(new Date());
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

    // Modify incorrect submitted data
    public Optional<PatientData> update(PatientData patientData) {
        PatientData in = entityManager.find(PatientData.class, patientData.getId());
        in.setBloodGlucose(patientData.getBloodGlucose());
        in.setCarbIntake(patientData.getCarbIntake());
        in.setDate(patientData.getDate());
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

    // Delete incorrect submitted data
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
