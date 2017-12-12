import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Medicine } from '../shared/medicine';
import { MedicinesService } from '../shared/medicines.service';
@Component({
  selector: 'app-medicine-form',
  templateUrl: './medicine-form.component.html',
  styleUrls: ['./medicine-form.component.scss']
})
export class MedicineFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  medicine: Medicine = new Medicine();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private medicinesService: MedicinesService
  ) {
    this.form = formBuilder.group({
      medicineId: [''],
      genericName: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      comercialName: [''],
      concentration: [''],
      unities: [''],
      volume: [''],
      factor: [''],
      ref_cal: [''],
      maxApplicationDose: [''],
      maxAcumDose: [''],
    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];
      //console.log('on init')
    //  console.log(id)
      this.title = id ? 'Editar Medicamento' : 'Nuevo Medicamento';

      if (!id)
        return;

      this.medicinesService.getMedicine(id)
        .subscribe(
          medicine => this.medicine = medicine,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  save() {
    var result,
        medicineValue = this.form.value;

    if (medicineValue.medicineId){
   // console.log('update medicamento')
      result = this.medicinesService.updateMedicine(medicineValue);
    } else {
  //  console.log('new medicamento')

      result = this.medicinesService.addMedicine(medicineValue);
    }

    result.subscribe(data => this.router.navigate(['medicines']));
  }

}
