import express from'express';
import bodyParser from 'body-parser'

const app=express();
app.use(bodyParser.json());
//同步课中的数据
class Course{
    constructor(
        public id:number,
        public courseName:string,
        public images:string,
        public task:number,
        public person:number
        ){}
}
const courses=[
    new Course(1,'2016级混合应用开发',
    "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",
    2,91),
    new Course(2,'2018级计算机导论',
    "http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130",
    1,104),
    new Course(3,'HTML5',
    "http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130",
    1,80),
    new Course(4,'2016测试方向',
    "http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130",
    3,98),
    new Course(5,'2016级HTML5与CSS前端',
    "http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130",
    2,89),
    new Course(6,'2018-2019第一学期面向对象...',
    "http://usercontent.edu2act.cn/media/team/18-03-21/86rU3otijWNe5HKzYACL2m.jpg?imageView2/1/w/230/h/130",
    1,108),
    new Course(7,'相思湖学院 15级JS课程',
    "http://usercontent.edu2act.cn/media/team/17-11-24/6tR5WhphigWgJFDSaSGb3c.jpg?imageView2/1/w/230/h/130",
    4,108),
    new Course(8,'2018级信息素养实践',
    "http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130",
    1,395),
    new Course(9,'2017级3-4班软件测试基础',
    "http://usercontent.edu2act.cn/media/team/18-09-09/jHw7UZ9hmNxJtTgCDuf9c3.jpg?imageView2/1/w/230/h/130",
    15,108),
    new Course(10,'2017级数据结构',
    "http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130",
    15,118),
    new Course(11,'软件学院18级新生训练营',
    "http://usercontent.edu2act.cn/media/team/18-07-09/3ydhisn3DM8PR9hNY9vCjA.jpg?imageView2/1/w/230/h/130",
    15,108),
    new Course(12,'2017级coding暑期训练营',
    "http://usercontent.edu2act.cn/media/team/18-07-09/J3LxZ5cMMP9JFjGuDbSsh8.png?imageView2/1/w/230/h/130",
    13,92)
]
//课程中的数据
class Lesson{
    constructor(
        public id:number,
        public lessonName:string,
        public images:string,
        public content:string,
        public hour:number,
        public person:number
        ){}
}
const lessons=[
    new Lesson(1,'Github 开源之旅视频课程第一季：启程',
    "http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190",
    "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ",
    12,4250),
    new Lesson(2,'CSS3基础',
    "http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190",
    "CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性",
    10,3735),
    new Lesson(3,'HTML5基础',
    "http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190",
    "HTML5是最新的一项Web标准，在原有HTML4的基础上定义了一些新的标签和新的JavaScript API。是原有HTML4标准的一个超集。本课程主要介绍HTML5的新特性以及相应API。",
    12,2315),
    new Lesson(4,'Selenium IDE WEB自动化测试入门视频课程（中',
    "http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190",
    "上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的基本用法，学完了可以录制简单的自动化测试脚本。中篇和下篇会介绍很多技术细节。基本上中篇会把最常用到的技术细节都讲到。这样上篇和中篇的内容可以应付80%网站的自动化测试任务了。下篇有些高级话题，不是每个人都会用到的，适合骨灰级玩家",
    10,3131),
    new Lesson(5,'扩展的ICONIX软件过程实践',
    "http://usercontent.edu2act.cn/media/cs/16-11-03/TeZqcmxukYntmh8UigEeqU.png?imageView2/1/w/320/h/190",
    "本课程是和学员一起探讨交流关于产品设计和交互设计的一些经验教训，结合具体案例讲解了一些在具体设计某些功能点时需要注意的问题。",
    10,1572),
    new Lesson(6,'Selenium IDE WEB自动化测试入门视频课程上',
    "http://usercontent.edu2act.cn/media/cs/16-10-28/93BLumGUzRct9BRxKQgWnn.png?imageView2/1/w/320/h/190",
    "“2016是VR元年”，这一观点早已在计算机互联网行业中流行开来，与VR相关的各种分析研究也是层出不穷。而随着Google Cardboard等技术逐渐普及，VR使用成本也在不断降低。VR技术不仅涉及到游戏领域，在训练、教育以及最新提出的全景直播等应用也开始被人不断提出，VR应用必将很快走出传统人们观念中游戏、三维模拟等应用范围，变成像微信、淘宝等常用手机应用一样融入日常生活中，而广大产品经理也需要充分了解VR技术背景，以全新角度规划用户需求发掘、产品功能设计等工作，以求为自身和企业牟取更多发展机遇。",
    10,3982),
    new Lesson(7,'ProcessOn界面原型绘制',
    "http://usercontent.edu2act.cn/media/cs/16-09-22/Qrnx7yH2tp7mGGLSdbhWHc.png?imageView2/1/w/320/h/190",
    "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ",
    10,4455),
    new Lesson(8,'CSS3基础',
    "http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190",
    "CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性",
    10,5566),
    new Lesson(9,'Github 开源之旅视频课程第一季：启程',
    "http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190",
    "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ",
    10,7878),
    new Lesson(10,'CSS3基础',
    "http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190",
    "CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性",
    10,1245),
    new Lesson(11,'Github 开源之旅视频课程第一季：启程',
    "http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190",
    "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ",
    10,8888),
    new Lesson(12,'CSS3',
    "http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190",
    "CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性",
    12,9999),
]

