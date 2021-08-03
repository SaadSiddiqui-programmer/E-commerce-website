// Navigation

let navOpen = document.querySelector(".nav_hamburger");
let navClose = document.querySelector(".close_toggle");
let menu = document.querySelector(".nav_menu");
let navContainer = document.querySelector(".nav_menu");


navOpen.addEventListener('click', ()=>{
    menu.classList.add('open');
    document.body.classList.add('active');
    navContainer.style.left = '0';
    navContainer.style.width = '30rem';
})

navClose.addEventListener('click', ()=>{
    menu.classList.remove('open');
    document.body.classList.remove('active');
    navContainer.style.left = '-30rem';
    navContainer.style.width = '0';
})