import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserModel } from 'src/app/model/user-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from './../../services/userservice.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  selectedUser: UserModel;
  editForm: FormGroup;
  isLoading = false;
  private ProduitId: string;
  constructor(public modal: NgbActiveModal, private route: ActivatedRoute, private userservice: UserserviceService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.setForm()
  }

  onSubmit() {
    if (this.editForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.userservice.updateUser(this.editForm.value._id,this.editForm.value.nom,
      this.editForm.value.prenom,this.editForm.value.mail,this.editForm.value.cin); 
      this.isLoading = false;
      this.modal.close('Yes');

  }

  get editFormData() { return this.editForm.controls; }

  private setForm() {
    console.log(this.selectedUser);
    
    this.editForm = this.formBuilder.group({
      _id: [this.selectedUser._id],
      nom: [this.selectedUser.nom, Validators.required],
      prenom: [this.selectedUser.prenom, Validators.required],
      mail: [this.selectedUser.mail, Validators.required],
      cin: [this.selectedUser.cin, Validators.required]
    });
  }
}