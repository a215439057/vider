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
// news

function hui_1(){
	document.getElementById('ne_1').style.display="block";
	document.getElementById('ne_2').style.display="none";
	document.getElementById('ne_3').style.display="none";
}

function hui_2(){
	document.getElementById('ne_1').style.display="none";
	document.getElementById('ne_2').style.display="block";
	document.getElementById('ne_3').style.display="none";
}

function hui_3(){
	document.getElementById('ne_1').style.display="none";
	document.getElementById('ne_2').style.display="none";
	document.getElementById('ne_3').style.display="block";
}

// all
 
function alll(){
	var brandd = document.querySelectorAll(".brandd");
	var company = document.querySelectorAll(".company");
	var concerts = document.querySelectorAll(".concerts");
	var flying = document.querySelectorAll(".flying");
	var livem = document.querySelectorAll(".livem");
	var lives = document.querySelectorAll(".lives");
	var major = document.querySelectorAll(".major");
	var opening = document.querySelectorAll(".opening");
	var our = document.querySelectorAll(".our");
	var theatre = document.querySelectorAll(".theatre");
		for (var i = 0; i < company.length; i++) {
			company[i].style.display="block";
		}
		for (var i = 0; i < concerts.length; i++) {
			concerts[i].style.display="block";
		}
		for (var i = 0; i < flying.length; i++) {
			flying[i].style.display="block";
		}
		for (var i = 0; i < livem.length; i++) {
			livem[i].style.display="block";
		}
		for (var i = 0; i < lives.length; i++) {
			lives[i].style.display="block";
		}
		for (var i = 0; i < major.length; i++) {
			major[i].style.display="block";
		}
		for (var i = 0; i < opening.length; i++) {
			opening[i].style.display="block";
		}
		for (var i = 0; i < our.length; i++) {
			our[i].style.display="block";
		}		
		for (var i = 0; i < theatre.length; i++) {
			theatre[i].style.display="block";	
		}
		for (var i = 0; i < brandd.length; i++) {
			brandd[i].style.display="block";	
		}		
		theatret(0);	
}

function brandd(){
	var brandd = document.querySelectorAll(".brandd");
	var company = document.querySelectorAll(".company");
	var concerts = document.querySelectorAll(".concerts");
	var flying = document.querySelectorAll(".flying");
	var livem = document.querySelectorAll(".livem");
	var lives = document.querySelectorAll(".lives");
	var major = document.querySelectorAll(".major");
	var opening = document.querySelectorAll(".opening");
	var our = document.querySelectorAll(".our");
	var theatre = document.querySelectorAll(".theatre");
		for (var i = 0; i < company.length; i++) {
			company[i].style.display="none";
		}
		for (var i = 0; i < concerts.length; i++) {
			concerts[i].style.display="none";
		}
		for (var i = 0; i < flying.length; i++) {
			flying[i].style.display="none";
		}
		for (var i = 0; i < livem.length; i++) {
			livem[i].style.display="none";
		}
		for (var i = 0; i < lives.length; i++) {
			lives[i].style.display="none";
		}
		for (var i = 0; i < major.length; i++) {
			major[i].style.display="none";
		}
		for (var i = 0; i < opening.length; i++) {
			opening[i].style.display="none";
		}
		for (var i = 0; i < our.length; i++) {
			our[i].style.display="none";
		}		
		for (var i = 0; i < theatre.length; i++) {
			theatre[i].style.display="none";	
		}
		for (var i = 0; i < brandd.length; i++) {
			brandd[i].style.display="block";	
		}		
		theatret(1);	
}

