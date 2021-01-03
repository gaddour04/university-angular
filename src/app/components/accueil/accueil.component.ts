import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  universityList:any[] =[]

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("http://university2021.pythonanywhere.com/api/v2/university/all").subscribe(
      result=>{
        this.universityList=result
      },
      error=>{
        console.log(error)
      }
    )
  }

}
