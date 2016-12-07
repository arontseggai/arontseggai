
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


$('#contact').on('click',function(){
  var innerHeight           = $('.inner').outerHeight(),
      outerContainer        = $('.outer'),
      outerContainerHeight  = $('.outer').height(),
      header                = $('#nav');

  var removeOpenClass =function(){
    header.removeClass('open');
  }

  if(outerContainerHeight < 1 ){
    outerContainer.height(innerHeight * 0.5);
    outerContainer.height(0);
    outerContainer.height(innerHeight * 0.8);
    outerContainer.height(innerHeight);

    header.addClass('open');
  } else {
    outerContainer.height(0);
    setTimeout(function(){removeOpenClass();}, 200)
  }
});

