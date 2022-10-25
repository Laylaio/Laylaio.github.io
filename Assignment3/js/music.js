/*Obtain DOM*/ 
var bodyEl=document.querySelector('body');
var playEl=document.querySelector('.play');
var openwinEl=document.querySelector('.openwin');
var backEl=document.querySelector('.back');
var letterEl=document.querySelector('.letter');
var mliEl=document.querySelectorAll('.music ul li img');

var cdImgEl;
var cdImgPl;

/*Define variable*/ 
var audio=null;
var audioImg=null;
var audioUrl=null;
var isshow=true;

/*Loop statement Click event for each music*/
for(var i=0; i<mliEl.length; i++){
	mliEl[i].onclick=function(){
		showWin();
		audioImg=this.getAttribute('src');
		audioUrl='file/'+this.getAttribute('data-mp');
		letterEl.innerHTML=this.getAttribute('data-tit');
		document.querySelector('.openwin .cd .img img').setAttribute('src',audioImg);
		Html5Audio(audioUrl);
		changIcon();
	}
}

/*play Pause*/
playEl.onclick=function(){
	if(audio==null){
		Html5Audio(url);
	}else if(audio.paused){
		audio.play();	
	}else{
		audio.pause();
	}
	changIcon();
}

/*Create Audio*/ 
function Html5Audio(url) {
	if(!audio){
		audio = new Audio();
	}
	audio.src=url;
	audio.id="audio";
	audio.autoplay = true;
	audio.loop = true;
	audio.play();
}

/*This is the button ICON*/
function changIcon(){
	var iconfontEl=document.querySelector('.iconfont');
	cdImgEl=document.querySelector('.openwin .cd .img img');
	cdImgPl=document.querySelector('.openwin .pt .img_02');
	if(audio.paused){
		iconfontEl.classList.remove('icon-zanting');
		iconfontEl.classList.add('icon-bofangqi-bofang');
		cdImgEl.classList.add('cd');
		cdImgPl.classList.remove('pl');
	}else{
		iconfontEl.classList.remove('icon-bofangqi-bofang');
		iconfontEl.classList.add('icon-zanting');
		cdImgEl.classList.remove('cd');
		cdImgPl.classList.add('pl');
	}
}

/*Show hide*/ 
function showWin(){
	if(isshow){
		bodyEl.classList.add('open');
		openwinEl.style.display='block';
		isshow=false;
	}else{
		bodyEl.classList.remove('open');
		openwinEl.style.display='none';
		isshow=true;
	}
}

/*This is the back button*/
backEl.onclick=function(){
	isshow=false;
	showWin();
}