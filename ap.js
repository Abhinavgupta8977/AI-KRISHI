let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 15,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop:true,
    autoplay:{
        delay:3000,
        disableonintraction:false,
    }

});


var swiper = new Swiper(".review-slider", {
    slidesPerView:1,
    grabCursor: true,
    centeredSlides: true,
    loop:true,
    spaceBetween: 10,
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        700:{
            slidesPerView: 2,
        },
        1050:{
            slidesPerView:3,
        },

    },
    autoplay:{
        delay:3000,
        disableonintraction:false,
    }

});
