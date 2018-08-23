if(matchMedia) {
  var screen = window.matchMedia('(max-width: 768px)');
  screen.addListener(changes);
  changes(screen);
}

function changes(screen) {
  var menu = $('#HeaderMenu > ul > .menu-item-has-children > a:first-of-type');
  if(screen.matches) {
    menu.addClass('noclick');
    $('.noclick').click(function(e) {
      e.preventDefault();
       if($(this).parent('.menu-item-has-children').hasClass('open-menu')) {
          $('#HeaderMenu > ul > .menu-item-has-children').removeClass('open-menu');
       }
       else {
        $('#HeaderMenu > ul > .menu-item-has-children').removeClass('open-menu');
        $(this).parent('.menu-item-has-children').toggleClass('open-menu');
       }
    });
  }
  else {
    menu.removeClass('noclick');
  }
  $('#HeaderHamburger').click(function() {
    $('#HeaderMenu > ul > .menu-item-has-children').removeClass('open-menu');
  })
}