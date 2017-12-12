
import { el } from '@angular/platform-browser/testing/src/browser_util';
import { selector } from 'rxjs/operator/multicast';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MedicineDispenseTotal } from '../dispense/shared/medicinedispensetotal.interface';
import { MedicineBrand } from '../medicines/shared/medicinebrand';

@Component({
  selector: 'app-medicinedispenseform',
  templateUrl: './medicinedispenseform.component.html',
  styleUrls: ['./medicinedispenseform.component.scss']
})
export class MedicineDispenseFormComponent implements OnInit {

  ngOnInit() {}


  
  /*  public myForm: FormGroup;
    medid: number;
    medName: string;
  medtotal: number;  
  medicineDispenseTotal : MedicineDispenseTotal[];
    medicines: MedicineBrand[]=[{medicineId: 5,genericName: 'Acetaminofem',laboratoryName: 'PfizerD40',concentration: 10,unity: 1000,volume: 600},{medicineId: 6,genericName: 'Acetaminofem',laboratoryName: 'Lab2',concentration: 10,unity: 1000,volume: 500},{medicineId: 8,genericName: 'Acetaminofem',laboratoryName: 'Lab4',concentration: 10,unity: 1000,volume: 100}];


    selectedCity: string;

    constructor(private formBuilder: FormBuilder,private route: ActivatedRoute) {

    }



  ngOnInit() {
        this.route.params.forEach((urlParams) => {
          this.medid= urlParams['medicineId'];
          this.medtotal=urlParams['total'];
          this.medName=urlParams['medicineName'];

        });

          this.myForm = this.formBuilder.group({
            medicineId: this.medid,
            total: this.medtotal,
            dispensations: this.formBuilder.array([
                this.initDispensation(),
            ])
        });

         console.log("this.myForm")
      console.log(this.myForm.controls.dispensations.toString())
  }

      initDispensation() {
        return this.formBuilder.group({
      medicineBrandId:"",
      quantity: "",
      lote: "",
        });
    }

        addDispensation() {
        const control = <FormArray>this.myForm.controls['dispensations'];
        control.push(this.initDispensation());
    }

        removeDispensation(i: number) {
        const control = <FormArray>this.myForm.controls['dispensations'];
        control.removeAt(i);
    }

        save(model: MedicineDispenseTotal) {
        // call API to save
        // ...
        console.log(model);
    }

  clickSendDispense(values) {
  console.log(values)

  

      }
dispensacion(){}*/




}
