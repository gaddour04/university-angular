import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailuniversity',
  templateUrl: './detailuniversity.component.html',
  styleUrls: ['./detailuniversity.component.css']
})
export class DetailuniversityComponent implements OnInit {
  id:any
  data:any
  constructor(private route:ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.http.get<any>("http://university2021.pythonanywhere.com/api/v2/university/detail/"+this.id).subscribe(
      data=>{
        this.data=data;
      }
    )

  }

}
