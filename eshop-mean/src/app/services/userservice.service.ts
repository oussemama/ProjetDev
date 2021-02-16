import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserModel } from 'src/app/model/user-model';
import { BehaviorSubject, Observable,throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from "rxjs/operators";
import { Subject } from "rxjs";
@Injectable({
  providedIn: 'root'
})

export class UserserviceService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };
  url ="http://localhost:3000/user/";
 httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
 private users: UserModel[] = [];


  constructor(private httpClient: HttpClient) {

  }

  createUser (data){
    return this.httpClient.post(this.url, data);

  }
    getAllUser(){
      return this.httpClient.get(this.url);
    }

    getUserById(id: string): Observable<UserModel> {
      let API_URL = `${this.url}//${id}`;
      return this.httpClient.get(API_URL, { headers: this.httpHeaders })
        .pipe(map((res: any) => {
            return res || {}
          }),
          
        )
    }

    deleteUser (id){
      return this.httpClient.get(this.url+id);
    }
    updateUser(_id: string, nom: string, prenom: string, mail: string, cin: string) {
      const user: UserModel = {_id: _id, nom: nom, prenom: prenom, mail: mail,cin: cin  };
      this.httpClient
        .put("http://localhost:3000/UpdateUser/" + _id, user)
        .subscribe(response => console.log(response));
    }
  
    
}
