window.onload = ()=>{
let hamburger =  document.getElementsByClassName("sm-hamburger")[0];
let smNavigation = document.getElementsByClassName("sm-navigation")[0];
let cross = document.getElementsByClassName("cross")[0];

let isOpen = false;
smNavigation.style.display = "none"

hamburger.addEventListener("click",()=>{
    smNavigation.style.display = "block";
    isOpen =  true;
})

cross.addEventListener("click",()=>{
    smNavigation.style.display = "none";
    isOpen =  false;
})

/* adding events to buttons */

let events  =  document.getElementsByClassName("sm-events")[0];
let event1 = document.getElementById("event1");
let pEvents = document.getElementsByClassName("sm-previousEvents")[0];
let about = document.getElementsByClassName("sm-about")[0];
let insights =  document.getElementById("insights");
let contact = document.getElementsByClassName("sm-contact")[0];
let footer = document.getElementById("footer-div");
let Home = document.getElementById("Home");

let currentPath = window.location.pathname;

if(currentPath!="/index.html"){
    Home.addEventListener("click",()=>{
        window.location.href = "/"
    })
    }

if(currentPath=="/index.html"){

events.addEventListener("click",()=>{
    event1.scrollIntoView({behavior:"smooth"});
    smNavigation.style.display = "none";
})

pEvents.addEventListener("click",()=>{
    window.location.href = "/previousEvent.html";
    smNavigation.style.display = "none";
})

about.addEventListener("click",()=>{
    insights.scrollIntoView({behavior:"smooth"});
    smNavigation.style.display = "none";
})

contact.addEventListener("click",()=>{
    footer.scrollIntoView({behavior:"smooth"});
    smNavigation.style.display = "none";
})

}







}