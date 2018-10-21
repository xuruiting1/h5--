import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
//这是一个类

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }//http这个是自己起的名字，依赖注入 的方式。
  course;
  headers=new HttpHeaders({})//需要设置请求头
  ngOnInit() {
    // this.timer=setInterval(function(){
    //   console.log(11);
    // },1000);
    // this.http.get('/api/courses/1').subscribe((data)=>{
    //   console.log(data);//要订阅她,后台返回来的的课程的信息，get返回来的是衣蛾可观察的对象，我们后面就要订阅观察这个对象。
    // })
    this.http.post('/api',{name:"xuruiting",pwd:123445},{headers:this.headers}).subscribe((data)=>{
      console.log(data);//要订阅她,后台返回来的的课程的信息，get返回来的是衣蛾可观察的对象，我们后面就要订阅观察这个对象。
      
    })
    //订阅这个对象
    //get拿到
    //post提交过去的,注册的信息啥的要保密，参数一定要写，不然报错。
  }
  ngOnDestory(){
    //当组件销毁的时候调用一次,声明周期最后的它的一个用处。
    // clearInterval(this.timer);
  }

}
//服务端和客户端，服务器
//客户端请求那个接口，访问服务器的那个接口。本地打开这个服务。
//ng serve --open --proxy-config proxy.conf.json
//npm run start