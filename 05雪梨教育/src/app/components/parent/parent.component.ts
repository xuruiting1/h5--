import { Component, OnInit, Host, Optional } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { ShareService } from '../../services/share.service';

@Component({//这是Injeatable的一个子类，继承了它的方法。
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers:[ShareService]
  //providers:[CommonService]//在组建中声明去调用。只在这里使用了，就是只能在parent里面使用，包括他的子组件，但是同级的不能再使用。
})
export class ParentComponent implements OnInit {

  data;
  data1=['a','b','c','d'];
  constructor(private share: ShareService, private local:CommonService) { }//:后面是类型
  add(){
    this.share.add(100);
  }
  del(i)
  {
    console.log(i);
    this.data.splice(i,1);
    this.local.set('list',this.data);
    
  }
  //ngOnInit() {
    // setTimeout(()=>{
    //   this.data=this.data1;
    // },3000)//地址变了
    // setInterval(()=>{
    //   this.data.push(66);
    // },1000);//不会调用，因为引用地址没有变，data 的引用地址没有变

  //}
  ngOnInit(){
    //this.local.set('name','liu');
    if(this.local.get('list'))
    {
      console.log(typeof localStorage.getItem('list'));
      this.data=localStorage.getItem('list').split(',');
    }
    else{
      this.data=[1,2,3,4,5,6,7];
    }
    
  }


}
