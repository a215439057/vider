window.onload=function(){
	var men =document.getElementById('men');
	document.getElementById('menu_2').onclick=function(){
		if (men.clientHeight=="0") 
			{
				
				men.style.height ="30vh";
				men.style.opacity='1';
			}
		else{			
			men.style.height ="0";
			men.style.opacity='0';
		}
	}

}
window.onscroll=function()
{	var top =document.getElementById("top");
	if (document.body.clientWidth > 768) {
		
		if ( window.pageYOffset == '0') {
			document.getElementById("top").style.background="transparent";
			document.getElementById("logo").style.color= "#fff";
			document.getElementById("whit").style.color= "#fff";
		}
		else{
			top.style.background="#fff";
			document.getElementById("logo").style.color= "#000";
			document.getElementById("whit").style.color= "#000";
		}
	}
	else{
		top.style.position ="absolute";
	}	

}