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
	var top =document.getElementById("top");
	if (document.body.clientWidth > 768) {
		
		if ( window.pageYOffset == '0') {
			top.style.background="transparent";
			document.getElementById("con").style.background="#000";
			document.getElementById("bra").style.background="#000";
			document.getElementById("art").style.background="#000";
			document.getElementById("abo").style.background="#000";
			document.getElementById("logo").style.color= "#fff";
			if(document.getElementById("whit")!=null){
				document.getElementById("whit").getElementsByTagName("a")[0].style.color= "#fff";
			}
			if(document.getElementById("opi")!=null){
				document.getElementById("opi").style.color= "#fff";
			}					
		}
		else{
			top.style.background="#fff";
			document.getElementById("con").style.background="#fff";	
			document.getElementById("bra").style.background="#fff";	
			document.getElementById("art").style.background="#fff";			
			document.getElementById("abo").style.background="#fff";	
			document.getElementById("logo").style.color= "#000";
			if(document.getElementById("whit")!=null){
				document.getElementById("whit").getElementsByTagName("a")[0].style.color= "#000";
			}
			if(document.getElementById("opi")!=null){
				document.getElementById("opi").style.color= "#000";
			}
			
		}
	}
	else{
		top.style.position ="absolute";
	}	

}