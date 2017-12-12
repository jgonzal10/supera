import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { SelectItem } from 'primeng/primeng';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { MedicineDispenseTotal } from './shared/medicinedispensetotal.interface';

@Component({
  selector: 'app-medicinedispense',
  templateUrl: './medicinedispense.component.html',
  styleUrls: ['./medicinedispense.component.scss']
})
export class MedicineDispenseComponent implements OnInit {
public myForm: FormGroup;
selectedMedicine: MedicineDispenseTotal;

public medicinetotals:MedicineDispenseTotal[] = [
    {medicineId: 13545345345345435345345, medicineName:'Acetaminofem', total: 45345345},
    {medicineId: 34543, medicineName:'Dolex', total: 100043},
    {medicineId: 34543, medicineName:'Dolex', total: 100043},
    {medicineId: 456546, medicineName:'PmMe2', total: 100043344},
    {medicineId: 4534543, medicineName:'PmMe256', total: 567100043},
    {medicineId: 65734435543, medicineName:'DolexAc', total: 567100043},
    {medicineId: 65734543, medicineName:'Primosta', total: 78100043},

];
    constructor(private _fb: FormBuilder,private router: Router) { }

    ngOnInit() {
   // console.log(this.medicinetotals)
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

    save(model: MedicineDispenseTotal) {
        // call API to save
        // ...
        console.log(model);
    }

    clickMedicine(medicine){
    console.log(medicine)
      
        this.router.navigate(['/medicinedispenseform',medicine]);
    }

    onRowSelect(event) {
       console.log(event.data.medicineId );
       console.log(event.data.medicineName );
       console.log(event.data.total );
       this.router.navigate(['/medicinedispenseform',event.data]);
    }

    onRowUnselect(event) {
            console.log(event.data.medicineId );
                   console.log(event.data.medicineName );
       console.log(event.data.total );
    }

}
