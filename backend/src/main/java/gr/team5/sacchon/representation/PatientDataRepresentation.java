package gr.team5.sacchon.representation;

import gr.team5.sacchon.model.PatientData;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.sql.Timestamp;

@Data
@NoArgsConstructor
public class PatientDataRepresentation {

    private Double bloodGlucose;
    private Double carbIntake;
    private Timestamp timestamp;
    /**
     * The URL of this resource which is:
     * http://localhost:9000/patient/{id}/data
     */
    private String uri;

    public PatientDataRepresentation(
            PatientData patientData) {
        if (patientData != null) {
            bloodGlucose = patientData.getBloodGlucose();
            carbIntake = patientData.getCarbIntake();
            timestamp = patientData.getTimestamp();
            uri = "http://localhost:9000/patient/{id}/data" + patientData.getId();
        }
    }

    public PatientData createPatientData() {
        PatientData patientData = new PatientData();
        patientData.setBloodGlucose(bloodGlucose);
        patientData.setCarbIntake(carbIntake);
        patientData.setTimestamp(timestamp);
        return patientData;
    }
}