function company(){
	var brandd = document.querySelectorAll(".brandd");
	var company = document.querySelectorAll(".company");
	var concerts = document.querySelectorAll(".concerts");
	var flying = document.querySelectorAll(".flying");
	var livem = document.querySelectorAll(".livem");
	var lives = document.querySelectorAll(".lives");
	var major = document.querySelectorAll(".major");
	var opening = document.querySelectorAll(".opening");
	var our = document.querySelectorAll(".our");
	var theatre = document.querySelectorAll(".theatre");
		for (var i = 0; i < brandd.length; i++) {
			brandd[i].style.display="none";
		}
		for (var i = 0; i < concerts.length; i++) {
			concerts[i].style.display="none";
		}
		for (var i = 0; i < flying.length; i++) {
			flying[i].style.display="none";
		}
		for (var i = 0; i < livem.length; i++) {
			livem[i].style.display="none";
		}
		for (var i = 0; i < lives.length; i++) {
			lives[i].style.display="none";
		}
		for (var i = 0; i < major.length; i++) {
			major[i].style.display="none";
		}
		for (var i = 0; i < opening.length; i++) {
			opening[i].style.display="none";
		}
		for (var i = 0; i < our.length; i++) {
			our[i].style.display="none";
		}		
		for (var i = 0; i < theatre.length; i++) {
			theatre[i].style.display="none";	
		}
		for (var i = 0; i < company.length; i++) {
			company[i].style.display="block";	
		}		
		theatret(2);		
}
 
function concerts(){
	var brandd = document.querySelectorAll(".brandd");
	var company = document.querySelectorAll(".company");
	var concerts = document.querySelectorAll(".concerts");
	var flying = document.querySelectorAll(".flying");
	var livem = document.querySelectorAll(".livem");
	var lives = document.querySelectorAll(".lives");
	var major = document.querySelectorAll(".major");
	var opening = document.querySelectorAll(".opening");
	var our = document.querySelectorAll(".our");
	var theatre = document.querySelectorAll(".theatre");
		for (var i = 0; i < brandd.length; i++) {
			brandd[i].style.display="none";
		}
		for (var i = 0; i < company.length; i++) {
			company[i].style.display="none";
		}
		for (var i = 0; i < flying.length; i++) {
			flying[i].style.display="none";
		}
		for (var i = 0; i < livem.length; i++) {
			livem[i].style.display="none";
		}
		for (var i = 0; i < lives.length; i++) {
			lives[i].style.display="none";
		}
		for (var i = 0; i < major.length; i++) {
			major[i].style.display="none";
		}
		for (var i = 0; i < opening.length; i++) {
			opening[i].style.display="none";
		}
		for (var i = 0; i < our.length; i++) {
			our[i].style.display="none";
		}		
		for (var i = 0; i < theatre.length; i++) {
			theatre[i].style.display="none";	
		}
		for (var i = 0; i < concerts.length; i++) {
			concerts[i].style.display="block";	
		}		
		theatret(3);	
}

function flying(){
	var brandd = document.querySelectorAll(".brandd");
	var company = document.querySelectorAll(".company");
	var concerts = document.querySelectorAll(".concerts");
	var flying = document.querySelectorAll(".flying");
	var livem = document.querySelectorAll(".livem");
	var lives = document.querySelectorAll(".lives");
	var major = document.querySelectorAll(".major");
	var opening = document.querySelectorAll(".opening");
	var our = document.querySelectorAll(".our");
	var theatre = document.querySelectorAll(".theatre");
		for (var i = 0; i < brandd.length; i++) {
			brandd[i].style.display="none";
		}
		for (var i = 0; i < company.length; i++) {
			company[i].style.display="none";
		}
		for (var i = 0; i < concerts.length; i++) {
			concerts[i].style.display="none";
		}
		for (var i = 0; i < livem.length; i++) {
			livem[i].style.display="none";
		}
		for (var i = 0; i < lives.length; i++) {
			lives[i].style.display="none";
		}
		for (var i = 0; i < major.length; i++) {
			major[i].style.display="none";
		}
		for (var i = 0; i < opening.length; i++) {
			opening[i].style.display="none";
		}
		for (var i = 0; i < our.length; i++) {
			our[i].style.display="none";
		}		
		for (var i = 0; i < theatre.length; i++) {
			theatre[i].style.display="none";	
		}
		for (var i = 0; i < flying.length; i++) {
			flying[i].style.display="block";	
		}		
		theatret(4);	
}

