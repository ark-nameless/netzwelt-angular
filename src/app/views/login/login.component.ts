import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginInfo = {
    'username': '',
    'password': '',
  };

  formGroup: FormGroup = new FormGroup({
    username: new FormControl<string | null>(''),
    password: new FormControl<string | null>('')
  });

  error = '';

  constructor(
    private router: Router,
    private accountService: AccountsService,
  ) {}
  
  onSubmit() {
    this.loginInfo.username = this.formGroup.controls['username'].value;
    this.loginInfo.password = this.formGroup.controls['password'].value;

    this.accountService.login(this.loginInfo.username || '', this.loginInfo.password || '').subscribe(
      data => {
        localStorage.setItem('user', data);
       localStorage.setItem('name', data.displayName);
       localStorage.setItem('roles', data.roles);
       localStorage.setItem('username', data.username);
       this.router.navigate(['/'])
      },
      err => {
        this.error = err.error.message;
      }
    )
  }
}
