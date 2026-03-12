window.onload = function(){

let progress = document.getElementById("loader-progress");
let percent = document.getElementById("loader-percent");

let loader = document.getElementById("loader");
let site = document.getElementById("site");

let count = 0;

let loading = setInterval(function(){

count++;

progress.style.width = count + "%";
percent.innerText = count + "%";

if(count >= 100){

clearInterval(loading);

setTimeout(function(){

loader.style.display = "none";
site.style.display = "block";

},500);

}

},25);

};
