import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private http:HttpClient) { }
  

  ngOnInit(){
    // this.http.get('/api/courses').subscribe((data)=>{
    //   this.courses=data;
    // })
  } 

}
