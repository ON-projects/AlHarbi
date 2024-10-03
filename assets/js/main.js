document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  new swiper(".clients-slider", {
    speed: 500,
    loop: true,
    autoplay: { delay: 5000, disableOnInteraction: false },
    slidePreview: "auto",
    breakpoints: {
      320: {
        slidePreview: 2,
        SpaceBetween: 40,
      },
      480: {
        slidePreview: 3,
        SpaceBetween: 60,
      },
      640: {
        slidePreview: 4,
        SpaceBetween: 80,
      },
      992: {
        slidePreview: 6,
        SpaceBetween: 120,
      },
    },
  });
  function aos_init() {
    AOS.init({
      duration: 1100,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });
});
