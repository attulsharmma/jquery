/* --------------------------------
      Smooth Scroll with offset
=================================*/
$(function () {
  $('a[href^="#"]').on('click', function (e) {
    // e.preventDefault();
    var target = this.hash,
      $target = $(target);
     
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 100
    }, 900, 'swing', function () {
      window.location.hash = target;
    
    });
  });
});


// here 100 is the amount of padding or margin or height of the navbar
// here 900 is time duration for animating
// var target = this.hash is used to get the hash value or id value of the anchor tag
