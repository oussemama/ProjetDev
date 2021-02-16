import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
 } from '@angular/forms';
 
 import Swal from 'sweetalert2'

import { UserserviceService } from './../../services/userservice.service'; 


@Component({
  selector: 'app-add-update-user',
  templateUrl: './add-update-user.component.html',
  styleUrls: ['./add-update-user.component.css'],
  providers: [UserserviceService]

})
export class AddUpdateUserComponent implements OnInit {

  nomU: string;
  prenomU: string;
  mailU: string;
  cinU: string;
 

  

  userForm: FormGroup;

  constructor(private http: HttpClient, private route: Router, private userservice: UserserviceService) { }

  ngOnInit() {
    
    this.userForm = new FormGroup({
      codeU:new FormControl('',[Validators.required,Validators.maxLength(10)]),
      nomU:new FormControl('',[Validators.required,Validators.maxLength(30)]),
      prenomU:new FormControl('',[Validators.required,Validators.maxLength(30)]),
  
      cinU:new FormControl('',[Validators.required,Validators.minLength(8),
        Validators.maxLength(8),Validators.pattern(/^[0-9]\d*$/)]),
      mailU:new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))
      
    }

    )
  }

  ajoutUser() {
    let data = {
      nom: this.nomU,
      prenom: this.prenomU,
      mail: this.mailU,
      cin:this.cinU 
    }

    // injection de Service
    this.userservice.createUser(data).subscribe(resultat => {
      console.log(resultat);

      Swal.fire(
        'Bravo!',
        'Client enregistré avec succès!',
        'success'
      );

      this.route.navigate(['/user/all']) //forward vers la page accueil
    })


  }
}