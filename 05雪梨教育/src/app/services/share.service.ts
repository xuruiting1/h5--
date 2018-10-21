import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  //数据的共享和交互
  data:Array<any>=[1,2,3];//声明的服务，一个依赖
  add(msg){
    this.data.push(msg);
  }
  constructor() { }
}
