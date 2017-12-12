import { Component, OnInit } from '@angular/core';
import {SolutionsService} from "./shared/solutions.service";
import {Solution} from "./shared/solution";

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {

  public solutions: Solution[] = [];

  constructor(private solutionsService: SolutionsService) { }

  ngOnInit() {
    this.solutionsService.getSolutions()
      .subscribe(data => this.solutions = data);
  }

  deleteSolution(solution){
    if (confirm("Are you sure you want to delete " + solution.solutionName + "?")) {
      var index = this.solutions.indexOf(solution);
      this.solutions.splice(index, 1);

      this.solutionsService.deleteSolution(solution.solutionId)
        .subscribe(null,
          err => {
            alert("Could not delete solution.");
            // Revert the view back to its original state
            this.solutions.splice(index, 0, solution);
          });
    }
  }
}
