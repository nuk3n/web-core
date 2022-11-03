let burgerOpen = document.querySelector('.button__burger');
burgerOpen.addEventListener('click', function (){
    burgerMenu.classList.remove('wrapper__closed');
});

let burgerClose = document.querySelector('.button__close');
let burgerMenu = document.querySelector('.wrapper');
burgerClose.addEventListener('click', function (){
    burgerMenu.classList.add('wrapper__closed');
})
