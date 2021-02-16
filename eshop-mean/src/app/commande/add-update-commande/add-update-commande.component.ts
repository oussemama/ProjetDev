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

import { CommandeserviceService } from 'src/app/services/commandeservice.component'; 


@Component({
  selector: 'app-add-update-commande',
  templateUrl: './add-update-commande.component.html',
  styleUrls: ['./add-update-commande.component.css'],
  providers: [CommandeserviceService]

})
export class AddUpdateCommandeComponent implements OnInit {

  date_c: Date;
  date_l: Date;
  beneficaire: any;
  produit_comm: any;
  quant:string;
  listProduit: any = [];
  listBeneficaire: any = [];
 

  

  CommandeForm: FormGroup;

  constructor(private http: HttpClient, private route: Router, private commandeservice: CommandeserviceService) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/user").subscribe(res=>{this.listBeneficaire = res})
    this.http.get("http://localhost:3000/produit").subscribe(res=>{this.listProduit = res})
    this.CommandeForm = new FormGroup({
      date_c:new FormControl('',[Validators.required]),
      date_l:new FormControl('',[Validators.required]),
      quant:new FormControl('',[Validators.required])
    }

    )
  }

  ajoutCommande() {
    let data = {
      beneficaire: this.beneficaire,
      date_c: this.date_c,
      date_l: this.date_l,
      produit_comm:this.produit_comm,
      quant:this.quant
    }

    // injection de Service
    this.commandeservice.createCommande(data).subscribe(resultat => {
      console.log(resultat);

      Swal.fire(
        'Bravo!',
        'Commande enregistré avec succès!',
        'success'
      );

      this.route.navigate(['/commande/all']) //forward vers la page accueil
    })


  }
}