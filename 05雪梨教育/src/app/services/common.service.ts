import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})//如果没有这个的话，和其他的没有联系就不能用，
//就要去app.module里面的provide里面自己引入。

export class CommonService {

  constructor() { }//想执行语句就在函数里面声明变量，执行语句
  set(key,value)
  {
    localStorage.setItem(key,value);
  }
  get(key){
    return localStorage.getItem(key);
  }
  //在类里面不要执行语句，
}

//创建一个类，使用的时候需要实例化，但是有的没有自己实例化，需要引用的服务就是一个个的依赖。就是依赖注入（DI）。
//控制反转IoC(容器)
// 控制反转是我们最终要实现的目的
// 控制权由当前的转移到外部容器，在运行时通过某种方式注入进来，依赖注入是实现控制反转的方式。
// 注入器一般不会去操作，如果是框架的开发者，自己的项目不用操作注入器，（在构造函数中注入）。
// 提供器，用于配置注入器
// provoders:[CommonService]里面只写一个类就行了，或者（一样写第一种，不一样写第二种）
// provide（第一项的名字，id 名字。作为键值使用） 和 useClass（最后实例化这个类，这个和前面不一定是一样的。可以放任何一个类 ）是一样的的时候可以写成上面的那种形式
// 依赖，这是在当前组件声明的
