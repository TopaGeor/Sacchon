package gr.team5.sacchon.representation;

import gr.team5.sacchon.model.Consultation;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ConsultationRepresentation {
    private String advice;
    private String medication;
    private double dosage;
    /**
     * The URL of this resource which is:
     * http://localhost:9000/patient/{id}/consultation
     */
    private String uri;

    public ConsultationRepresentation(
            Consultation consultation) {
        if (consultation != null) {
            advice = consultation.getAdvice();
            medication = consultation.getMedication();
            dosage = consultation.getDosage();
            uri = "http://localhost:9000/patient/{id}/consultation" + consultation.getId();
        }
    }

    public Consultation createConsultation() {
        Consultation consultation = new Consultation();
        consultation.setAdvice(advice);
        consultation.setMedication(medication);
        consultation.setDosage(dosage);

        return consultation;
    }
}
