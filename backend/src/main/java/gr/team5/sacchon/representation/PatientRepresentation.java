package gr.team5.sacchon.representation;

import gr.team5.sacchon.model.Patient;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PatientRepresentation {

    private String username;
    private String password;
    private boolean hasNotification;
    /**
     * The URL of this resource which is:
     * http://localhost:9000/patient/{id}
     */
    private String uri;

    public PatientRepresentation(
            Patient patient) {
        if (patient != null) {
            username = patient.getUsername();
            uri = "http://localhost:9000/patient/" + patient.getId();
        }
    }

    public Patient createPatient() {
        Patient patient = new Patient();
        patient.setUsername(username);
        patient.setPassword(password);
        patient.isHasNotification();
        return patient;
    }
}
