import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
//import { TodolistComponent } from './components/todolist/todolist.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from 'selenium-webdriver/http';
import { Child1Component } from './components/child1/child1.component';
import { Common2Service } from './services/common2.service';
import { CommonService } from './services/common.service';
import  {RouterModule} from '@angular/router';//引用后再下面直接配置
import { HttpClientModule } from '@angular/common/http';//这是一个模块。
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { CommunityComponent } from './components/community/community.component';
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component';
import { TaskComponent } from './component/task/task.component';
import { SynchroComponent } from './component/synchro/synchro.component';
import { LessonComponent } from './component/lesson/lesson.component';
import { AndsayComponent } from './component/andsay/andsay.component';
import { NoticeComponent } from './component/notice/notice.component';
import { CommunitydetailComponent } from './components/communitydetail/communitydetail.component';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Child1Component,
    HeaderComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    CommunityComponent,
    TongbudetailComponent,
    TaskComponent,
    SynchroComponent,
    LessonComponent,
    AndsayComponent,
    NoticeComponent,
    CommunitydetailComponent,
    CoursedetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent,children:[//子路由，直接创建一个模块，再引入一个文件，就像JS一样，如何生成一个模块。
        //{}写的话就写这个，组件的
        //{ path: “路径”, component:“组件名”}
        {path:'task',component:TaskComponent,children:[
            {path:':taskId',component:TaskComponent}
          ]},
        {path:'andsay',component:AndsayComponent},
        {path:'lesson',component:LessonComponent},
        {path:'notice',component:NoticeComponent},
        {path:'synchro',component:SynchroComponent},
        {path:'',redirectTo:'home',pathMatch:'full'},//默认路由
      ]},
      

      {path:'tongbu',component:TongbuComponent},
      {path:'tongbu/:courseId',component:TongbudetailComponent},

      {path:'course',component:CourseComponent},
      {path:'course/:lessonsId',component:CoursedetailComponent},
      
      // {path:'course/:courseId',component:CourseComponent},写不写待定
      {path:'community',component:CommunityComponent},
      {path:'community/:communityId',component:CommunitydetailComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},//默认路由
      {path:'**',component:ChildComponent},//要写到最后一个，通配符路由，匹配的时候从上到下，都找不到的时候才会匹配这个。
    ]),
    HttpClientModule,
  ],
  providers: [
     CommonService,//名字 和类是同一个名字就写简单的方式。
    //{provide:Common2Service,useClass:Common2Service}//第二种写法
    //provide中写的相当于菜谱。菜有名字，后面是原料。
    //全局的作用范围，在所有的里面都可以用
    //由外面的提供器决定使用哪个服务
  ],//这里引入
  bootstrap: [AppComponent]
})
export class AppModule { }
