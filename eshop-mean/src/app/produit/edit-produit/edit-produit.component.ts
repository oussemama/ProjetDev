import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProduitModel } from 'src/app/model/Produit-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitserviceService } from './../../services/produitservice.service';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {

  selectedProduit: ProduitModel;
  editForm: FormGroup;
  isLoading = false;
  private ProduitId: string;
  constructor(public modal: NgbActiveModal, private route: ActivatedRoute, private produitervice: ProduitserviceService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.setForm()
  }

  onSubmit() {
    if (this.editForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.produitervice.updateProduit(this.editForm.value._id,this.editForm.value.code,
      this.editForm.value.libelle,this.editForm.value.prix,this.editForm.value.categorie); 
      this.isLoading = false;
      this.modal.close('Yes');

  }

  get editFormData() { return this.editForm.controls; }

  private setForm() {
    console.log(this.selectedProduit);
    
    this.editForm = this.formBuilder.group({
      _id: [this.selectedProduit._id],
      code: [this.selectedProduit.code, Validators.required],
      libelle: [this.selectedProduit.libelle, Validators.required],
      prix: [this.selectedProduit.prix, Validators.required]
    });
  }
}