package gr.team5.sacchon.model;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
public class Consultation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String advice;
    private String medication;
    private double dosage;

    @ManyToOne
    @JoinColumn(name = "patient_id")
    private Patient patient;

    @ManyToOne
    @JoinColumn(name = "doc_id")
    private Doctor doctor;
}