import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"
import {HttpClient} from "@angular/common/http"
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup
  public loginForm: FormGroup

  constructor(fb: FormBuilder,private http:HttpClient,private router:Router) {
    let registerControls = {
      firstname: new FormControl("", [
        Validators.required
      ]),
      lastname: new FormControl("", [
        Validators.required
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8)
      ]),
      password2: new FormControl("", [
        Validators.required
      ])
    }

    let loginControls = {
      pseudo: new FormControl(),
      password: new FormControl(),
    }

    this.registerForm = fb.group(registerControls);

    this.loginForm = fb.group(loginControls);
  }

  ngOnInit(): void {
    let token =localStorage.getItem("mytoken")
    if (token) //(token !=null)
     {
      this.router.navigateByUrl("/dashboard")
    }
  }

  public registerUser(): void {
    //console.log(this.registerForm.value);
    let data=this.registerForm.value;
    //let user=new User(data.firstname,data.lastname,data.email,data.password);
    this.http.post<any>("https://itbs-backend.herokuapp.com/user/register",data)
    .subscribe(
      result => {
        this.router.navigateByUrl('/login')
      },
      error => {
        console.log("Error Register");
      }
    )
    //console.log(user);
  }

}
