import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class SolutionsService {

  private url: string = "http://localhost:9003/solutions";

  constructor(private http: Http) { }

  getSolutions(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getSolution(id){
    return this.http.get("http://localhost:9003/solution/"+id)
      .map(res => res.json());
  }
  
  addSolution(solution){
 // console.log('addd solution')
 // console.log(solution)
    return this.http.get("http://localhost:9003/solutionnew/"+solution.genericName+"/"+solution.container+"/"+solution.concentration+"/"+solution.unities+"/"+solution.volume)
      .map(res => res.json());
  }

  updateSolution(solution){
  //console.log('update solution')
  //console.log(solution)

    return this.http.put("http://localhost:9003/updatesolution/"+solution.solutionId+"/"+solution.genericName+"/"+solution.container+"/"+solution.concentration+"/"+solution.unities+"/"+solution.volume, JSON.stringify(solution))
      .map(res => res.json());
  }

  deleteSolution(id){
    return this.http.delete("http://localhost:9003/deletesolution/"+id)
      .map(res => res.json());
  }

}
