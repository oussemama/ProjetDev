import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import swal from 'sweetalert2';
import { CommandeModel} from 'src/app/model/Commande-model';
import { EditCommandeComponent } from 'src/app/commande/edit-commande/edit-commande.component';
@Component({
  selector: 'app-show-all-commande',
  templateUrl: './show-all-commande.component.html',
  styleUrls: ['./show-all-commande.component.css']
})
export class ShowAllCommandeComponent implements OnInit {

  listCommandes: any = [];
  constructor(private http: HttpClient, private route: Router,private modalService: NgbModal) { }

  ngOnInit() {

    this.http.get("http://localhost:3000/commande").subscribe(result => { this.listCommandes = result })

  }

  getDetailCommande(commande) {
    let id = commande._id;
    this.route.navigate(['commande', id]);
  }
  editItem(commandeModel: CommandeModel) {

    const ref = this.modalService.open(EditCommandeComponent, { centered: true,size: 'lg', backdrop: 'static'  });
    ref.componentInstance.selectedCommande = commandeModel;

    ref.result.then((yes) => {
      console.log("Yes Click");

      this.http.get("http://localhost:3000/commande").subscribe(result=>{this.listCommandes=result});
    },
      (cancel) => {
        console.log("Cancel Click");

      })
  }
  deleteCommande(commande) {
    let id = commande._id;

    swal.fire({
      title: 'Etes vous sûres de vouloir supprimer cette commande ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Oui`,
      denyButtonText: `Non`,
    })
    .then(
      (result) => {
      if (result.isConfirmed) {

        this.http.delete("http://localhost:3000/commande/"+id).subscribe(result=>{
          console.log(result); 
          this.http.get("http://localhost:3000/commande").subscribe(result=>{this.listCommandes=result});
       
        });

        swal.fire('Supprimé!', '', 'success')

      } else if (result.isDenied) {
        swal.fire('Produit non supprimé', '', 'info')
      }
    })

  }

}




