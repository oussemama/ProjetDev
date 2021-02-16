import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import swal from 'sweetalert2';
import { ProduitModel } from 'src/app/model/Produit-model';
import { EditProduitComponent } from '../edit-produit/edit-produit.component';
@Component({
  selector: 'app-show-all-produits',
  templateUrl: './show-all-produits.component.html',
  styleUrls: ['./show-all-produits.component.css']
})
export class ShowAllProduitsComponent implements OnInit {

  listProduits: any = [];
  constructor(private http: HttpClient, private route: Router,private modalService: NgbModal) { }

  ngOnInit() {

    this.http.get("http://localhost:3000/produit").subscribe(result => { this.listProduits = result })

  }

  getDetailProduit(produit) {
    let id = produit._id;
    this.route.navigate(['produit', id]);
  }
  editItem(produitModel: ProduitModel) {
    // this.router.navigateByUrl(`EditUser/${userModel.id}`);

    const ref = this.modalService.open(EditProduitComponent, { centered: true });
    ref.componentInstance.selectedProduit = produitModel;

    ref.result.then((yes) => {
      console.log("Yes Click");

      this.http.get("http://localhost:3000/produit").subscribe(result=>{this.listProduits=result});
    },
      (cancel) => {
        console.log("Cancel Click");

      })
  }
  deleteProduit(produit) {
    let id = produit._id;

    swal.fire({
      title: 'Etes vous sûres de vouloir supprimer ' +produit.libelle+' ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Oui`,
      denyButtonText: `Non`,
    })
    .then(
      (result) => {
      if (result.isConfirmed) {

        this.http.delete("http://localhost:3000/produit/"+id).subscribe(result=>{
          console.log(result); 
          this.http.get("http://localhost:3000/produit").subscribe(result=>{this.listProduits=result});
       
        });

        swal.fire('Supprimé!', '', 'success')

      } else if (result.isDenied) {
        swal.fire('Produit non supprimé', '', 'info')
      }
    })

  }

}
