package gr.team5.sacchon.representation;

import gr.team5.sacchon.model.Consultation;
import gr.team5.sacchon.model.PatientData;
import lombok.Data;

@Data
public class ChiefInfoSubRepresentation {

    private PatientDataRepresentation patientData;
    private ConsultationRepresentation consultation;


    public ChiefInfoSubRepresentation(PatientData newData){
        patientData = new PatientDataRepresentation(newData);
        consultation = null;
    }

    public ChiefInfoSubRepresentation(Consultation newData){
        patientData = null;
        consultation = new ConsultationRepresentation(newData);
    }

}
