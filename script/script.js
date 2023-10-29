let events  =  document.getElementById("event");
let event1 = document.getElementById("event1");
let pEvents = document.getElementById("p-events");
let about = document.getElementById("about");
let insights =  document.getElementById("insights");
let contact = document.getElementById("contact");
let footer = document.getElementById("footer-div");

const deviceWidth  = window.innerWidth;

events.addEventListener("click",()=>{
    event1.scrollIntoView({behavior:"smooth"})
})

pEvents.addEventListener("click",()=>{
    alert("We will upload the details soon...")
})

about.addEventListener("click",()=>{
    insights.scrollIntoView({behavior:"smooth"})
})

contact.addEventListener("click",()=>{
    footer.scrollIntoView({behavior:"smooth"})
})


