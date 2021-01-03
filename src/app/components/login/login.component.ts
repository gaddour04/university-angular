import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import {HttpClient} from "@angular/common/http"
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup

  constructor(fb: FormBuilder,private http:HttpClient,private router:Router) {
    let loginControls = {
      email: new FormControl(),
      password: new FormControl()
    }
    this.loginForm = fb.group(loginControls)
  }

  ngOnInit(): void {
    let token =localStorage.getItem("mytoken")
    if (token) //(token !=null)
     {
      this.router.navigateByUrl("/dashboard")
    }
  }
  public loginUser(): void {
    //console.log(this.loginForm.value);

    let data = this.loginForm.value;
    //let user = new User(undefined, undefined, data.email, data.password);
    //console.log(user)
    this.http.post<any>("https://itbs-backend.herokuapp.com/user/login",data)
    .subscribe(
      result => {
        let token=result.token
        localStorage.setItem("mytoken",token)
        this.router.navigateByUrl('/dashboard')
      },
      error => {
        console.log("Error Register");
      }
    )
  }

}
