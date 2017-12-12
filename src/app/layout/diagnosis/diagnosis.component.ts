import { Component, OnInit } from '@angular/core';
import {DiagnosisService} from "./shared/diagnosis.service";
import {Diagnose} from "./shared/diagnose";
@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss']
})
export class DiagnosisComponent implements OnInit {

  public diagnosis: Diagnose[] = [];

  constructor(private diagnosisService: DiagnosisService) { }

  ngOnInit() {
    this.diagnosisService.getDiagnosis()
      .subscribe(data => this.diagnosis = data);
  }

  deleteDiagnose(diagnose){
//    console.log('deleteDiagnose')
 //   console.log(diagnose)
    if (confirm("Are you sure you want to delete " + diagnose.diagnosisName + "?")) {
      var index = this.diagnosis.indexOf(diagnose);
      this.diagnosis.splice(index, 1);

      this.diagnosisService.deleteDiagnose(diagnose.diagnosisId)
        .subscribe(null,
          err => {
            alert("Could not delete diagnose.");
            // Revert the view back to its original state
            this.diagnosis.splice(index, 0, diagnose);
          });
    }
  }

}
