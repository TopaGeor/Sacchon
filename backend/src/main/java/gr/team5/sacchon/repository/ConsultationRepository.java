package gr.team5.sacchon.repository;

import gr.team5.sacchon.model.Consultation;
import javax.persistence.EntityManager;
import java.util.Optional;
import java.util.List;

/**
 * Consultation uses EntityManager from JpaUtil
 * to get/update a consultation for a patient
 * & save a new one
 */
public class ConsultationRepository {

    private EntityManager entityManager;

    public ConsultationRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    //find a consultation by id
    public Optional<Consultation> findById(Long id) {
        Consultation consultation = entityManager.find(Consultation.class, id);
//        {
//           medication, dosage for patient.id
//
//        }
        return consultation != null ? Optional.of(consultation) : Optional.empty();
    }

    //find all consultations
    public List<Consultation> findAll() {
        return entityManager.createQuery("from Consultation").getResultList();
    }

    //save a new consultation
    public Optional<Consultation> save(Consultation consultation){
        try {
            entityManager.getTransaction().begin();
            entityManager.persist (consultation);
            entityManager.getTransaction().commit();
            return Optional.of(consultation);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return Optional.empty();
    }

    //modify a consultation to a patient
    public Optional<Consultation> update(Consultation consultation) {
        Consultation in = entityManager.find(Consultation.class, consultation.getId());
        in.setAdvice(consultation.getAdvice());
        in.setMedication(consultation.getMedication());
        in.setDosage(consultation.getDosage());
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

    //consultations cannot be deleted

}
