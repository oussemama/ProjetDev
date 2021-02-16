import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommandeModel } from 'src/app/model/Commande-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeserviceService } from './../../services/commandeservice.component';

@Component({
  selector: 'app-edit-commande',
  templateUrl: './edit-commande.component.html',
  styleUrls: ['./edit-commande.component.css']
})
export class EditCommandeComponent  implements OnInit {
  listProduit: any = [];
  listBeneficaire: any = [];
  selectedCommande: CommandeModel;
  editForm: FormGroup;
  isLoading = false;
  
  constructor(public modal: NgbActiveModal, private route: ActivatedRoute, private commandeservice: CommandeserviceService, private formBuilder: FormBuilder, private router: Router,private http: HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/user").subscribe(res=>{this.listBeneficaire = res})
    this.http.get("http://localhost:3000/produit").subscribe(res=>{this.listProduit = res})
    this.setForm()
  }

  onSubmit() {
    if (this.editForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.commandeservice.updateCommande(this.editForm.value._id,this.editForm.value.beneficaire,this.editForm.value.date_c,
      this.editForm.value.date_l, this.editForm.value.produit_comm,this.editForm.value.quant); 
      this.isLoading = false;
      this.modal.close('Yes');

  }

  get editFormData() { return this.editForm.controls; }

  private setForm() {
    console.log(this.selectedCommande);
    
    this.editForm = this.formBuilder.group({
      _id: [this.selectedCommande._id],
      date_c: [this.selectedCommande.date_c, Validators.required],
      date_l: [this.selectedCommande.date_l, Validators.required],
      quant: [this.selectedCommande.quant, Validators.required]
    });
  }
}