function livem(){
	var brandd = document.querySelectorAll(".brandd");
	var company = document.querySelectorAll(".company");
	var concerts = document.querySelectorAll(".concerts");
	var flying = document.querySelectorAll(".flying");
	var livem = document.querySelectorAll(".livem");
	var lives = document.querySelectorAll(".lives");
	var major = document.querySelectorAll(".major");
	var opening = document.querySelectorAll(".opening");
	var our = document.querySelectorAll(".our");
	var theatre = document.querySelectorAll(".theatre");
		for (var i = 0; i < brandd.length; i++) {
			brandd[i].style.display="none";
		}
		for (var i = 0; i < company.length; i++) {
			company[i].style.display="none";
		}
		for (var i = 0; i < concerts.length; i++) {
			concerts[i].style.display="none";
		}
		for (var i = 0; i < flying.length; i++) {
			flying[i].style.display="none";
		}
		for (var i = 0; i < lives.length; i++) {
			lives[i].style.display="none";
		}
		for (var i = 0; i < major.length; i++) {
			major[i].style.display="none";
		}
		for (var i = 0; i < opening.length; i++) {
			opening[i].style.display="none";
		}
		for (var i = 0; i < our.length; i++) {
			our[i].style.display="none";
		}		
		for (var i = 0; i < theatre.length; i++) {
			theatre[i].style.display="none";	
		}
		for (var i = 0; i < livem.length; i++) {
			livem[i].style.display="block";	
		}		
		theatret(5);
}

function lives(){
	var brandd = document.querySelectorAll(".brandd");
	var company = document.querySelectorAll(".company");
	var concerts = document.querySelectorAll(".concerts");
	var flying = document.querySelectorAll(".flying");
	var livem = document.querySelectorAll(".livem");
	var lives = document.querySelectorAll(".lives");
	var major = document.querySelectorAll(".major");
	var opening = document.querySelectorAll(".opening");
	var our = document.querySelectorAll(".our");
	var theatre = document.querySelectorAll(".theatre");
		for (var i = 0; i < brandd.length; i++) {
			brandd[i].style.display="none";
		}
		for (var i = 0; i < company.length; i++) {
			company[i].style.display="none";
		}
		for (var i = 0; i < concerts.length; i++) {
			concerts[i].style.display="none";
		}
		for (var i = 0; i < flying.length; i++) {
			flying[i].style.display="none";
		}
		for (var i = 0; i < livem.length; i++) {
			livem[i].style.display="none";
		}
		for (var i = 0; i < major.length; i++) {
			major[i].style.display="none";
		}
		for (var i = 0; i < opening.length; i++) {
			opening[i].style.display="none";
		}
		for (var i = 0; i < our.length; i++) {
			our[i].style.display="none";
		}		
		for (var i = 0; i < theatre.length; i++) {
			theatre[i].style.display="none";	
		}
		for (var i = 0; i < lives.length; i++) {
			lives[i].style.display="block";	
		}		
		theatret(6);
}

function major(){
	var brandd = document.querySelectorAll(".brandd");
	var company = document.querySelectorAll(".company");
	var concerts = document.querySelectorAll(".concerts");
	var flying = document.querySelectorAll(".flying");
	var livem = document.querySelectorAll(".livem");
	var lives = document.querySelectorAll(".lives");
	var major = document.querySelectorAll(".major");
	var opening = document.querySelectorAll(".opening");
	var our = document.querySelectorAll(".our");
	var theatre = document.querySelectorAll(".theatre");
		for (var i = 0; i < brandd.length; i++) {
			brandd[i].style.display="none";
		}
		for (var i = 0; i < company.length; i++) {
			company[i].style.display="none";
		}
		for (var i = 0; i < concerts.length; i++) {
			concerts[i].style.display="none";
		}
		for (var i = 0; i < flying.length; i++) {
			flying[i].style.display="none";
		}
		for (var i = 0; i < livem.length; i++) {
			livem[i].style.display="none";
		}
		for (var i = 0; i < lives.length; i++) {
			lives[i].style.display="none";
		}
		for (var i = 0; i < opening.length; i++) {
			opening[i].style.display="none";
		}
		for (var i = 0; i < our.length; i++) {
			our[i].style.display="none";
		}		
		for (var i = 0; i < theatre.length; i++) {
			theatre[i].style.display="none";	
		}
		for (var i = 0; i < major.length; i++) {
			major[i].style.display="block";	
		}		
		theatret(7);
}

