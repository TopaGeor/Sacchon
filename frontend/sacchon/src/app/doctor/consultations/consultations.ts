import { Doctor } from 'src/app/shared/doctor';
import { Patient } from 'src/app/shared/patient';



export interface Consultations {
    id: number;
    advice: string;
    dateCreated: Date;
    patient: Patient;
    doctor: Doctor;
}
