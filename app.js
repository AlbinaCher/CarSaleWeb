 let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menuu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menuu.onclick = () =>{
    menuu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}

/*
let closeForm = document.querySelector('login-form-container');
document.querySelector('close-button').onclick = () => {
    closeForm.classList.remove('active');
    
}*/


let menu = document.querySelector('login-form-container')
document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}

//Hide Menu and Search Box on Scroll
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}

//Heaher
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);    
})

/*
const accordionItem = document.querySelectorAll(".navbar");
accordionItem.forEach(item =>{
    const title = item.querySelector(".accordion-title");
    const content = item.querySelector(".accordion-content");

    title.addEventListener.onclick
})
*/
var acc = document.getElementsByClassName("navbar");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var navbar = this.nextElementSibling;
    if (navbar.style.display === "block") {
      navbar.style.display = "none";
    } else {
      navbar.style.display = "block";
    }
  });
}
