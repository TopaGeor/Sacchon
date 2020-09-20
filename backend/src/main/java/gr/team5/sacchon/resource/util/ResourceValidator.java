package gr.team5.sacchon.resource.util;

import gr.team5.sacchon.exception.BadEntityException;
import gr.team5.sacchon.representation.DoctorRepresentation;
import gr.team5.sacchon.representation.PatientDataRepresentation;
import gr.team5.sacchon.representation.PatientRepresentation;

public class ResourceValidator {
    /**
     * Checks that the given entity is not null.
     *
     * @param entity
     *            The entity to check.
     * @throws BadEntityException
     *             In case the entity is null.
     */
    public static void notNull(Object entity) throws BadEntityException {
        if (entity == null) {
            throw new BadEntityException("No input entity");
        }
    }

    /**
     * Checks that the given patient is valid.
     *
     * @param patientRepresentation
     * @throws BadEntityException
     */
    public static void validate(PatientRepresentation patientRepresentation) throws BadEntityException {
        if (patientRepresentation.getUsername() == null) {
            throw new BadEntityException("username of patient cannot be null");
        }
    }

    /**
     * Checks that the given doctor is valid.
     *
     * @param doctorRepresentation
     * @throws BadEntityException
     */
    public static void validate(DoctorRepresentation doctorRepresentation) throws BadEntityException {
        if (doctorRepresentation.getUsername() == null) {
            throw new BadEntityException("username of doctor cannot be null");
        }
    }

    /**
     * Checks that the given doctor is valid.
     *
     * @param patientDataRepresentation
     * @throws BadEntityException
     */
    public static void validate(PatientDataRepresentation patientDataRepresentation) throws BadEntityException {
        if (patientDataRepresentation.getUri() == null) {
            throw new BadEntityException("uri of patient data cannot be null");
        }
    }
}
