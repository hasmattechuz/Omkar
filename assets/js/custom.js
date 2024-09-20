/***************************************************
==================== JS INDEX ======================
****************************************************
01. Menu responsive
****************************************************
02. Home slider
****************************************************
03. gsap scroll
****************************************************
04. logo slider
****************************************************
05. animate product slider
****************************************************/

// 01. Menu responsive
function openNav() {
  $("#mySidenav").addClass("menu_width");
  $("#nav-res").addClass("opacityon");
  $(".cd-shadow-layer").addClass("displayblock");
  $(".wrapper").addClass("position-fixed-custom");
  $("body").addClass("overflow-fixed");
}

function closeNav() {
  $("#mySidenav").removeClass("menu_width");
  $("#nav-res").removeClass("opacityon");
  $(".cd-shadow-layer").removeClass("displayblock");
  $(".wrapper").removeClass("position-fixed-custom");
  $("body").removeClass("overflow-fixed");
}

$(document).ready(function () {
  $(".cd-shadow-layer").click(function () {
    closeNav();
  });

  $(window).scroll(function () {
    var sticky = $(".header-div"),
      scroll = $(window).scrollTop();

    if (scroll >= 190) {
      sticky.addClass("header-sticky slideInDown animated");
    } else {
      sticky.removeClass("header-sticky slideInDown animated");
    }
  });
});

jQuery(window).on("load resize", function () {
  var header_height = jQuery(".header-div").outerHeight();
  var footer_height = jQuery("footer").outerHeight();
  var window_height = jQuery(window).outerHeight();
  var tot_height = window_height - footer_height;
  jQuery('.main-middle-area').css('padding-top', header_height);
  jQuery(".main-middle-area").css("min-height", tot_height);
});

/* End of Count JS */

// 02. Home slider
const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', { 	
	direction: 'vertical',
	observer: true, 
	slidesPerView: 3, 
	spaceBetween: 38,
  loop: false,	
	freeMode: true, 
	breakpoints: { 
		0: { 
			direction: 'horizontal', 
		},
		768: { 
			direction: 'vertical', 
		}
	}
});
const sliderImages = new Swiper('.slider__contents .swiper-container', { 
	
	direction: 'vertical', 
	slidesPerView: 1, 
	spaceBetween: 0, 
	mousewheel: true,
	observer: false, 
	loop: false,	
	pagination: {
      el: '.slider__pagination',
      clickable: true,
      dynamicBullets: true,
    },
	grabCursor: true, 
	thumbs: { 
		swiper: sliderThumbs 
	},
	breakpoints: {
		0: {
			direction: 'horizontal', 
		},
		768: { 
			direction: 'vertical', 
		}
	}
});

// 03. gsap scroll
gsap.registerPlugin(ScrollTrigger, ScrollSmoother,ScrollToPlugin);
ScrollTrigger.normalizeScroll(true)

let smoother = ScrollSmoother.create({
    wrapper: "#wrapper",
    content: "#content-wrapper",
    smooth:2,
    effects: true,
    normalizeScroll: true
});

// 04. logo slider
var mySwiper = new Swiper('.logo-slider', {
  loop: true,
  speed: 1000,
  slidesPerView: 'auto',
  spaceBetween: 48,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    414: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    991: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  }
})

// 05. animate product slider
console.clear();

gsap.registerPlugin(ScrollTrigger);

const tabs = gsap.utils.toArray(".left-content li");
const rightElements = gsap.utils.toArray(".right-content .right-element");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".products-sticky",
    start: 'top -7%',
    end: "bottom -100%",
    pin: true,
    scrub: true,
    markers: true,
    
  }
});

tabs.forEach((tab, i) => {
  if (tabs[i + 1]) {
    tl.to(tab, { css: { className: "" } }, "+=500")
      .to(tabs[i + 1], { css: { className: "selected" } }, "<")
      .to(rightElements, { yPercent: -(100 * (i + 1)), ease: "none" }, "<");
  }
});
tl.to({}, {}, "+=500");



