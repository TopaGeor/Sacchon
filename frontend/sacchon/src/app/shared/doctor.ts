
import { Consultations } from '../doctor/consultations/consultations';
import { Patient } from './patient';


export interface Doctor {
    id: number;
    username: string;
    password: string;
    patient: Patient;
    consultation: Consultations;
}
