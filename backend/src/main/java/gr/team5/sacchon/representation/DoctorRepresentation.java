package gr.team5.sacchon.representation;

import gr.team5.sacchon.model.Doctor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class DoctorRepresentation {

    private String username;
    private String password;
    /**
     * The URL of this resource which is:
     * http://localhost:9000/doctor/{id}
     */
    private String uri;

    //constructor
    public DoctorRepresentation(
            Doctor doctor) {
        if (doctor != null) {
            username = doctor.getUsername();
            uri = "http://localhost:9000/doctor/" + doctor.getId();
        }
    }

    public Doctor createDoctor() {
        Doctor doctor = new Doctor();
        doctor.setUsername(username);
        doctor.setPassword(password);
        return doctor;
    }
}
