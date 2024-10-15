document.addEventListener('DOMContentLoaded', () => {
  "use strict";
  const preloader=document.querySelector ('#preloader');
  if (preloader) {
    window.addEventListener ('load', ()=>{
preloader.remove();
    });
  }

  /**
   * glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

 

  /**
   * Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 5,
        spaceBetween: 80
      }
    }
    });


/**
   * Testimnoials
   */
    new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
      });

  
      new Swiper('.reports-slider', {
        speed: 400,
        loop: true,
        autoplay:false,
        slidesPerView: 'auto'
        });
    
  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  
  window.addEventListener('load', () => {
    aos_init();
  });

  /**
   * Counter 
   */
  
  new PureCounter();

});