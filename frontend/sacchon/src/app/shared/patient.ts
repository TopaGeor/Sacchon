import { Consultations } from './consultations/consultations';
import { PatientData } from './patient-data';

export interface Patient {
    id: number;
    username: string;
    password: string;
    hasNotification: boolean;
    patientData: PatientData;
    consultations: Consultations;
    doctor: number;
}
