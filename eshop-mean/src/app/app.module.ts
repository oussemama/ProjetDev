import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserModel } from './model/user-model';
import {
  FormsModule,
  ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ContainerComponent } from './home/container/container.component';
import { ProduitComponent } from './produit/produit.component';
import { AddUpdateProduitComponent } from './produit/add-update-produit/add-update-produit.component';
import { ShowAllProduitsComponent } from './produit/show-all-produits/show-all-produits.component';
import { UserComponent } from './user/user.component';
//import { AddUpdateUserComponent } from './user/add-update-user/add-update-user.component';
import { NotfoundComponent } from './home/notfound/notfound.component';
import { EditProduitComponent } from 'src/app/produit/edit-produit/edit-produit.component';
import { ShowAllUsersComponent } from './user/show-all-users/show-all-users.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { AddUpdateUserComponent } from './user/add-update-user/add-update-user.component';
import { CommandeComponent } from './commande/commande.component';
import { AddUpdateCommandeComponent } from './commande/add-update-commande/add-update-commande.component';
import { EditCommandeComponent } from './commande/edit-commande/edit-commande.component';
import { ShowAllCommandeComponent } from './commande/show-all-commande/show-all-commande.component';
import { CategorieComponent } from './categorie/categorie.component';
import { AddUpdateCategorieComponent } from './categorie/add-update-categorie/add-update-categorie.component';
import { EditCategorieComponent } from './categorie/edit-categorie/edit-categorie.component';
import { ShowAllCategorieComponent } from './categorie/show-all-categorie/show-all-categorie.component';
//import { CommandeserviceService } from './services/commandeservice.component';




const appRoutes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'produit/new', component: AddUpdateProduitComponent },
  { path: 'produit/all', component: ShowAllProduitsComponent },
 { path: 'user/new', component: AddUpdateUserComponent },
  //{ //path: '/edit/:postId', component: EditUserComponent },
  { path: 'user/all', component: ShowAllUsersComponent },
  { path: 'commande/all', component: ShowAllCommandeComponent },
  { path: 'commande/new', component: AddUpdateCommandeComponent },
  //{ path: 'produit/edit/:id', component: AddUpdateProduitComponent},
  { path: 'categorie/all', component: ShowAllCategorieComponent },
  { path: 'categorie/new', component: AddUpdateCategorieComponent },
  
  { path: '**', component: NotfoundComponent }

  ];
  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContainerComponent,
    ProduitComponent,
    AddUpdateProduitComponent,
    ShowAllProduitsComponent,
    UserComponent,
    AddUpdateUserComponent,
   ShowAllUsersComponent,
    NotfoundComponent,
    EditProduitComponent,
    AddUpdateUserComponent,
    EditUserComponent,
    CommandeComponent,
    AddUpdateCommandeComponent,
    EditCommandeComponent,
    ShowAllCommandeComponent,
    CategorieComponent,
    AddUpdateCategorieComponent,
    EditCategorieComponent,
    ShowAllCategorieComponent,
    //CommandeserviceService,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    
    NgbModule 
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }