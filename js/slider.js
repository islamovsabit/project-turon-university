const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    // centeredSlides: true,
    loop: true,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
});



var swiperBotton = new Swiper(".mySwiperBt", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
      el: ".swiper-pagination-bt",
      clickable: true,
  },
});