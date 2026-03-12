window.addEventListener("load", function(){

let progress=document.getElementById("loader-progress");
let percent=document.getElementById("loader-percent");
let loader=document.getElementById("loader");

let count=0;

let loading=setInterval(function(){

count++;

if(progress){
progress.style.width=count+"%";
}

if(percent){
percent.innerText=count+"%";
}

if(count>=100){

clearInterval(loading);

setTimeout(function(){
loader.style.display="none";
},500);

}

},30);

});