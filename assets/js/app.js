$(window).on("load", function () {
  gridAdjust(".info-grid .info-card");
  gridAdjust(".info-grid .info-card-box");
  gridAdjust(".ul-nav .info-nav-card");

  // Apply only if screen width is 768px or above
  if ($(window).width() >= 768) {
    gridAdjust(".info-grid .info-box-wrapper-card");
  }
});

$(window).resize(function () {
  gridAdjust(".info-grid .info-card");
  gridAdjust(".info-grid .info-card-box");
  gridAdjust(".ul-nav .info-nav-card");

  // Apply only if screen width is 768px or above
  if ($(window).width() >= 768) {
    gridAdjust(".info-grid .info-box-wrapper-card");
  }
});

$(document).ready(function () {
  gridAdjust(".info-grid .info-card");
  gridAdjust(".info-grid .info-card-box");
  gridAdjust(".ul-nav .info-nav-card");

  // Apply only if screen width is 768px or above
  if ($(window).width() >= 768) {
    gridAdjust(".info-grid .info-box-wrapper-card");
  }


  mobileSlider(".nav-pills-mobile-slider", 1, 1, false, true, false, 767);

const messages = [
    "Translation Platform",
    "منصة الترجمة المؤسسية"
];

let msgIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;
let deletingSpeed = 50;
let pauseAfterType = 1200;

function typeEffect() {
    const currentText = messages[msgIndex];
    
    if (!isDeleting) {
        // Typing
        charIndex++;
        $('#slide-text').text(currentText.substring(0, charIndex));

        if (charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, pauseAfterType);
        }
    } else {
        // Deleting
        charIndex--;
        $('#slide-text').text(currentText.substring(0, charIndex));

        if (charIndex === 0) {
            isDeleting = false;
            msgIndex = (msgIndex + 1) % messages.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

typeEffect();

});

var mobileSlider = ($slidername, $slidesToShow, $slidesToScroll, $dots, $arrows, $autoplay, $breakpoint) => {

    var slider = $($slidername);
      var settings = {
        mobileFirst: true,
        slidesToShow: $slidesToShow,
        slidesToScroll: $slidesToScroll,
        dots: $dots,
        arrows: $arrows,
        autoplay: $autoplay,
        autoplaySpeed: 4000,
        infinite: true,
        responsive: [
          {
            breakpoint: $breakpoint,
            settings: "unslick"
          }
        ]
      };
  
      slider.slick(settings);
      slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
          slider.find(".slick-slide").removeClass('works');
          slider.find('.slick-current').addClass('works');
          slider.find('.slick-current').toggleClass("hovered");
       });
  
      $(window).on("resize", function () {
        if ($(window).width() > $breakpoint) {
  
          return;
        }
        if (!slider.hasClass("slick-initialized")) {
          return slider.slick(settings);
        }
      });
  }

function gridAdjust(targertSteing) {
  var targertHight = $(targertSteing);
  targertHight.css("height", "auto");
  var heights = [];
  targertHight.each(function () {
    var elem = $(this);
    var height = elem.outerHeight();
    heights.push(height);
  });
  heights = heights.sort(function (a, b) {
    return b - a;
  });
  var tallest = heights[0];
  targertHight.css("height", tallest + "px");
}

$(".hero-banner-slider").slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1800,
  fade: true,
  speed: 1000, // Increase transition duration for smoother effect
  pauseOnHover: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// $(window).on("scroll", function () {
//   var e = $(window).scrollTop();

//   if (e > 0) {
//     $("#mainHeader").addClass("bg");
//   } else {
//     $("#mainHeader").removeClass("bg");
//   }
// });

(function () {
  var youtube = document.querySelectorAll(".youtube");

  for (var i = 0; i < youtube.length; i++) {
    var source = "https://i.ytimg.com/vi/HdAZGNlGqq4/maxresdefault.jpg";
    var image = new Image();
    image.src = source;
    image.addEventListener(
      "load",
      (function () {
        youtube[i].appendChild(image);
      })(i),
    );

    youtube[i].addEventListener("click", function () {
      var iframe = document.createElement("iframe");

      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute(
        "src",
        "https://www.youtube.com/embed/" +
          this.dataset.embed +
          "?rel=0&showinfo=0&autoplay=1",
      );

      this.innerHTML = "";
      this.appendChild(iframe);
    });
  }
})();


  // Slider 2: .nav-pills-mobile-slider
const initPillsSlickSliderEventsOnly = (selector = ".nav-pills-mobile-slider") => {
  $(selector).on("afterChange", function (event, slick, currentSlide) {
    const $currentSlide = $(slick.$slides[currentSlide]);
    const $tabTrigger = $currentSlide.find('a[data-bs-toggle="pill"]');

    if ($tabTrigger.length) {
      const $sliderScope = $(this); // restrict scope to current slider
      const target = $tabTrigger.attr("data-bs-target");

      // Deactivate pills in this slider only
      $sliderScope.find('a[data-bs-toggle="pill"]').removeClass("active").attr("aria-selected", "false");

      $tabTrigger.addClass("active").attr("aria-selected", "true");

      if (target) {
        const $targetPane = $(target);
        const $tabContainer = $targetPane.closest(".tab-content");

        $tabContainer.find('.tab-pane').removeClass("active show");
        $targetPane.addClass("active show");
      }
    }
  });
};


// Call both when DOM is ready
$(document).ready(function () {
  initPillsSlickSliderEventsOnly();     // Handles only afterChange for nav-pills-mobile-slider
});
