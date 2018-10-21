import { Component, OnInit } from '@angular/core';
import{HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  constructor(private http:HttpClient) { }
  lessonId:number;
  lessons;
  ngOnInit(){
    this.http.get('/api/lessons').subscribe((data)=>{
      this.lessons=data;
    })
  }

}
