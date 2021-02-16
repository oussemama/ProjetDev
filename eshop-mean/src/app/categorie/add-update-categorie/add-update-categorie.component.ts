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

import { CategorieserviceService } from 'src/app/services/categorieservice.service'; 


@Component({
  selector: 'app-add-update-categorie',
  templateUrl: './add-update-categorie.component.html',
  styleUrls: ['./add-update-categorie.component.css']
})
export class AddUpdateCategorieComponent implements OnInit {

  code: string;
  designation: string;

 

  

  categorieForm: FormGroup;

  constructor(private http: HttpClient, private route: Router, private categorieservice: CategorieserviceService) { }

  ngOnInit() {
    
    this.categorieForm = new FormGroup({
      code:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.pattern(/^[0-9]\d*$/)]),
      designation:new FormControl('',[Validators.required,Validators.maxLength(30)])

      
      
    }

    )
  }

  ajoutCategorie() {
    let data = {
      code: this.code,
      designation: this.designation
    }

    // injection de Service
    this.categorieservice.createCategorie(data).subscribe(resultat => {
      console.log(resultat);

      Swal.fire(
        'Bravo!',
        'Categorie enregistré avec succès!',
        'success'
      );

      this.route.navigate(['/categorie/all']) //forward vers la page accueil
    })


  }
}