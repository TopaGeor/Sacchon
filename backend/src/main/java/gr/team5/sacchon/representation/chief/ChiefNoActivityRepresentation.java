package gr.team5.sacchon.representation.chief;

import gr.team5.sacchon.model.Doctor;
import gr.team5.sacchon.model.Patient;
import gr.team5.sacchon.representation.DoctorRepresentation;
import gr.team5.sacchon.representation.PatientRepresentation;
import lombok.Data;

@Data
public class ChiefNoActivityRepresentation {

    private DoctorRepresentation doctor;
    private PatientRepresentation patient;

    public ChiefNoActivityRepresentation(Doctor doctorIn){
        doctor = new DoctorRepresentation(doctorIn);
        patient = null;
    }

    public ChiefNoActivityRepresentation(Patient patientIn){
        doctor = null;
        patient = new PatientRepresentation(patientIn);
    }
}
