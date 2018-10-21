import { Component, OnInit } from '@angular/core';
import{ActivatedRoute}from '@angular/router';
import{Router} from "@angular/router"
import{HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-tongbu',
  templateUrl: './tongbu.component.html',
  styleUrls: ['./tongbu.component.css']
})
// export class Course{
//   constructor(
//       public id:number,
//       public courseName:string,
//       public images:string,
//       public task:number,
//       public person:number
//       ){}
// }
export class TongbuComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router,private http:HttpClient) { }
  courseId:number;
  courses;
  ngOnInit(){
    this.http.get('/api/courses').subscribe((data)=>{
      this.courses=data;
    })
  } 
}
  
  

  // go(){
  //   // this.route.navigate(['/community']);
  //   this.route.navigate(['/tongbu',600],{queryParams:{id:1000}});
  // }


   //this.courseId=this.router.snapshot.params['courseId'];//这是在那个参数中定义的那个词。
    //只会创建一次，不会再改变。
    // this.router.params.subscribe((params)=>{
    //   this.courseId=params['courseId'];
    // });//订阅的一个方法,能够实时变化，响应式编程，js的
    //两个按钮同时一个组件，上面那种不会重新创建一个，但是这种情况会给他重新赋值
    //Observal后面更跟的都是   subscribe，可观察者



