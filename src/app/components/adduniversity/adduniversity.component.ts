import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';

import {HttpClient} from "@angular/common/http"
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduniversity',
  templateUrl: './adduniversity.component.html',
  styleUrls: ['./adduniversity.component.css']
})
export class AdduniversityComponent implements OnInit {
  formationList:any[]=[]
  public universityForm:FormGroup
  
  
  constructor(fb:FormBuilder,private http:HttpClient,private router:Router) {
    let universityControls ={
      name:new FormControl("", [ Validators.required ]),
      description:new FormControl("", [ Validators.required ]),
      image:new FormControl("", [ Validators.required ]),
      url:new FormControl("", [ Validators.required ]),
      localisation:new FormControl("", [ Validators.required ]),
      prix:new FormControl("", [ Validators.required ])
      
    }
    this.universityForm=fb.group(universityControls)
   }

  ngOnInit(): void {
    
    
  }
 
  public addUniversity(): void {
    let data = this.universityForm.value;
    //let user = new User(undefined, undefined, data.email, data.password);
    //console.log(user)
    //console.log(data);
    
    this.http.post<any>("http://university2021.pythonanywhere.com/api/v2/university",data)
    .subscribe(
      result => {
        this.router.navigateByUrl('/university')
      },
      error => {
        console.log(error);
      }
    )
  }
  

  }


