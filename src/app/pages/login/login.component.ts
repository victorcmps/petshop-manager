import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { OwnersService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;

  constructor(fb: FormBuilder, private auth: AuthService, private owner: OwnersService, private router: Router) {
    this.loginForm = fb.group({
      email: ['', Validators.required],
      senha: ['']
    });
  }

  ngOnInit() {
  }

  login() {
    this.owner.getAllOwners().subscribe(owners => {
      const user = this.auth.login(owners, this.loginForm.get('email').value);
      user ? this.router.navigate(['pets']) : this.errorMessage = '*Usuário ou senha incorreta';
    })
  }

}
