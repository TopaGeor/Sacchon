import { Doctor } from '../doctor';
import { Patient } from '../patient';

export interface Consultations {
    id: number;
    advice: string;
    dateCreated: Date;
    patient: Patient;
    doctor: Doctor;
}
