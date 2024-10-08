<<<<<<< HEAD
let menu = document.querySelector("#menu-btn")
let navbar = document.querySelector(".navbar")


menu.onclick = () =>{
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("active")
}


window.onscroll = () =>{
    menu.classList.remove("fa-times")
    navbar.classList.remove("active")
}

function closeSidebar() {
    document.getElementById('sidebar').style.left = '-250px';
=======
let menu = document.querySelector("#menu-btn")
let navbar = document.querySelector(".navbar")


menu.onclick = () =>{
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("active")
}


window.onscroll = () =>{
    menu.classList.remove("fa-times")
    navbar.classList.remove("active")
}

function closeSidebar() {
    document.getElementById('sidebar').style.left = '-250px';
>>>>>>> 16381b12e1c81e1475f20c4e1ea320e48d02f81b
}