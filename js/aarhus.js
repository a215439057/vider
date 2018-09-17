window.onload=function(){
	var men =document.getElementById('men');
	var conce =document.getElementById("conce");
	var cof = document.getElementById("cof");
	var bran =document.getElementById("bran");
	var brand = document.getElementById("brand");
	var arttt =document.getElementById("arttt");
	var arts = document.getElementById("arts");	
	var abdoa =document.getElementById("abdoa");
	var abdob = document.getElementById("abdob");
	var green =	document.getElementById("green");
	var gal_2 =document.getElementById("gal_2");
	var ga =document.getElementById("ga");
	document.getElementById('menu_2').onclick=function(){
		if (men.clientHeight=="0") 
			{			
				men.style.height ="60vh";
				men.style.opacity='1';
			}
		else{			
			men.style.height ="0";
			men.style.opacity='0';
		}
	}
	document.getElementById('co').onclick=function(){
		if(conce.style.display !="block"){
			conce.style.display="block";
			cof.style.transform="rotate(90deg)";
		}
		else{
			conce.style.display="none";
			cof.style.transform="rotate(0deg)";
		}
	}
	document.getElementById('br').onclick=function(){
		if(bran.style.display !="block"){
			bran.style.display="block";
			brand.style.transform="rotate(90deg)";
		}
		else{
			bran.style.display="none";
			brand.style.transform="rotate(0deg)";
		}
	}
	document.getElementById('ar').onclick=function(){
		if(arts.style.display !="block"){
			arts.style.display="block";
			arttt.style.transform="rotate(90deg)";
		}
		else{
			arts.style.display="none";
			arttt.style.transform="rotate(0deg)";
		}
	}
	document.getElementById('abdo').onclick=function(){
		if(abdoa.style.display !="block"){
			abdoa.style.display="block";
			abdob.style.transform="rotate(90deg)";
		}
		else{
			abdoa.style.display="none";
			abdob.style.transform="rotate(0deg)";
		}
	}			
}
window.onscroll=function()
{	
	var notop =document.getElementById("notop");
	if (document.body.clientWidth > 768) {
		
		if ( window.pageYOffset == '0') {
			notop.style.position="relative";
			ga.style.paddingTop="0";

		}
		else{
			notop.style.position="fixed";
			ga.style.paddingTop="100px";
		}
		if(getScrollTop() + getWindowHeight() >= getScrollHeight()- green.clientHeight){
	　　　　gal_2.style.position="absolute";
			gal_2.style.paddingTop=ga.clientHeight -882+'px';
	　　}
		else{
			gal_2.style.position="fixed";
			gal_2.style.paddingTop="0px";
		}		
	}

}
//滚动条在Y轴上的滚动距离
function getScrollTop(){
　　var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
　　if(document.body){
　　　　bodyScrollTop = document.body.scrollTop;
　　}
　　if(document.documentElement){
　　　　documentScrollTop = document.documentElement.scrollTop;
　　}
　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
　　return scrollTop;
}
//文档的总高度
function getScrollHeight(){
　　var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
　　if(document.body){
　　　　bodyScrollHeight = document.body.scrollHeight;
　　}
　　if(document.documentElement){
　　　　documentScrollHeight = document.documentElement.scrollHeight;
　　}
　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
　　return scrollHeight;
}
//浏览器视口的高度
function getWindowHeight(){
　　var windowHeight = 0;
　　if(document.compatMode == "CSS1Compat"){
　　　　windowHeight = document.documentElement.clientHeight;
　　}else{
　　　　windowHeight = document.body.clientHeight;
　　}
　　return windowHeight;
}