import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { ActivatedRoute } from '@angular/router';
import { Form, FormBuilder, FormControl, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateuniversity',
  templateUrl: './updateuniversity.component.html',
  styleUrls: ['./updateuniversity.component.css']
})
export class UpdateuniversityComponent implements OnInit {

  public universityForm:FormGroup

  id:any
  data:any
  constructor(private route:ActivatedRoute,fb:FormBuilder,private http:HttpClient,private router:Router) { 
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
    this.id=this.route.snapshot.params['id'];
    this.http.get<any>("http://university2021.pythonanywhere.com/api/v2/university/detail/"+this.id).subscribe(
      data=>{
        this.data=data;
       
      }
    )

  }

  public UpdateUniversity(): void {
    let data = this.universityForm.value;
    //let user = new User(undefined, undefined, data.email, data.password);
    //console.log(user)
    //console.log(data);
    
    this.http.put<any>("http://university2021.pythonanywhere.com/api/v2/university/update/"+this.id,data)
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
