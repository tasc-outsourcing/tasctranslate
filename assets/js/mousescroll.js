// Slick Slider
jQuery(".center-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  centerPadding: 0,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// Track current slide index
let stopScroll = false;

jQuery(".center-slider").on("afterChange", function(event, slick, currentSlide){
    // If data-slick-index = 4 is active
    stopScroll = (currentSlide === 4);
});


// Slick Scroll
jQuery(function () {
  const slider = jQuery(".center-slider");

  slider.on("wheel", function (e) {

    // Stop wheel scroll on slide index 4
    if (stopScroll) return;

    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      slider.slick("slickPrev");
    } else {
      slider.slick("slickNext");
    }
  });
});



// Target section that triggers reset
const targetSection = document.querySelector(".gallery");

// Create observer
let observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Reset slider to index 0
        jQuery(".center-slider").slick("slickGoTo", 0);
      }
    });
  },
  {
    threshold: 0.3 // Trigger when 30% of section is visible
  }
);

// Start observing
observer.observe(targetSection);
