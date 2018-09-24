import { Component, OnInit,Output,EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-child0',
  templateUrl: './child0.component.html',
  styleUrls: ['./child0.component.css']
})
export class Child0Component implements OnInit  {

  input1;
  @Output() private child0Outer = new EventEmitter();
  // 子组件主动发送数据
  commit(e){
     if(e.keyCode == 13){
      this.child0Outer.emit(this.input1);
      this.input1="";
    }
  }
  constructor() {}
  ngOnInit() {}

}
