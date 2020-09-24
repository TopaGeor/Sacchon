package gr.team5.sacchon.repository;

import gr.team5.sacchon.model.Consultation;
import javax.persistence.EntityManager;
import java.util.Optional;
import java.util.List;

/**
 * ConsultationRepository uses EntityManager from JpaUtil
 * to get/update a consultation for a patient
 * & save a new one
 */
public class ConsultationRepository {

    private EntityManager entityManager;

    // Constructor
    public ConsultationRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    // Find a consultation by id
    public Optional<Consultation> findById(Long id) {
        Consultation consultation = entityManager.find(Consultation.class, id);
        return consultation != null ? Optional.of(consultation) : Optional.empty();
    }

    // Find all consultations
    public List<Consultation> findAll() {
        return entityManager.createQuery("from Consultation").getResultList();
    }

    // Find Consultations by id
    public List<Consultation> findConsultationById(long id) {
        List<Consultation> c = entityManager.createQuery("SELECT c" +
                " FROM Consultation c" +
                " INNER JOIN Patient p" +
                " ON c.patient = p" +
                " WHERE p.id = :id")
                .setParameter("id", id)
                .getResultList();

        return c;
    }

    // Save a new consultation
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

    // Modify a consultation to a patient
    public Optional<Consultation> update(Consultation consultation) {
        Consultation in = entityManager.find(Consultation.class, consultation.getId());
        in.setAdvice(consultation.getAdvice());
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

    // Consultations cannot be deleted

}
