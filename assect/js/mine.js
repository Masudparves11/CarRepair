

AOS.init();

// =====header swiper star ====

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 2000,
  });
  // =====header swiper end ====

// ====all button hover color star ========

  document.querySelector('.button').onmousemove = function (e) {

    var x = e.pageX - e.target.offsetLeft;
    var y = e.pageY - e.target.offsetTop;
  
    e.target.style.setProperty('--x', x + 'px');
    e.target.style.setProperty('--y', y + 'px');
  };

  $( ".button_su_inner" ).mouseenter(function(e) {
    var parentOffset = $(this).offset(); 
   
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
    $(this).prev(".su_button_circle").removeClass("desplode-circle");
    $(this).prev(".su_button_circle").addClass("explode-circle");
 
 });
 
 $( ".button_su_inner" ).mouseleave(function(e) {
 
      var parentOffset = $(this).offset(); 
 
      var relX = e.pageX - parentOffset.left;
      var relY = e.pageY - parentOffset.top;
      $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
      $(this).prev(".su_button_circle").removeClass("explode-circle");
      $(this).prev(".su_button_circle").addClass("desplode-circle");
 
 });
//  ====all button hover color end ========

//------ Skill Bar ------//

function animateBars(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const progressBar = entry.target;
			const skillLevel = progressBar.getAttribute('data-skill');
			progressBar.style.width = skillLevel;
			progressBar.classList.add('animated');
			observer.unobserve(progressBar);
		}
	});
}


const observer = new IntersectionObserver(animateBars, {
	threshold: 0.1
});


const progressBars = document.querySelectorAll('.progress');
progressBars.forEach(bar => {
	observer.observe(bar);
});

//------ Skill Bar end------//
// ====Testimonial swiper star =====

var swiper = new Swiper(".mySwiperone1", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// ====Testimonial swiper end =====
/* ======Our Clients stra ====== */
var swiper = new Swiper(".mySwiper2", {
  
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

/* ======Our Clients end ====== */