/* document ready */
$(document).ready(function () {

});

/* window on load */
$(window).on('load', function () {
  StickyFooter();
});

/* window on resize */
$(window).on('resize', function () {
  StickyFooter();
});


/* general functions */

// Add active class on navbar
function showActivePageNavbar(){

}

/* stick footer on bottom */
function StickyFooter() {
  var windowHeight = $(window).outerHeight();
  var headerHeight = $('.header').outerHeight();
  var footerHeight = $('.footer').outerHeight();
  var wrapperHeight = windowHeight - (headerHeight + footerHeight);
  $('.page-wrapper').css('min-height', wrapperHeight + 'px');
}