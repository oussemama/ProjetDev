import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategorieModel } from 'src/app/model/categorie-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieserviceService } from './../../services/categorieservice.service';

@Component({
  selector: 'app-edit-categorie',
  templateUrl: './edit-categorie.component.html',
  styleUrls: ['./edit-categorie.component.css']
})
export class EditCategorieComponent implements OnInit {

  selectedCategorie: CategorieModel;
  editForm: FormGroup;
  isLoading = false;
  
  constructor(public modal: NgbActiveModal, private route: ActivatedRoute, private categorieservice: CategorieserviceService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.setForm()
  }

  onSubmit() {
    if (this.editForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.categorieservice.updateCategorie(this.editForm.value._id,this.editForm.value.code,
      this.editForm.value.designation); 
      this.isLoading = false;
      this.modal.close('Yes');

  }

  get editFormData() { return this.editForm.controls; }

  private setForm() {
    console.log(this.selectedCategorie);
    
    this.editForm = this.formBuilder.group({
      _id: [this.selectedCategorie._id],
      code: [this.selectedCategorie.code, Validators.required],
      designation: [this.selectedCategorie.designation, Validators.required]
    });
  }
}