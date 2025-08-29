//preloader
var perloader=document.getElementById("loading");
function myload() {
    perloader.style.display="none"
}
// setInterval(() => {
//     myload()
// }, 5000);
// animation button
let button = document.querySelector('.animate-button');

button.addEventListener('click', function() {
  button.classList.add('animate');
  
  setTimeout(function() {
    button.classList.remove('animate');
  }, 700);
});
var bt=document.querySelector(".bt");
var bt_2 =document.querySelector(".bt_2");
var lowlist=document.querySelector(".lowlist");
var highlist=document.querySelector(".highlist");
var bu=document.querySelector(".bu");
var game= document.querySelector(".game")

bt.addEventListener("click",()=>{
    lowlist.classList.toggle("active");
    document.querySelector(".add").classList.toggle("fa-xmark");
    
});
bt_2.addEventListener("click",()=>{
    highlist.classList.toggle("active_bt")
    document.querySelector(".up").classList.toggle("fa-xmark");
})
button.addEventListener("click",()=>{
    game.classList.add("active_pop");
    
});
document.querySelectorAll(".lowlist li").forEach((e) => {
  if (e.textContent!="Coustom") {
    e.addEventListener("click",()=>{
      document.getElementById("left").textContent=e.textContent
      lowlist.classList.remove("active")
      document.querySelector(".add").classList.remove("fa-xmark");
    })
  }    
  else{
    e.addEventListener("click",()=>{
      var prom =prompt("Enter custom Lower Limit: ")
      if (!isNaN(prom)) {
        document.getElementById("left").textContent=prom
        lowlist.classList.remove("active")
        document.querySelector(".add").classList.remove("fa-xmark");
      }
      else{
        alert("input Can Be Number Only")
      }
      
    })
  }

});
document.querySelectorAll(".highlist li").forEach((f)=>{
  if (f.textContent!="Custom") {
    f.addEventListener("click",()=>{
      document.getElementById("right").textContent=f.textContent
      highlist.classList.remove("active_bt")
      document.querySelector(".up").classList.remove("fa-xmark");
    })
  }
  else{
    f.addEventListener("click",()=>{
      var prom_two=prompt("Enter Custom Higher Limit: ")
      if (!isNaN(prom_two)) {
        document.getElementById("right").textContent=prom_two
        highlist.classList.remove("active_bt")
        document.querySelector(".up").classList.remove("fa-xmark");

      }
      else{
        alert("Input Can Be Number Only")
      }
    })
  }
})
let historyarray=[];
var reset =document.querySelector(".reset");
reset.addEventListener("click",()=>{
  // console.log("cat");
  if (document.getElementById("left").textContent=="x"||document.getElementById("right").textContent=="Y") {
    alert("Limits Not Defind Yet!")
  }
  else if(parseFloat(document.getElementById("left").textContent)>=parseFloat(document.getElementById("right").textContent)){
    alert("Right Item Must Be Lower Than Left Limit Item")
  }
  else{
    if (reset.textContent==="Set limits") {
      document.querySelector(".add").classList.remove("fa-xmark");
      document.querySelector(".up").classList.remove("fa-xmark");
      reset.textContent="Change limits"
      document.querySelector(".lowlist").classList.add("lock")
      document.querySelector(".highlist").classList.add("lock")
      
    }
    else{
      reset.textContent="Set limits"
      document.querySelector(".lowlist").classList.remove("lock")
      document.querySelector(".highlist").classList.remove("lock")

    }
  }
  var lowlimit=parseFloat(document.getElementById("left").textContent)
  var highlimit=parseFloat(document.getElementById("right").textContent)
  var randNum = Math.floor(Math.random() * (highlimit - lowlimit + 1) + lowlimit);
  historyarray.unshift(randNum)
  console.log(historyarray);
})
var inp=document.getElementById("inp");
document.querySelector(".submit").addEventListener("click",()=>{
  if (inp.value=="") {
    alert("Enter A Guess Please")
  }
  else{
    if (parseInt(inp.value)===historyarray[0]) {
      alert("Congrats You Found The Value");
      location.reload();
    }
    else if(inp.value>historyarray[0]){
      document.getElementById("right").textContent=inp.value
      alert("Your Guessing Value Is Too High")
    }
    else if(inp.value<historyarray[0]){
      document.getElementById("left").textContent=inp.value
      alert("You Are Guessing Is Too Low")
    }
    else{
      alert("Fill The Game Please")
    }
  }
})