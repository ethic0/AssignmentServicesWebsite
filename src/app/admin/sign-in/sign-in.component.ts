import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Auth } from 'src/app/_services/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm: any
  constructor(private fb: FormBuilder, private authService:Auth) {
    this.loginForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required]
    });
   }
  
  ngOnInit(): void {
  }

  login(): void{
    console.log(this.loginForm.value);
    let userData = this.loginForm.value;
    this.authService.SignIn(userData.email, userData.password)
  }
}
