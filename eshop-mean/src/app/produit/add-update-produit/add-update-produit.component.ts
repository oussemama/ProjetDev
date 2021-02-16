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

import { ProduitserviceService } from './../../services/produitservice.service'; //Chemin par rapport a la classe AddUpdateProduitComponent


@Component({
  selector: 'app-add-update-produit',
  templateUrl: './add-update-produit.component.html',
  styleUrls: ['./add-update-produit.component.css'],
  providers: [ProduitserviceService]

})
export class AddUpdateProduitComponent implements OnInit {

  codeP: string;
  libelleP: string;
  prixP: number;

  categoryP: any;
 

  listCategorie: any = [];

  produitForm: FormGroup;

  constructor(private http: HttpClient, private route: Router, private produitservice: ProduitserviceService) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/categorie").subscribe(res=>{this.listCategorie = res})
    this.produitForm = new FormGroup({
      codeP:new FormControl('',[Validators.required,Validators.maxLength(3)]),
      libelleP:new FormControl('',[Validators.required,Validators.maxLength(30)]),
      prixP:new FormControl('',[Validators.required])
      
    }

    )
  }


  ajoutProduit() {
    let data = {
      code: this.codeP,
      libelle: this.libelleP,
      prix: this.prixP,
      categories: this.categoryP
    }

    // injection de Service
    this.produitservice.createProduit(data).subscribe(resultat => {
      console.log(resultat);

      Swal.fire(
        'Bravo!',
        'Produit enregistré avec succès!',
        'success'
      );

      this.route.navigate(['/produit/all']) //forward vers la page accueil
    })


  }
}