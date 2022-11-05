//READMORE

var readMoreButton = document.querySelector('.button__readmore');
var aboutTextHeight = document.querySelector('.about__text');
var textReadMoreButton = readMoreButton.querySelector('.button__text');
var rotateArrowReadMore = readMoreButton.querySelector('.button__arrow')
readMoreButton.addEventListener('click', function () {
    aboutTextHeight.classList.toggle('about__text--full');
    rotateArrowReadMore.classList.toggle('button__arrow--rotate');
    if (textReadMoreButton.textContent === 'Читать далее') {
        textReadMoreButton.textContent = 'Скрыть';
    } else {
        textReadMoreButton.textContent = 'Читать далее';
    }

});

//BURGER

let burgerOpen = document.querySelector('.button__burger');
burgerOpen.addEventListener('click', function (){
    burgerMenu.classList.remove('wrapper__closed');
});

let burgerClose = document.querySelector('.button__close');
let burgerMenu = document.querySelector('.wrapper');
burgerClose.addEventListener('click', function (){
    burgerMenu.classList.add('wrapper__closed');
})

// SHOW/HIDE BUTTON

var showButton = document.querySelector('.button__show');
var wrapper = document.querySelector('.swiper-wrapper');
var textShowButton = showButton.querySelector('.button__text');
var rotateArrowShowButton = showButton.querySelector('.button__arrow')
showButton.addEventListener('click', function () {
    wrapper.classList.toggle('swiper-wrapper__full');
    rotateArrowShowButton.classList.toggle('button__arrow--rotate');
    if (textShowButton.textContent === 'Скрыть') {
        textShowButton.textContent = 'Показать все';
    } else {
        textShowButton.textContent = 'Скрыть';
    }
})

