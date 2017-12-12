import { Component, OnInit } from '@angular/core';
import {PatientsService} from "./shared/patients.service";
import {Patient} from "./shared/patient";
import {DataTableModule,SharedModule} from 'primeng/primeng';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {


  public patients: Patient[] = [];

  constructor(private patientsService: PatientsService) { }

  ngOnInit() {
    this.patientsService.getPatients()
      .subscribe(data => this.patients = data);
  }

  deletePatient(patient){
    if (confirm("Are you sure you want to delete " + patient.patientName + "?")) {
      var index = this.patients.indexOf(patient);
      this.patients.splice(index, 1);

      this.patientsService.deletePatient(patient.patientId)
        .subscribe(null,
          err => {
            alert("Could not delete patient.");
            // Revert the view back to its original state
            this.patients.splice(index, 0, patient);
          });
    }
  }
}
