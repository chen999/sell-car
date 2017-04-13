// JavaScript Document

var bt=document.querySelector('#bottom button');
var lis=document.querySelectorAll('#content .car li');
//var intro=document.querySelectorAll('#content .introduce');
for(var i=0;i<lis.length;i++){
	lis[i].index=i;
	lis[i].onclick=function(){
		var cur=this.index;
		if(this.className=="mark"){
			 lis[cur].style.background="url('images/Nselect.png') no-repeat 0.2rem 0.67rem #fff";
			 lis[cur].style.backgroundSize="0.5rem 0.5rem";
			 lis[cur].className="";
		}
		else{
			lis[cur].style.background="url('images/select.png') no-repeat 0.2rem 0.67rem #fff";
			lis[cur].style.backgroundSize="0.5rem 0.5rem";
			lis[cur].className="mark";
		}
	}
}

function clear(){
	var del=document.getElementsByName('mark');
	if(del){
		del.value='';
		del.style.height=0+"px";
	}
}





