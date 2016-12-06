
$(window).on('scroll', function(){
  var scrollPosition = window.pageYOffset;
  var scrollBreakPoint = 90;
  var nav = $('#nav');

  if (scrollPosition > scrollBreakPoint) {
    nav.addClass('scrolled');
  } else {
    nav.removeClass('scrolled');
  }
});
