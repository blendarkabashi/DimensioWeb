/* document ready */
$(document).ready(function () {

    $('.tabs-header > ul > li > a').on('click',function(){
        changeTab($(this));
    });
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

function changeTab(clickedTab){
    $('.tabs-header > ul > li > a').removeClass('active');
    $('.tabs-content > .step').removeClass('active');

    classList = clickedTab.attr('class');
    var elementClass = classList.replace('active','');

    $('.tabs-header > ul > li > .'+elementClass).addClass('active');
    $('.tabs-content > .'+elementClass).addClass('active');

}

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