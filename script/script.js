let events  =  document.getElementById("event");
let event1 = document.getElementById("event1");
let pEvents = document.getElementById("p-events");
let about = document.getElementById("about");
let insights =  document.getElementById("insights");
let contact = document.getElementById("contact");
let footer = document.getElementById("footer-div");
let Home = document.getElementById("Home");

const deviceWidth  = window.innerWidth;
let currentPath = window.location.pathname;
console.log(currentPath);

if(currentPath!="/"){

Home.addEventListener("click",()=>{
    window.location.href = "https://manishisociety.in";
})
}

if(currentPath=="/"){ 

events.addEventListener("click",()=>{
    event1.scrollIntoView({behavior:"smooth"})
})

pEvents.addEventListener("click",()=>{
    window.location.href = "/previousEvent.html";
})

about.addEventListener("click",()=>{
    insights.scrollIntoView({behavior:"smooth"})
})

contact.addEventListener("click",()=>{
    footer.scrollIntoView({behavior:"smooth"})
})

}
