window.onload=function(){
	document.getElementById('menu_2').onclick=function(){
		if (document.getElementById('men').offsetLeft=="-280") 
			{
				document.getElementById('men').style ="left:0px";
			}
		else{
			document.getElementById('men').style ="left:-280px";
		}
	}	
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
	document.getElementById('menu_2').onclick=function(){
		if (document.getElementById('men').offsetLeft=="-280") 
			{
				document.getElementById('men').style ="left:0px";
			}
		else{
			document.getElementById('men').style ="left:-280px";
		}
	}
}