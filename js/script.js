$(function(){
  var $thumbs = $('.animate1');
  var $nav = $('.navbar-fixed-top');
  var winheight = $(window).height();
  var fullheight = $(document).height();

  $(window).scroll(function(){
    animate_elems();
  });

	$('.navbar-toggle').click(function(){
		$(this).toggleClass('open');
	});

  function animate_elems() {
    // calculate distance from top of window
    wintop = $(window).scrollTop();

    // toggle navbar effect
    if(wintop >= 120) {
      $nav.addClass('navbar-effect');
    } else {
      $nav.removeClass('navbar-effect');
    }
  } // end animate_elems()
  $(document).ready(function(){
    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 200,
      gutter:35
    });
  });
});


new WOW().init();
