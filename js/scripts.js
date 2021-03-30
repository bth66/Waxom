//!••••••• Слайдер ••••••••••
new Swiper('.slider', {
    //*Стрелки навгиации
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    loop: true,
    //*Автопрокрутка
    autoplay: {
        delay: 5000,
    },
    //*Буллеты(точки)
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
//!••••••• Слайдер ••••••••••
//!••••••• Слайдер 2 ••••••••••
new Swiper('.recent-posts__slider-container', {
    //*Стрелки навгиации
    navigation: {
        nextEl: '.recent-posts__btn-next',
        prevEl: '.recent-posts__btn-prev'
    },
    loop: false,
    //*Автопрокрутка
    // autoplay: {
    //     delay: 5000,
    // },
    slidesPerView: 3,
    spaceBetween: 30,
    slideToClickedSlide: false,
    breakpoints: {
        1: {
            slidesPerView: 1,
        },
        479: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 3,
        },
    },

});
//!••••••• Слайдер 2 ••••••••••
//!••••••• Слайдер 3 ••••••••••
new Swiper('.item-slider__container', {
    //*Стрелки навгиации

    loop: true,
    //*Автопрокрутка
    autoplay: {
        delay: 5000,
    },
    slidesPerView: 1,
    pagination: {
        el: '.item-slider__pagination',
        clickable: true,
    },
});
//!••••••• Слайдер 3 ••••••••••



//!••••••• Меню Бургер ••••••••••
const iconMenu = document.querySelector('.menu-header__icon'); //*Переменная для иконки меню бургера
if (iconMenu) {
    const menuBody = document.querySelector('.menu-header__menu'); //*Переменная для списка меню
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock'); //?Класс для body, чтобы убрать прокрутку
        iconMenu.classList.toggle('_active'); //?Класс для иконки меню
        menuBody.classList.toggle('_active'); //?Класс для списка меню
    });
}
//!••••••• Меню Бургер ••••••••••