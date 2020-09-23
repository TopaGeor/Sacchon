package gr.team5.sacchon.representation;

import gr.team5.sacchon.model.Consultation;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
public class ConsultationRepresentation {
    private String advice;
    private Date dateCreated;
    private long patientId;

    /**
     * The URL of this resource which is:
     * http://localhost:9000/patient/{id}/consultations
     */
    private String uri;

    /**
     * Constructor
     * @param consultation will be represent the resource
     */
    public ConsultationRepresentation(
            Consultation consultation) {
        if (consultation != null) {
            advice = consultation.getAdvice();
            dateCreated = consultation.getDateCreated();
            patientId = consultation.getPatient().getId();
            uri = "http://localhost:9000/patient/" + patientId + "/consultation/" + consultation.getId();
        }
    }

    /**
     *
     * @return an instance of consultation
     */
    public Consultation createConsultation() {
        Consultation consultation = new Consultation();
        consultation.setAdvice(advice);
        consultation.setDateCreated(dateCreated);

        return consultation;
    }
}
