import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Router } from '@angular/router';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {
  universityList:any[] =[]
  formationList:any[]=[]
 

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://university2021.pythonanywhere.com/api/v2/university/all').subscribe(
      result=>{
        this.universityList=result

      },
      error=>{
        console.log(error)
      }
    )
  }
  deleteUniversity(university:any){
    let indice =this.universityList.indexOf(university)
    this.universityList.splice(indice,1)

    this.http.delete<any>("http://university2021.pythonanywhere.com/api/v2/university/delete/"+university.id).subscribe(
      result =>{
        console.log(result)
      },
      error =>{
        console.log(error);
      }
    )
  }
  

 

}
