function getStyle (obj,attr)
{
    //兼容的写法
    if(obj.currentStyle)
    {
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,null)[attr];
    }
}
function animate(obj,json,callback){
    var timer=setInterval(function(){
        var isStop=true;
        for(var attr in json){
            var now=0;
            if(attr=='opacity')
            {
                now=parseInt(getStyle(obj,attr)*100);
            }else{
                //正常的
                now = parseInt(getStyle(obj,attr));
            }
            var speed=(json[attr]-now)/6;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            //小于零的时候不能再向上取整，要向下取整。
            //最后没有到300，没有关定时器，不能是小数
            console.log(now);
            //只要有一个没有到，就不能清掉计时器。
            var current=now +speed;
            if(attr=='opacity')
            {
                obj.style.opacity=current/100;
            }else{
                obj.style[attr]=current+"px";
            }
            if(json[attr] !==current){
                isStop=false;//有个标志
            }//不能判断三个都到了
        }
        if(isStop){
            clearInterval(timer);
            if(isStop){
                clearInterval(obj.timer);
                callback&&callback();
                //if(callback){callback();}
            }
        }
    },30);
}