//社区的数据
export class Shequ{
    constructor(
        public id:number,
        public articleName:string,//文章名
        public images:string,
        public read:number,//阅读量
        public comment:number,//评论数
        public excerpt:string,
        public writer:string,
        public day:string,
        public time:string
        ){}
}
const books = [
    new Shequ(1,'WEB开发（二）—— 函数',"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg ",
    690,11,"（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。1．函数声明形式 注： 不需要在函数声明的后面添加一",
    "刘秀梅","2018-10-11","15:10"),

    new Shequ(2,'类定义关键字详解',"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg ",
    510,5,"JAVA类与对象（三）----类定义关键字详解 static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来访问，也就是使这个属性成为本类的类变量，为本类对象所共有。这个属性就",
    "3-张馨元","2018-10-09","19:21"),

    new Shequ(3,'一个java文件中可包含多个main方法',
    "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg ",10,90,
    "一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。但是当JVM进行编译时，只",
    "3-张馨元","2018-10-09","18:17"),

    new Shequ(4,'一个java文件中可包含多个main方法',
    "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg",10,90,
    "一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。但是当JVM进行编译时，只",
    "3-张馨元","2018-10-09","18:17"),
    new Shequ(5,'一个java文件中可包含多个main方法',
    "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/edrLxidT6BMiGxXjRq39iJ.jpg ",10,90,
    "一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。但是当JVM进行编译时，只",
    "3-张馨元","2018-10-09","18:17"),
    new Shequ(6,'一个java文件中可包含多个main方法',
    "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/edrLxidT6BMiGxXjRq39iJ.jpg ",10,90,
    "一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。但是当JVM进行编译时，只",
    "3-张馨元","2018-10-09","18:17"),
    new Shequ(7,'一个java文件中可包含多个main方法',
    "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/edrLxidT6BMiGxXjRq39iJ.jpg ",10,90,
    "一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。但是当JVM进行编译时，只",
    "3-张馨元","2018-10-09","18:17"),
    new Shequ(8,'一个java文件中可包含多个main方法',
    "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/edrLxidT6BMiGxXjRq39iJ.jpg ",10,90,
    "一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。但是当JVM进行编译时，只",
    "3-张馨元","2018-10-09","18:17"),
    new Shequ(3,'一个java文件中可包含多个main方法',
    "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/edrLxidT6BMiGxXjRq39iJ.jpg ",10,90,
    "一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。但是当JVM进行编译时，只",
    "3-张馨元","2018-10-09","18:17")
]







app.get('/api',(req,res)=>{
    res.json(courses);
});
// app.listen(8000);
//可以启动一个服务
app.get('/api/courses',(req,res)=>{
    // res.end(JSON.stringify(courses));
    //end 后面只能返回一个buffer或者是字符串
    res.json(courses);
});
app.get('/api/courses/:id',(req,res)=>{
    // res.end(JSON.stringify(courses));
    //end 后面只能返回一个buffer或者是字符串
    // console.log(req.params);
    res.json(courses.find((ele)=>ele.id==req.params.id));
    //如果相等直接返回
});


//课程的get
app.get('/api',(req,res)=>{
    res.json(lessons);
});

app.get('/api/lessons',(req,res)=>{
    res.json(lessons);
});
app.get('/api/lessons/:id',(req,res)=>{
    // console.log(req.params);
    res.json(lessons.find((ele)=>ele.id==req.params.id));
});

//社区get
app.get('/api',(req,res)=>{
    res.json(books);
});

app.get('/api/books',(req,res)=>{
    res.json(books);
});
app.get('/api/books/:id',(req,res)=>{
    res.json(books.find((ele)=>ele.id==req.params.id));
});

app.listen(8000);

