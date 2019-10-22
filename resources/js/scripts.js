
/*
$(document).ready(function() {
	$(window).scroll(function() {

		if($(window).scrollTop() < 299) {
			$('#hero-nav').removeClass('fixed-top');
		}

		if($(window).scrollTop() > 300) {
			$('#hero-nav').addClass('fixed-top');
		}

	}
	);

*/

$(document).ready(function() {
  $(window).scroll(function () { 

    console.log($(window).scrollTop());

    if ($(window).scrollTop() > 550) {
      $('#hero-nav').addClass('fixed-top');
    }

    if ($(window).scrollTop() < 551) {
      $('#hero-nav').removeClass('fixed-top');
    }
  });
});