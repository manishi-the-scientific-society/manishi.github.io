let events  =  document.getElementById("event");
let event1 = document.getElementById("event1");
let pEvents = document.getElementById("p-events");
let about = document.getElementById("about");
let insights =  document.getElementById("insights");
let contact = document.getElementById("contact");
let footer = document.getElementById("footer-div");

let desktopAlert = document.getElementById("desktop-alert");


let header = document.getElementsByTagName("header");
let section = document.getElementsByTagName("section");
console.log(header)

desktopAlert.style.display = "none";

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


if(deviceWidth<700){
    header[0].style.display = "none"
    section[0].style.display = "none"
    section[1].style.display = "none"
    section[2].style.display = "none"
    section[3].style.display = "none"
    section[4].style.display = "none"
    desktopAlert.style.display = "block";
    document.write("Please open on a desktop; we are optimizing for mobile.")
}