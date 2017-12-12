import { Component, OnInit } from '@angular/core';
import {PreparationService} from "./shared/preparation.service";
import {Preparation} from "./shared/preparation";
@Component({
  selector: 'app-preparations',
  templateUrl: './preparations.component.html',
  styleUrls: ['./preparations.component.scss']
})
export class PreparationsComponent implements OnInit {
  public preparations: Preparation[] = [];
  public medicines: Preparation[] = [];
  constructor(private preparationService: PreparationService) { }

  ngOnInit() {
      this.preparationService.getTodaysPreparations()
      .subscribe(data => this.preparations = data);
  }

}
