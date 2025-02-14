var sex;

var murder;

var typingMode;

var comment;

function startUp(){
	sex = 0;
	murder = 0;
	typingMode = true;
	comment=" ";
	printSex();
	printMurder();
}

function printSex(){
	document.getElementById("sex").textContent=sex;
}

function printMurder(){
	document.getElementById("murder").textContent=murder;
}




$(document).ready(function() {
	setInterval(function() {
		changeBackground(),
		sex = 0,
		murder = 0,
		printMurder(),
		printSex(),
		$(".comment").remove()
	}, 15000);
		


	$(document).keydown(function(e) {
		if(e.which == 13 & comment != ""){
				$("#comments").append('<marquee class="comment" behavior="scroll" direction="left" scrollamount="20">'+comment+'</marquee>');
				comment="";		
		}else if(e.which == 39) {
			murder += 1;
			printMurder(); 
		}else if(e.which == 37) {
			sex += 1;
			printSex();
		}else if(typingMode==true){
			comment += String.fromCharCode(e.which);
		}
	});
	
	
	
	
	
});



function changeBackground(){
	if(sex + murder == 0){
		document.body.style.backgroundImage = "url('assets/Pranks Twine/WeHateClownsTwine.gif')";
	}else if(sex == murder){
		document.body.style.backgroundImage = "url('assets/Pranks Twine/ClownParadeTwine.gif')";	
	}else if(murder > sex & sex + murder < 100){
		if(Math.floor(Math.random() * 2) == 0){
			document.body.style.backgroundImage = "url('assets/Pranks Twine/MuderClownHeartPeltTwine.gif')";
		}else{
			document.body.style.backgroundImage = "url('assets/Pranks Twine/MuderClownPlayingThePipesTwine.gif')";
		}
	}else if(murder > sex){
		if(Math.floor(Math.random() * 2) == 0){
			document.body.style.backgroundImage = "url('assets/Pranks Twine/MuderClownDevilFingersTwine.gif')";
		}else{
			document.body.style.backgroundImage = "url('assets/Pranks Twine/MuderClownStairDareTwine.gif')";
		}
	}else if(murder < sex & sex + murder < 100){
		if(Math.floor(Math.random() * 2) == 0){
			document.body.style.backgroundImage = "url('assets/Pranks Twine/SexClownPenisBalloonTwine.gif')";
		}else{
			document.body.style.backgroundImage = "url('assets/Pranks Twine/SexClownCarOrgyTwine.gif')";
		}
	}else if(murder < sex){
			document.body.style.backgroundImage = "url('assets/Pranks Twine/SexClownUnsensorTwine.gif')";
	}
}

function nextSong(){
	document.getElementById("player").setAttribute('src', 'assets/loop.wav');
	document.getElementById("myAudio").loop = true;
}

