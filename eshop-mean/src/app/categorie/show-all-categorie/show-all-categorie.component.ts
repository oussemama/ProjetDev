import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import swal from 'sweetalert2';
import { CategorieModel} from 'src/app/model/categorie-model';
import { EditCategorieComponent } from 'src/app/categorie/edit-categorie/edit-categorie.component';
@Component({
  selector: 'app-show-all-categorie',
  templateUrl: './show-all-categorie.component.html',
  styleUrls: ['./show-all-categorie.component.css']
})
export class ShowAllCategorieComponent implements OnInit {

  listCategories: any = [];
  constructor(private http: HttpClient, private route: Router,private modalService: NgbModal) { }

  ngOnInit() {

    this.http.get("http://localhost:3000/categorie").subscribe(result => { this.listCategories = result })

  }

  getDetailCategorie(categorie) {
    let id = categorie._id;
    this.route.navigate(['categorie', id]);
  }
  editItem(categorieModel: CategorieModel) {

    const ref = this.modalService.open(EditCategorieComponent, { centered: true,size: 'lg', backdrop: 'static'  });
    ref.componentInstance.selectedCategorie = categorieModel;

    ref.result.then((yes) => {
      console.log("Yes Click");

      this.http.get("http://localhost:3000/categorie").subscribe(result=>{this.listCategories=result});
    },
      (cancel) => {
        console.log("Cancel Click");

      })
  }
  deleteCategorie(categorie) {
    let id = categorie._id;

    swal.fire({
      title: 'Etes vous sûres de vouloir supprimer cette categorie ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Oui`,
      denyButtonText: `Non`,
    })
    .then(
      (result) => {
      if (result.isConfirmed) {

        this.http.delete("http://localhost:3000/categorie/"+id).subscribe(result=>{
          console.log(result); 
          this.http.get("http://localhost:3000/categorie").subscribe(result=>{this.listCategories=result});
       
        });

        swal.fire('Supprimé!', '', 'success')

      } else if (result.isDenied) {
        swal.fire('Produit non supprimé', '', 'info')
      }
    })

  }

}




