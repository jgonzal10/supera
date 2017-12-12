import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../../router.animations';

import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Medicine } from './shared/medicine.interface';
import { MedicineDispenseTotal } from '../dispense/shared/medicinedispensetotal.interface';
@Component({
    selector: 'app-dyform',
    templateUrl: './dyform.component.html',
    styleUrls: ['./dyform.component.scss'],
    animations: [routerTransition()]
})
export class DyFormComponent implements OnInit {
 public myForm: FormGroup;
// public medicinetotals:MedicineDispenseTotal[] = [];

public medicinetotals:MedicineDispenseTotal[] = [
    {medicineId: 13545345345345435345345, total: 1000435345345345345345345},
    {medicineId: 13545345345345435345345, total: 1000435345345345345345345}

];
    constructor(private _fb: FormBuilder,private router: Router) { }

    ngOnInit() {
    console.log(this.medicinetotals)
        const controlmed = this.medicinetotals.length;
        this.myForm = this._fb.group({
            name: [''],
            total: ['', [Validators.required, Validators.minLength(5)]],
            dispensations: this._fb.array([
                this.initDispensation(),
            ])
        });
    }

    initDispensation() {
        return this._fb.group({
            medicineBrandId: ['', Validators.required],
            quantity: ['', Validators.required],
            lote: ['']
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

    save(model: Medicine) {
        // call API to save
        // ...
        console.log(model);
    }

    clickMedicine(medicine){
    console.log(medicine)
      
        this.router.navigate(['/medicinedispenseform',medicine]);
    }
}
