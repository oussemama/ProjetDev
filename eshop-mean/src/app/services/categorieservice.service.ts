import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CategorieModel } from 'src/app/model/categorie-model';
import { BehaviorSubject, Observable,throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from "rxjs/operators";
import { Subject } from "rxjs";
@Injectable({
  providedIn: 'root'
})

export class CategorieserviceService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };
  url ="http://localhost:3000/categorie/";
 httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
 private categories: CategorieModel[] = [];


  constructor(private httpClient: HttpClient) {

  }

  createCategorie (data){
    return this.httpClient.post(this.url, data);

  }
    getAllCategorie(){
      return this.httpClient.get(this.url);
    }

    getCategorieById(id: string): Observable<CategorieModel> {
      let API_URL = `${this.url}//${id}`;
      return this.httpClient.get(API_URL, { headers: this.httpHeaders })
        .pipe(map((res: any) => {
            return res || {}
          }),
          
        )
    }

    deleteCategorie (id){
      return this.httpClient.get(this.url+id);
    }
    updateCategorie(_id: string, code: string, designation) {
      const categorie: CategorieModel = {_id: _id, code: code, designation: designation };
      this.httpClient
        .put("http://localhost:3000/UpdateCategorie/" + _id, categorie)
        .subscribe(response => console.log(response));
    }
  
    
}
