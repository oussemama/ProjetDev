import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CommandeModel } from 'src/app/model/Commande-model';
import { BehaviorSubject, Observable,throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from "rxjs/operators";
import { Subject } from "rxjs";
@Injectable({
  providedIn: 'root'
})

export class CommandeserviceService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };
  url ="http://localhost:3000/commande/";
 httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
 private Commandes: CommandeModel[] = [];


  constructor(private httpClient: HttpClient) {

  }

  createCommande (data){
    return this.httpClient.post(this.url, data);

  }
    getAllCommande(){
      return this.httpClient.get(this.url);
    }

    getCommandeById(id: string): Observable<CommandeModel> {
      let API_URL = `${this.url}//${id}`;
      return this.httpClient.get(API_URL, { headers: this.httpHeaders })
        .pipe(map((res: any) => {
            return res || {}
          }),
          
        )
    }

    deleteCommande(id){
      return this.httpClient.get(this.url+id);
    }
    updateCommande(_id: string,beneficaire: String, date_c: Date, date_l: Date, produit_comm:String, quant:string) {
      const commande: CommandeModel = {_id: _id, beneficaire: beneficaire ,date_c: date_c, date_l: date_l,produit_comm:produit_comm,quant:quant};
      this.httpClient
        .put("http://localhost:3000/UpdateCommande/" + _id, commande)
        .subscribe(response => console.log(response));
    }
  
    
}
