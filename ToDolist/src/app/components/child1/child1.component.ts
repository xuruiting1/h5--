import { Component, OnInit,Output,Input} from '@angular/core';
import {EventEmitter} from '@angular/core'

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {


  @Input() workname;
  @Input() todolist;
  @Output() donelist=[];
  deleteTodo(index,done){
    if(done){
      this.todolist.splice(index,1);
    }else{
      this.donelist.splice(index,1);
    }
  }
  changeTodo(index,done){
    if(done){
      var Todo=this.todolist[index];
      this.donelist.push(Todo);
      this.todolist.splice(index,1);
    }else{
      var Done=this.donelist[index];
      this.todolist.push(Done);
      this.donelist.splice(index,1);
    }
  }
  constructor() { }
  ngOnInit() {
  }

}
