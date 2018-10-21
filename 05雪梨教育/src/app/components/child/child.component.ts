import { Component,EventEmitter,OnInit ,Input,Output, SimpleChanges, OnChanges} from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {//告诉你，你有这个功能

  
  // @Input() arr:Array<any>;//传过来这个数组  any 就是不确定数据类型
  // @Input() arr:string[];//传过来这个数组,指定数据类型
  //为了能提早看到错误
  @Input() arr:Array<any>;//传过来这个数组
  @Input() arr1:Array<any>;
  @Output() delIndex:EventEmitter<number> = new EventEmitter<number>();//事件发射器
  del(i){
    this.delIndex.emit(i);//emit一个方法。
  }
  index=0;
  log(msg){
    console.log(`这是${this.index++}次调用,调用的是钩子函数是${msg}`);
  }
  constructor() { 
    // this.log("constructor")
    console.log(this.arr);
  }//输入属性还是没有的,数据还没传进来


  ngOnChanges(changes:SimpleChanges): void{
    //this.log("ngOnchanges")
    // console.log();
    for(let item in changes){
      // for(let item in )
      console.log(changes[item].currentValue);
      for(let i in changes[item]){
        console.log(`属性名是${i},属性值是${changes[item][i]}`)
      }
    }

  }//在这里开始初始化的
  

  // ngOnInit() {
  //   // this.log("ngOnInit");
  //   console.log(this.arr);
  // }
  // ngDoCheck():void{
  //   this.log("ngDoCheck")
  // }
  // ngAfterContentInit(): void{
  //   this.log("ngAfterContentInit");
  // }
  // ngAfterContentChecked(): void{
  //   this.log("ngAfterContentChecked")//把投影的内容传进来
  // }
  // ngAfterViewInit(): void{
  //   this.log("ngAfterViewInit")//异步的，写延时函数，不要对这个进行修改
  // }
  // ngAfterViewChecked(): void{
  //   this.log("ngAfterViewChecked")
  // }

}
