import { Component, OnInit,Output,Input} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @Input() workname='';
  @Input() todolist=[];
  addToDo(msg:string){
    var obj={
      workname:msg,
    }
    this.todolist.push(obj);
  }
  constructor() { }
  ngOnInit() {
  }

}
