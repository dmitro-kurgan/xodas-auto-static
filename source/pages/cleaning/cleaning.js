import '../../components/scss/style.scss';

// import '../../components/js/jquery-3.2.1.min.js';
// import '../../components/js/jquery-ui.min.js';

import '../../components/js/bootstrap.min.js';

import 'slick-carousel';

var $SlickBannerSmall = $('.slick-banner-small');
var $SlickCleaning = $('.slick-cleaning');
var $VideosCleaning = $("#slickVCleaning");

$SlickBannerSmall.slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	speed: 500,
	fade: true
});

$SlickCleaning.slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	// arrows: false,
	dots: true,
	fade: true
});

$(function() {
  $VideosCleaning.slick({
    speed : 600,
    // infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});

import 'sticky-kit/dist/sticky-kit';

$("#sidebar").stick_in_parent();

import '../../components/js/header';

import '../../components/js/scroll-to-top';


// if ( $('.panel-heading a').attr('aria-expanded') == 'true' ) {
// 		$('.panel-heading a').toggleClass('active');
// 	}

import 'wowjs/css/libs/animate.css';

import '../../components/js/noclick';

import wow from 'wowjs';

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();