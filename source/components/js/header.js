$(function() {
	var h_hght = $('.header').outerHeight();
	var h_nav = $('.navbar').outerHeight();
	var top;
  	$(window).scroll(function(){
  		top = $(this).scrollTop();
  		if((top) > 0) {
        $('.header').addClass('fixed');
  		} 
  		else {
  			$('.header').removeClass('fixed');
  		}
      if(screen.width < 768) {
        $('.header').removeClass('fixed');
      }
  	});	
});


var $HeaderForm = document.getElementById('HeaderForm');
$('#HeaderSearchClick').click(function() {
  $('#HeaderSearch').toggleClass('open');
  if ($('#HeaderSearch').hasClass('open')) {
    $('#HeaderSearchClick').removeClass('glyphicon-search');
    $('#HeaderSearchClick').addClass('glyphicon-remove');
    $HeaderForm.style.opacity = "1";
    $HeaderForm.style.zIndex = "1";
  }
  else {
    $('#HeaderSearchClick').removeClass('glyphicon-remove');
    $('#HeaderSearchClick').addClass('glyphicon-search');
     $HeaderForm.style.opacity = "0";
      $HeaderForm.style.zIndex = "-1";
  }
});

var $HeaderMenu = document.getElementById('HeaderMenu');
$('#HeaderHamburger').click(function() {
  $(this).toggleClass('open');
  if ($(this).hasClass('open')) {
    $HeaderMenu.style.left = "0px";
  }
  else {
    $HeaderMenu.style.left = "-280px";
    if(screen.width < 768) {
      $HeaderMenu.style.left = "-100%";
    }
  }
});