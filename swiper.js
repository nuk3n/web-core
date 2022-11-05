var init = false;

function swiperCard() {
    if (window.innerWidth <= 767) {
        if (!init) {
            init = true;

        const swiper = new Swiper('.swiper', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,

            },

        });
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}
swiperCard();
window.addEventListener("resize", swiperCard);


