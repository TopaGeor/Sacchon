import { Patient } from './patient';

export interface PatientData {
    id: number;
    patient: Patient;
    bloodGlucose: number;
    carbIntake: number;
    date: Date;
}
