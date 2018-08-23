import '../../components/scss/style.scss';

import '../../components/js/bootstrap.min.js';

import 'webpack-jquery-ui';

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

import '../../components/js/header';

import '../../components/js/scroll-to-top';

$(window).scroll(function() {
	var $this = $(this);
	if($this.scrollTop() > 700) {

  var currentNumber1 = $('#DynamicNumber1').text();
  $({numberValue: currentNumber1}).animate({numberValue: 46}, {
    duration: 2000,
    easing: 'linear',
    step: function() { 
      $('#DynamicNumber1').text(Math.ceil(this.numberValue)); 
    }
  });
  var currentNumber2 = $('#DynamicNumber2').text();
  $({numberValue: currentNumber2}).animate({numberValue: 29 }, {
    duration: 2000,
    easing: 'linear',
    step: function() { 
      $('#DynamicNumber2').text(Math.ceil(this.numberValue)); 
    }
  });
  var currentNumber3 = $('#DynamicNumber3').text();
  $({numberValue: currentNumber3}).animate({numberValue: 99}, {
    duration: 2000,
    easing: 'linear',
    step: function() { 
      $('#DynamicNumber3').text(Math.ceil(this.numberValue)); 
    }
  });
  var currentNumber4 = $('#DynamicNumber4').text();
    $({numberValue: currentNumber4}).animate({numberValue: 10}, {
      duration: 2000,
      easing: 'linear',
      step: function() { 
        $('#DynamicNumber4').text(Math.ceil(this.numberValue)); 
      }
    });
	}
})

// import '../../components/js/jquery.knob.min.js';

// $(".dial").knob();
//  $(document).ready(function () {
//   var hasCreatedObjects = false;
//   $(window).scroll(function () {
//     var y = $(this).scrollTop();
//     if (y >= 700) {
//       if (!hasCreatedObjects) {
//         hasCreatedObjects = true;
//         $({animatedVal: 0}).animate({animatedVal: 46}, {
//           duration: 2000,
//           easing: "swing",
//           step: function() {
//             $("#circle1").val(Math.ceil(this.animatedVal)).trigger("change");
//           }
//         });
//         $({animatedVal: 0}).animate({animatedVal: 99}, {
//           duration: 2000,
//           easing: "swing",
//           step: function() {
//             $("#circle2").val(Math.ceil(this.animatedVal)).trigger("change");
//           }
//         });
//       }
//     }
//   });
// });


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