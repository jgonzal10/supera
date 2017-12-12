import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Patient } from '../shared/patient';
import { PatientsService } from '../shared/patients.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {

form: FormGroup;
  title: string;
  patient: Patient = new Patient();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private patientsService: PatientsService
  ) {
    this.form = formBuilder.group({
      patientId: [''],
      patientName: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      patientGender: [''],
      patientAge: [''],
      patientWeight: [''],
      patientHeight: [''],
      patientIdNumber: [''],
      patientLastName: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];
      console.log('on init')
      console.log(id)
      this.title = id ? 'Editar Paciente' : 'Nuevo Paciente';

      if (!id)
        return;

      this.patientsService.getPatient(id)
        .subscribe(
          patient => this.patient = patient,
          response => {
            if (response.status == 404) {
              console.log('here')
              //this.router.navigate(['NotFound']);
            }
          });
    });
  }

  save() {
    var result,
        patientValue = this.form.value;

    if (patientValue.patientId){
  //  console.log('update p')
      result = this.patientsService.updatePatient(patientValue);
    } else {
 //   console.log('new p')

      result = this.patientsService.addPatient(patientValue);
    }

    result.subscribe(data => this.router.navigate(['patients']));
  }
  save2() {
    var result,
        patientValue = this.form.value;
        console.log(patientValue)
    if (patientValue.patientId){
  //  console.log('update p')
   //   result = this.patientsService.updatePatient(patientValue);
    } else {
 //   console.log('new p')

    //  result = this.patientsService.addPatient(patientValue);
    }

   // result.subscribe(data => this.router.navigate(['patients']));
  }


  }
