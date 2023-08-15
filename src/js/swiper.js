import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

let swiper = new Swiper('.swiper-container', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    keyboard:{
        enabled: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination:{
        el: '.swiper-pagination',
        clickable: true
    }
});


let swiper2 = new Swiper('.main-page-swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination:{
        el: '.swiper-pagination',
        clickable: true
    }
});


const pag = document.querySelectorAll('.swiper-pagination-bullet');
const text = document.querySelectorAll('.pag-cont-item__text');
const container = document.querySelectorAll('.main-page-swiper')
let indexOfPag, indexOfPagClick;


container.forEach((elem, index) => {
    elem.addEventListener('mouseover', function (){
        text.forEach((text, index) => {
            text.classList.remove('active-pag');
        });
        pag.forEach((button, index) =>{
            if(button.classList.contains('swiper-pagination-bullet-active')){
                indexOfPag = index;
                text.forEach((text, index) => {
                    if(index == indexOfPag){
                        text.classList.add('active-pag');
                    }
                });
            }
        });
    });
    pag.forEach((button, index) =>{
        button.addEventListener('click', function () {
            text.forEach((text, index) => {
                text.classList.remove('active-pag');
            });
            indexOfPagClick = index;
            text.forEach((text, index) => {
                if(index == indexOfPagClick){
                    text.classList.add('active-pag');
                }
            });
        });
    });
});
