import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
//最通用的，一般不会改变，
//当前的可以注入其他的服务

export class Common2Service implements CommonService{
  set(key,value)
  {
    this.log.log('set');
    localStorage.setItem(key,value);
  }
  get(key){
    console.log('get 方法调用了');
    return localStorage.getItem(key);
  }
  //想注入其他的服务
  constructor(private log:LogService) { }
}
