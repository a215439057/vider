window.onload=function(){
	var men =document.getElementById('men');
	document.getElementById('menu_2').onclick=function(){
		if (men.clientHeight=="0") 
			{
				
				men.style.height ="20vh";
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
		}
		else{
			top.style.background="#fff";
		}
	}
	else{
		top.style.position ="absolute";
	}	

}