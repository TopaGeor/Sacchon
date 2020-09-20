package gr.team5.sacchon.representation;

import gr.team5.sacchon.model.PatientData;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@Data
@NoArgsConstructor
public class PatientDataRepresentation {

    private Double bloodGlucose;
    private Double carbIntake;
    private Date date;
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
            date = patientData.getDate();
            uri = "http://localhost:9000/patient/{id}/data/" + patientData.getId();
        }
    }

    public PatientData createPatientData() {
        PatientData patientData = new PatientData();
        patientData.setBloodGlucose(bloodGlucose);
        patientData.setCarbIntake(carbIntake);

        return patientData;
    }
}
