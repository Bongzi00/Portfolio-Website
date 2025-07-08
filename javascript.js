var swiper = new Swiper(".mySwiper", {
    loop: true, /* Infinite scrolling */
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 4000, /* Auto-scroll every 4 sec */
        disableOnInteraction: false
    }
});

/* Pause autoplay on hover */
document.querySelector(".mySwiper").addEventListener("mouseenter", function() {
    swiper.autoplay.stop();
});

/* Resume autoplay when mouse leaves */
document.querySelector(".mySwiper").addEventListener("mouseleave", function() {
    swiper.autoplay.start();
});