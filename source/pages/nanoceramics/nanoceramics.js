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
	arrows: false,
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

import '../../components/js/noclick';

// if ( $('.panel-heading a').attr('aria-expanded') == 'true' ) {
// 		$('.panel-heading a').toggleClass('active');
// 	}