function opening(){
	var brandd = document.querySelectorAll(".brandd");
	var company = document.querySelectorAll(".company");
	var concerts = document.querySelectorAll(".concerts");
	var flying = document.querySelectorAll(".flying");
	var livem = document.querySelectorAll(".livem");
	var lives = document.querySelectorAll(".lives");
	var major = document.querySelectorAll(".major");
	var opening = document.querySelectorAll(".opening");
	var our = document.querySelectorAll(".our");
	var theatre = document.querySelectorAll(".theatre");
		for (var i = 0; i < brandd.length; i++) {
			brandd[i].style.display="none";
		}
		for (var i = 0; i < company.length; i++) {
			company[i].style.display="none";
		}
		for (var i = 0; i < concerts.length; i++) {
			concerts[i].style.display="none";
		}
		for (var i = 0; i < flying.length; i++) {
			flying[i].style.display="none";
		}
		for (var i = 0; i < livem.length; i++) {
			livem[i].style.display="none";
		}
		for (var i = 0; i < lives.length; i++) {
			lives[i].style.display="none";
		}
		for (var i = 0; i < major.length; i++) {
			major[i].style.display="none";
		}
		for (var i = 0; i < our.length; i++) {
			our[i].style.display="none";
		}		
		for (var i = 0; i < theatre.length; i++) {
			theatre[i].style.display="none";	
		}
		for (var i = 0; i < opening.length; i++) {
			opening[i].style.display="block";	
		}		
		theatret(8);
}

function our(){
	var brandd = document.querySelectorAll(".brandd");
	var company = document.querySelectorAll(".company");
	var concerts = document.querySelectorAll(".concerts");
	var flying = document.querySelectorAll(".flying");
	var livem = document.querySelectorAll(".livem");
	var lives = document.querySelectorAll(".lives");
	var major = document.querySelectorAll(".major");
	var opening = document.querySelectorAll(".opening");
	var our = document.querySelectorAll(".our");
	var theatre = document.querySelectorAll(".theatre");
		for (var i = 0; i < brandd.length; i++) {
			brandd[i].style.display="none";
		}
		for (var i = 0; i < company.length; i++) {
			company[i].style.display="none";
		}
		for (var i = 0; i < concerts.length; i++) {
			concerts[i].style.display="none";
		}
		for (var i = 0; i < flying.length; i++) {
			flying[i].style.display="none";
		}
		for (var i = 0; i < livem.length; i++) {
			livem[i].style.display="none";
		}
		for (var i = 0; i < lives.length; i++) {
			lives[i].style.display="none";
		}
		for (var i = 0; i < major.length; i++) {
			major[i].style.display="none";
		}
		for (var i = 0; i < opening.length; i++) {
			opening[i].style.display="none";
		}		
		for (var i = 0; i < theatre.length; i++) {
			theatre[i].style.display="none";	
		}
		for (var i = 0; i < our.length; i++) {
			our[i].style.display="block";	
		}		
		theatret(9);
}

function theatre(){
	var brandd = document.querySelectorAll(".brandd");
	var company = document.querySelectorAll(".company");
	var concerts = document.querySelectorAll(".concerts");
	var flying = document.querySelectorAll(".flying");
	var livem = document.querySelectorAll(".livem");
	var lives = document.querySelectorAll(".lives");
	var major = document.querySelectorAll(".major");
	var opening = document.querySelectorAll(".opening");
	var our = document.querySelectorAll(".our");
	var theatre = document.querySelectorAll(".theatre");
		for (var i = 0; i < brandd.length; i++) {
			brandd[i].style.display="none";
		}
		for (var i = 0; i < company.length; i++) {
			company[i].style.display="none";
		}
		for (var i = 0; i < concerts.length; i++) {
			concerts[i].style.display="none";
		}
		for (var i = 0; i < flying.length; i++) {
			flying[i].style.display="none";
		}
		for (var i = 0; i < livem.length; i++) {
			livem[i].style.display="none";
		}
		for (var i = 0; i < lives.length; i++) {
			lives[i].style.display="none";
		}
		for (var i = 0; i < major.length; i++) {
			major[i].style.display="none";
		}
		for (var i = 0; i < opening.length; i++) {
			opening[i].style.display="none";
		}		
		for (var i = 0; i < our.length; i++) {
			our[i].style.display="none";	
		}
		for (var i = 0; i < theatre.length; i++) {
			theatre[i].style.display="block";	
		}		
		theatret(10);
}
function theatret(fx){
	var neli = document.getElementById('ne_1').getElementsByTagName('button');
	for (var z = 0; z < neli.length; z++) {
				neli[z].style.border="medium none";
		}
	neli[fx].style.border="1px solid #000";	
}