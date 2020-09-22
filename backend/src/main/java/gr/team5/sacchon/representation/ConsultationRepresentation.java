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
            uri = "http://localhost:9000/patient/{id}/consultations/" + consultation.getId();
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
