import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import swal from 'sweetalert2';
import { UserModel } from 'src/app/model/user-model';
import { EditUserComponent } from 'src/app/user/edit-user/edit-user.component';
@Component({
  selector: 'app-show-all-users',
  templateUrl: './show-all-users.component.html',
  styleUrls: ['./show-all-users.component.css']
})
export class ShowAllUsersComponent implements OnInit {

  listUsers: any = [];
  constructor(private http: HttpClient, private route: Router,private modalService: NgbModal) { }

  ngOnInit() {

    this.http.get("http://localhost:3000/user").subscribe(result => { this.listUsers = result })

  }

  getDetailUser(user) {
    let id = user._id;
    this.route.navigate(['user', id]);
  }
  editItem(userModel: UserModel) {

    const ref = this.modalService.open(EditUserComponent, { centered: true,size: 'lg', backdrop: 'static'  });
    ref.componentInstance.selectedUser = userModel;

    ref.result.then((yes) => {
      console.log("Yes Click");

      this.http.get("http://localhost:3000/user").subscribe(result=>{this.listUsers=result});
    },
      (cancel) => {
        console.log("Cancel Click");

      })
  }
  deleteUser(user) {
    let id = user._id;

    swal.fire({
      title: 'Etes vous sûres de vouloir supprimer ' +user.nom+' ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Oui`,
      denyButtonText: `Non`,
    })
    .then(
      (result) => {
      if (result.isConfirmed) {

        this.http.delete("http://localhost:3000/user/"+id).subscribe(result=>{
          console.log(result); 
          this.http.get("http://localhost:3000/user").subscribe(result=>{this.listUsers=result});
       
        });

        swal.fire('Supprimé!', '', 'success')

      } else if (result.isDenied) {
        swal.fire('Produit non supprimé', '', 'info')
      }
    })

  }

}
