$(window).scroll(function() {
  if ($(this).scrollTop() > 2){  
    $('.navbar-header').addClass("sticky");
    $('#logo').addClass("sticky");
    $('.navbar-nav').addClass("sticky");
  }
  else {
    $('.navbar-header').removeClass("sticky");
    $('#logo').removeClass("sticky");
    $('.navbar-nav').removeClass("sticky");
  }
});