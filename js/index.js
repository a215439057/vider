window.onload = function(){
	
}
window.onscroll=function()
{	
	var top =document.getElementById("top");
	if ( window.pageYOffset != '0') {
		top.style.background="#fff";
	}
	if(window.pageYOffset == '0'){
		document.getElementById("top").style.background="transparent";
	}
}