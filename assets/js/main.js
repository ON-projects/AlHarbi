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
          spaceBetween: 10
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        640: {
          slidesPerView: 5,
          spaceBetween: 10
        }
    },
      slidesPerView: 'auto',
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".custom-swiper-button-next",
        prevEl: ".custom-swiper-button-prev",
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
        480: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 5,
          spaceBetween: 20
        }
    },
      slidesPerView: 'auto',
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: 'bullets',
      },
      navigation: {
        nextEl: ".custom-swiper-button-next",
        prevEl: ".custom-swiper-button-prev",
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
    480: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 5,
      spaceBetween: 20
    }
},
  slidesPerView: 'auto',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".custom-swiper-button-next",
    prevEl: ".custom-swiper-button-prev",
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


/**
 * Newsbar
 */


  /**
   * Animation on scroll function and init
   * 
   * 
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

/**
 * Scroll to Top
 */

const scroll = document.querySelector ('.croll');
if (scroll) {
  const toggleScrollTop = function()
{
  window.scrollY > 100 ? scroll.classList.Add ('active') : scroll.classList.remove('active');
}
  window.addEventListener ('load',toggleScrollTop);
  document.addEventListener ('scroll', toggleScrollTop);
  scroll.addEventListener ('click', window.scrollTo ({
    top:0,
    behavior:'smooth'
    }));
}
