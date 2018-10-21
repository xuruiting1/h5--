import { Component, OnInit } from '@angular/core';
import{ActivatedRoute}from '@angular/router';
import{Router} from "@angular/router"
import{HttpClient} from "@angular/common/http"
@Component({
  selector: 'app-synchro',
  templateUrl: './synchro.component.html',
  styleUrls: ['./synchro.component.css']
})
export class SynchroComponent implements OnInit {
  constructor(private router:ActivatedRoute,private route:Router,private http:HttpClient) { }
  courseId:number;
  courses;
  ngOnInit(){
    this.http.get('/api/courses').subscribe((data)=>{
      this.courses=data;
    })
  } 

}
