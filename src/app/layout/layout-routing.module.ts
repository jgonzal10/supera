import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'medicinedispenseform', loadChildren: './medicinedispenseform/medicinedispenseform.module#MedicineDispenseFormModule' },
            { path: 'dyform', loadChildren: './dyform/dyform.module#DyFormModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'patients', loadChildren: './patients/patients.module#PatientsModule' },
            { path: 'diagnosis', loadChildren: './diagnosis/diagnosis.module#DiagnosisModule' },
            { path: 'preparations', loadChildren: './preparations/preparations.module#PreparationsModule' },
            { path: 'dispense', loadChildren: './dispense/dispense.module#DispenseModule' },
            { path: 'medicinedispense', loadChildren: './medicinedispense/medicinedispense.module#MedicineDispenseModule' },
            { path: 'patientschedule', loadChildren: './patientschedule/patientschedule.module#PatientScheduleModule' },
            { path: 'solutions', loadChildren: './solutions/solutions.module#SolutionsModule' },
            { path: 'schemas', loadChildren: './schemas/schemas.module#SchemasModule' },
            { path: 'medicines', loadChildren: './medicines/medicines.module#MedicinesModule' },
            { path: 'diagnosepatient', loadChildren: './diagnose-patient/diagnose-patient.module#DiagnosePatientModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
