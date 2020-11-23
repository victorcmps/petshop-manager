import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PetsComponent } from './pages/pets/pets.component';
import { LoginComponent } from './pages/login/login.component';
import { OwnersComponent } from './pages/owners/owners.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    children: [
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
        path: '',
        redirectTo: 'pets',
        pathMatch: 'full'
      }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
