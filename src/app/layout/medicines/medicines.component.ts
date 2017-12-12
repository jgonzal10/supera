import { Component, OnInit } from '@angular/core';
import {MedicinesService} from "./shared/medicines.service";
import {Medicine} from "./shared/medicine";
@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.scss']
})
export class MedicinesComponent implements OnInit {

 public medicines: Medicine[] = [];

  constructor(private medicinesService: MedicinesService) { }

 ngOnInit() {
    this.medicinesService.getMedicines()
      .subscribe(data => this.medicines = data);
  }

  deleteMedicine(medicine){
    if (confirm("Are you sure you want to delete " + medicine.medicineName + "?")) {
      var index = this.medicines.indexOf(medicine);
      this.medicines.splice(index, 1);

      this.medicinesService.deleteMedicine(medicine.medicineId)
        .subscribe(null,
          err => {
            alert("Could not delete medicine.");
            // Revert the view back to its original state
            this.medicines.splice(index, 0, medicine);
          });
    }
  }


}
