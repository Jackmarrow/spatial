const menuBar = document.querySelector(".menu-bar");
const links = document.querySelector(".nav-links");
const navContent = document.querySelector(".nav-bar");


menuBar.addEventListener("click",() =>{
    links.classList.toggle("visible");
    navContent.classList.toggle("visible");
})

document.addEventListener("scroll", () =>{
    if(links.classList !== "menu-bar" && navContent.classList !== "nav-bar"){
        links.classList.remove("visible");
        navContent.classList.remove("visible");
    }
})