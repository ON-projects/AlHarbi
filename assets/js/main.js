document.addEventListener('DOMContentLoaded', () => {
  "use strict";
  const preloader=document.querySelector ('#preloader');
  if (preloader) {
    window.addEventListener ('load', ()=>{
preloader.remove();
    });
  }

/**
 * Scroll to Top
 */

const scrollTop = document.querySelector ('.scroll-top');
if (scrollTop) {
  const toggleScrollTop = function() {
  window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
}
  window.addEventListener ('load',toggleScrollTop);
  document.addEventListener ('scroll', toggleScrollTop);
  scrollTop.addEventListener ('click', window.scrollTo ({
    top:0,
    behavior:'smooth'
    }));
}

  /**
   * glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Carousel 
   */

    let heroCarouselIndicators = document.querySelector('#hero .carousel-indicators');
   if (heroCarouselIndicators) {
     let heroCarouselItems = document.querySelectorAll('#hero .carousel-item')
 
     heroCarouselItems .forEach((item, index) => {
       if (index === 0)
       {
         heroCarouselIndicators.innerHTML += `<li data-bs-target="#hero" data-bs-slide-to="${index}" class="active"></li>`;
       } else 
       {
         heroCarouselIndicators.innerHTML += `<li data-bs-target="#hero" data-bs-slide-to="${index}"></li>`;
       }
     });
   }


  /**
   * Swiper
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
        slidesPerView: 3,
        spaceBetween: 80
      }, 
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
    });

    var swiper = new Swiper(".reports-slider", {
      spaceBetween: 0,
      speed: 500,
      centeredSlides: true,
      loop: true,
      slideToClickedSlide: true,
      autoplay: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".custom-swiper-button-next",
        prevEl: ".custom-swiper-button-prev",
      },
    });

    var swiper = new Swiper(".report2022-slider", {
      centeredSlides: true,
      spaceBetween: 0,
      speed: 500,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 5,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 8,
          spaceBetween: 20
        }
    },
      slidesPerView: 'auto',
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      } 
    });

    var swiper = new Swiper(".report2023-slider", {
      centeredSlides: true,
      spaceBetween: 0,
      speed: 500,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 5,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 8,
          spaceBetween: 20
        }
    },
      slidesPerView: 'auto',
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: 'bullets',
      }
    });

var swiper = new Swiper(".report2024-slider", {
  centeredSlides: true,
  spaceBetween: 0,
  speed: 500,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 5,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 8,
      spaceBetween: 20
    }
  },
  slidesPerView: 'auto',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
  });

/**
   * Testimnoials
   */
    new Swiper(".testimonials-slider", {
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
        clickable: true,
      }
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

   /**
   * Copyright 
   */
document.onload = document.getElementById("copyyear").innerHTML = newDate();

});



