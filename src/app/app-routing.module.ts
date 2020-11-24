import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PetsComponent } from './pages/pets/pets.component';
import { LoginComponent } from './pages/login/login.component';
import { OwnersComponent } from './pages/owners/owners.component';
import { PetsDetailsComponent } from './pages/pets-details/pets-details.component';
import { OwnersDetailsComponent } from './pages/owners-details/owners-details.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'pets',
    component: PetsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'donos',
    component: OwnersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "detalhes/pets/:id",
    component: PetsDetailsComponent,
    outlet: "modal",
  },
  {
    path: "detalhes/donos/:id",
    component: OwnersDetailsComponent,
    outlet: "modal",
  }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
