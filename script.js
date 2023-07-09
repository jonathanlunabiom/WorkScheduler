savebtn = document.querySelector(".saveBtn");
currentday = document.querySelector("#currentDay");
var div = document.getElementById("hour-9");
var blocks = document.getElementsByClassName("time-block");
var timeblock = document.getElementsByClassName("hour");
var placeholder = document.getElementsByClassName("description");
var btn = document.getElementsByClassName("btn");


function timeRefresh(){
  let day = new Date();
  let time = [day.getHours(),day.getMinutes(),day.getSeconds()];
  currentday.innerHTML = ("Now: " + time[0] + " hour(s) " + time[1] + " minutes and " + time[2] + " seconds ");
}
var divClone = div.cloneNode(true); 

function cloneEl(){
  for(let i = 0; i < 9; i++){
    divClone = div.cloneNode(true);
    document.body.appendChild(divClone);
  }
}

cloneEl();

function setTime(){
  var j = 8;
  var currenthour = new Date().getHours();
 for(let i = 0;i < timeblock.length;i++){
  if(currenthour > j){
    blocks[i].classList.add("past");
  }else if(currenthour == j){
    blocks[i].classList.add("present");
  }else{
    blocks[i].classList.add("future");
  }

  if(j<12){
    timeblock[i].innerHTML = (j + ":00 am"); 
  }else{
    timeblock[i].innerHTML = (j + ":00 pm"); 
  }
  j++;
 }
}

//Commented for educational purposes
// btn.addEventListener("click", function(e){
//   var btnclicked = e.target;
//   console.log(btnclicked)
// });



setTime();
div.style.display = "none"

setInterval(timeRefresh,1000);
