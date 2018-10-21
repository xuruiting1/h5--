import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private share:ShareService) { }
  message:string;
  arr;
  ngOnInit() {
    this.arr=this.share.data;//进行初始化，赋值
    // this.index=0;//对变量属性就行赋值的操作

  }

}
