import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiDomainInterceptor } from './providers/api-domain-interceptor';
import { PetsComponent } from './pages/pets/pets.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingInterceptor } from '../app/providers/loading-interceptor';
import { MenuComponent } from './components/menu/menu.component'
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwnersComponent } from './pages/owners/owners.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { PetsDetailsComponent } from './pages/pets-details/pets-details.component';
import { ClickOutsideDirective } from '../app/directives/click.outside.directive';
import { RouterModule } from '@angular/router';
import { OwnersDetailsComponent } from './pages/owners-details/owners-details.component';
import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from './components/table/table.component';
import { ActionMenuComponent } from './components/action-menu/action-menu.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PetsComponent,
    LoadingComponent,
    MenuComponent,
    OwnersComponent,
    DialogComponent,
    PetsDetailsComponent,
    ClickOutsideDirective,
    OwnersDetailsComponent,
    TableComponent,
    ActionMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [
    { provide: "API_DOMAIN", useValue: environment.apiEndpointPath },
    { provide: HTTP_INTERCEPTORS, useClass: ApiDomainInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  entryComponents: [
    DialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
