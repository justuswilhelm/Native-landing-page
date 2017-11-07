$(document).ready(function() {


  $(".scroll-to-bottom").click(function() {
    $('html, body').animate({
      scrollTop: $("#footer").offset().top
    }, 500);
  });

  $(".scroll-to-top").click(function() {
    $('html, body').animate({
      scrollTop: $("#header-section").offset().top
    }, 500);
  });


  $(".scroll-to-about").click(function() {
    $('html, body').animate({
      scrollTop: $("#plans-section").offset().top
    }, 500);
  });

  $(".scroll-to-elements").click(function() {
    $('html, body').animate({
      scrollTop: $("#tabs-section").offset().top
    }, 500);
  });

  $(".scroll-to-roadmap").click(function() {
    $('html, body').animate({
      scrollTop: $("#roadmap").offset().top
    }, 500);
  });

  $(".scroll-to-team").click(function() {
    $('html, body').animate({
      scrollTop: $("#team").offset().top
    }, 500);
  });





  // show first content by default
  $('#tabs-section .tabs .tab:first-child').addClass('active');

  // click function
  $('#tabs-section .tabs .tab').click(function() {

    var index = $('#tabs-section .tabs .tab').index(this);

    $('#tabs-section .tabs .tab').removeClass('active');
    $(this).addClass('active');
    $('#tabs-section .details .detail').removeClass('active');
    $('#tabs-section .details .detail').eq(index).addClass("active");

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;

  });





});
