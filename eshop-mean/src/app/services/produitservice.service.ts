import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ProduitModel } from 'src/app/model/Produit-model';
import { BehaviorSubject, Observable,throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from "rxjs/operators";
import { Subject } from "rxjs";
@Injectable({
  providedIn: 'root'
})

export class ProduitserviceService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };
  url ="http://localhost:3000/produit/";
 httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
 private Produits: ProduitModel[] = [];


  constructor(private httpClient: HttpClient) {

  }

  createProduit (data){
    return this.httpClient.post(this.url, data);

  }
    getAllProduit(){
      return this.httpClient.get(this.url);
    }

    getProduitById(id: string): Observable<ProduitModel> {
      let API_URL = `${this.url}//${id}`;
      return this.httpClient.get(API_URL, { headers: this.httpHeaders })
        .pipe(map((res: any) => {
            return res || {}
          }),
          
        )
    }

    deleteProduit (id){
      return this.httpClient.get(this.url+id);
    }
    updateProduit(_id: string, code: string, libelle: string, prix: string, categories: string) {
      const produit: ProduitModel = {_id: _id, code: code, libelle: libelle, prix: prix,categories: categories  };
      this.httpClient
        .put("http://localhost:3000/UpdateProduit/" + _id, produit)
        .subscribe(response => console.log(response));
    }
  
    
}
