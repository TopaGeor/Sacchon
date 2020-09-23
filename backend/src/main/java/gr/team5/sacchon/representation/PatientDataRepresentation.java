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
    private long patientId;

    /**
     * The URL of this resource which is:
     * http://localhost:9000/patient/{id}/data
     */
    private String uri;

    /**
     * Constructor
     * @param patientData will be represent the resource
     */
    public PatientDataRepresentation(
            PatientData patientData) {
        if (patientData != null) {
            bloodGlucose = patientData.getBloodGlucose();
            carbIntake = patientData.getCarbIntake();
            date = patientData.getDate();
            patientId = patientData.getPatient().getId();
            uri = "http://localhost:9000/patient/" + patientId + "/data/" + patientData.getId();
        }
    }

    /**
     *
     * @return an instance of a patientData
     */
    public PatientData createPatientData() {
        PatientData patientData = new PatientData();
        patientData.setBloodGlucose(bloodGlucose);
        patientData.setCarbIntake(carbIntake);
        patientData.setDate(date);
        //patientData.setId(patientId);

        return patientData;
    }
}
