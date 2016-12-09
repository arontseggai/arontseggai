
//////////////////////////// NAVBAR COLOR ON SCROLL FUNCTION

$(window).on('scroll', function(){
  var scrollPosition = window.pageYOffset,
      scrollBreakPoint = 50,
      nav = $('#nav');

  if (scrollPosition > scrollBreakPoint) {
    nav.addClass('scrolled');
  } else {
    nav.removeClass('scrolled');
  }
});

//////////////////////////// CONTACT SECTION OPENING FUNCTION

$('#contact').on('click',function(){
  var innerHeight           = $('.inner').outerHeight(),
      outerContainer        = $('.outer'),
      outerContainerHeight  = $('.outer').height(),
      header                = $('#nav'),
      removeOpenClass =function(){
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

//////////////////////////// PROJECT SHOW INFO OPENING FUNCTION

$(document).ready(function(){
  var hideInfoOnLoad = function(){
    $('#project-info').addClass('hidden');
  }
  var removeOverlayOnLoad = function(){
    $('#cover').removeClass('overlay');
  }

  $('#project-info .wrapper').addClass('shorten');

  setTimeout(function(){hideInfoOnLoad(), removeOverlayOnLoad()}, 1000)
});

$('#project-close').on('click', function(){
  $('#project-info').addClass('hidden');
  $('#cover').removeClass('overlay');
});

$('#project-show img').on('click', function(){
$('#project-info .wrapper').removeClass('shorten');
  $('#project-info').removeClass('hidden');
  $('#cover').addClass('overlay');
});














