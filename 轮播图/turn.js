// 照片轮换
var box =document.getElementsByClassName('wrap')[0];
var i=0;
var links=document.getElementsByTagName('a');
var timer;
function imgtable()
{
	links[i%9].style.display='none';
	i++;
	links[i%9].style.display='block';
}
timer=setInterval(imgtable,2000);

// //点击哪一个出现哪一个
// var buttons=document.getElementsByTagName('span');
// var btn=document.getElementById('btn');
// var j=0;
// buttons.onclick=function(){

// }

function prev(){
	links[i%8].style.display='none';
	i--;
	if(i<0)
	{
		i=8;
	}
	links[i%9].style.display='block';
	}
function next(){
	imgtable();
}