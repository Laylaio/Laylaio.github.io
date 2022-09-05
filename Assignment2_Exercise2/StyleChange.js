//Define a variable The default is false, which means day, and the value is true, which means night.
var flag=false;
function switchModes(){
	//if statement
    if(flag){
        document.documentElement.style.setProperty('--col-01','#a95186'); //for css --col-01 is set to #a95186 black
		document.documentElement.style.setProperty('--col-02','#fff');  //for css --col-02 set to #fff white
        flag=false;
    }else{
		document.documentElement.style.setProperty('--col-01','#a95186'); //for css --col-01 set to #a95186 white
		document.documentElement.style.setProperty('--col-02','#000'); //for css --col-02 set to #000 black
		flag=true;
    }
}
