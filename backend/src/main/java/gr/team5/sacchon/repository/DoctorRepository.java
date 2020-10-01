package gr.team5.sacchon.repository;

import gr.team5.sacchon.model.*;
import gr.team5.sacchon.security.Role;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

/**
 * DoctorRepository uses EntityManager from JpaUtil
 * to get/delete/update a doctor & save a new one
 */
public class DoctorRepository {

    private EntityManager entityManager;

    /**
     * DoctorRepository constructor
     * @param entityManager
     */
    public DoctorRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    /**
     * Find doctor by primary key id
     * @param id
     * @return
     */
    public Optional<Doctor> findById(Long id) {
        Doctor doctor = entityManager.find(Doctor.class, id);
        return doctor != null ? Optional.of(doctor) : Optional.empty();
    }

    /**
     * Find all doctors
     * @return
     */
    public List<Doctor> findAll() {
        return entityManager.createQuery("from Doctor").getResultList();
    }

    /**
     * Save a new doctor
     * @param doctor
     * @return
     */
    public Optional<Doctor> save(Doctor doctor){
        // For Chousiadas to test
//        DatabaseUser user = new DatabaseUser();
//        user.setUsername(doctor.getUsername());
//        user.setPassword(doctor.getPassword());
//        user.setRole(Role.ROLE_DOCTOR);

        try {
            entityManager.getTransaction().begin();
            entityManager.persist(doctor);
//            entityManager.persist(user);
            entityManager.getTransaction().commit();
            return Optional.of(doctor);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return Optional.empty();
    }

    /**
     * Update username & password
     * @param doctor
     * @return
     */
    public Optional<Doctor> update(Doctor doctor) {
        // For Chousiadas to test
        Doctor in = entityManager.find(Doctor.class, doctor.getId());
//        DatabaseUser user = entityManager.find(DatabaseUser.class, in.getUsername());

        in.setUsername(doctor.getUsername());
        in.setPassword(doctor.getPassword());

//        user.setUsername(doctor.getUsername());
//        user.setPassword(doctor.getPassword());

        try {
            entityManager.getTransaction().begin();
            entityManager.persist(in);
//            entityManager.persist(user);
            entityManager.getTransaction().commit();
            return Optional.of(in);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return Optional.empty();
    }

    /**
     * Delete account
     * @param id
     * @return
     */
    public boolean delete(Long id){
        // For Chousiadas to test

        Optional<Doctor> tempDoctor = findById(id);
        if (tempDoctor.isPresent()){
            Doctor toDelete = tempDoctor.get();
//            DatabaseUser user = entityManager.find(DatabaseUser.class, toDelete.getUsername());

            try{
                entityManager.getTransaction().begin();
                entityManager.remove(toDelete);
//                entityManager.remove(user);
                entityManager.getTransaction().commit();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return true;
    }
}
