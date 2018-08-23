import '../../components/scss/style.scss';

import '../../components/js/bootstrap.min.js';

require('webpack-jquery-ui');

import fancybox from '../../components/js/jquery.fancybox.min.js';

import 'slick-carousel';

$(function() {
  var $Services = $(".slick-services");
  var slider;
  
  $Services.slick({
    speed : 300,
    slidesToShow: 4,
    responsive: [
    	{
    		breakpoint: 992,
    		settings:{
    			slidesToShow: 3
    		}	
    	},
    	{
    		breakpoint: 768,
    		settings: {
    			slidesToShow: 1
    		}
    	}
    ]
  });
  
   slider = $( ".sliderui" ).slider({
    min : 0,
    max : 5,
    slide: function(event, ui) {
      var slick = $Services.slick( "getSlick" );
      var goTo = ui.value * (slick.slideCount-1) / 5;
      // console.log(slick);
      $Services.slick( "goTo", goTo );
    }
  });
});

$(function() {
  var $Videos = $("#slickV");
  var slider;
  
  $Videos.slick({
    speed : 600,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
   slider = $( ".sliderui-2" ).slider({
    min : 0,
    max : 5,
    slide: function(event, ui) {
      var slick = $Videos.slick( "getSlick" );
      var goTo = ui.value * (slick.slideCount-1) / 3;
      $Videos.slick( "goTo", goTo );
    }
  });
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {    
  	var target = $(this).attr('href');  
  	  
    $(target).css('left','-'+$(window).width()+'px');   
    var left = $(target).offset().left;
    $(target).css({left:left}).animate({"left":"0px"}, "10");
})

import '../../components/js/header';

import '../../components/js/scroll-to-top';

$(function () {
  if(screen.height > 900) {
      var lastScrollTop = $(window).scrollTop(),
          delta = 5,
          eleH = $('.banner').outerHeight(),
          isScolling = false ;
      $(window).scroll(function () {
          if(isScolling)
              return;
              
          var nowScrollTop = $(this).scrollTop();
          if (Math.abs(lastScrollTop - nowScrollTop) >= delta) {
              if (nowScrollTop <= eleH && nowScrollTop >= lastScrollTop) {
                  isScolling = true;
                  $('html,body').animate({
                      scrollTop: $('body section:first-of-type').offset().top
                  }, 600, function() {
                      isScolling = false;
                      lastScrollTop = $(window).scrollTop();
                  });
                  console.log('Scroll down');
              } else if (nowScrollTop <= eleH && nowScrollTop < lastScrollTop) {
                  isScolling = true;
                  $('html,body').animate({
                      scrollTop: 0
                  }, 600, function() {
                      isScolling = false;
                      lastScrollTop = $(window).scrollTop();
                  });
                  console.log('Scroll up');
              }
              lastScrollTop = nowScrollTop;
          }
      });
  }
});

import '../../components/js/noclick';

import wow from 'wowjs';

var wow = new WOW(
  {
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       0,
    mobile:       true,
    live:         true,
    callback:     function(box) {

    },
    scrollContainer: null
  }
);