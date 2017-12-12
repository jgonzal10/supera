
import { el } from '@angular/platform-browser/testing/src/browser_util';
import { selector } from 'rxjs/operator/multicast';

import 'rxjs/add/operator/switchMap';


import { Router, ActivatedRoute } from '@angular/router';

import { SelectItem } from 'primeng/primeng';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-dispense',
  templateUrl: './dispense.component.html',
  styleUrls: ['./dispense.component.scss']
})
export class DispenseComponent implements OnInit {
  medid: number;
  medtotal: number;
  private sub: any;
  @ViewChild('pdf') el: ElementRef;

  segmentos: SelectItem[];
  grupos: SelectItem[];
  users: SelectItem[];
  selectedUsers: string[] = [];

  showTable = false;
  selectedGrupo: string;
  selectedSegmento: string;
  valueDataInicio: Date;
  valueDataFim: Date;

      constructor(private route: ActivatedRoute) {
          this.segmentos = [];
          this.segmentos.push({label: '(Todos)', value: 'Todos'});
          this.segmentos.push({label: 'DETRAN', value: 'DETRAN'});
          this.grupos = [];
          this.grupos.push({label: '(Selecione)', value: 'NULL'});
          this.users = [];
      }

  ngOnInit() {
     
        this.route.params.forEach((urlParams) => {
          this.medid= urlParams['medicineId'];
          this.medtotal=urlParams['total'];

        });
        console.log(this.medid); 
        console.log(this.medtotal); 
  }

  Pesquisar() {

  

      }
    


  onChangeSegmento(event: any) {

  }

  onChangeGrupo(event: any) {

  }

  download() {


   }

  changeDateFormat() {

  }

}
