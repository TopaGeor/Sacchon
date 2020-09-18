package gr.team5.sacchon.repository.util;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 * Jpa Util creates Entity Managers
 */
public class JpaUtil {

    private static final String PERSISTENCE_UNIT_NAME = "PERSISTENCE";
    private static EntityManagerFactory factory;

    public static EntityManagerFactory getEntityManagerFactory() {
        if (factory == null) {
            factory = Persistence.createEntityManagerFactory(PERSISTENCE_UNIT_NAME);
        }
        return factory;
    }

    public static EntityManager getEntityManager() {

        EntityManager em = getEntityManagerFactory().createEntityManager();
        return em;
    }

    public static void shutdown() {
        if (factory != null) {
            factory.close();
        }
    }
}