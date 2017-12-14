$(document).ready(function() {


  $(".scroll-to-bottom").click(function() {
    $("html, body").animate({
      "scrollTop": $("#footer").offset().top
    }, 500)
  })

  $(".scroll-to-top").click(function() {
    $("html, body").animate({
      "scrollTop": $("#header-section").offset().top
    }, 500)
  })


  $(".scroll-to-about").click(function() {
    $("html, body").animate({
      "scrollTop": $("#plans-section").offset().top
    }, 500)
  })

  $(".scroll-to-elements").click(function() {
    $("html, body").animate({
      "scrollTop": $("#tabs-section").offset().top
    }, 500)
  })

  $(".scroll-to-roadmap").click(function() {
    $("html, body").animate({
      "scrollTop": $("#roadmap").offset().top
    }, 500)
  })

  $(".scroll-to-team").click(function() {
    $("html, body").animate({
      "scrollTop": $("#team").offset().top
    }, 500)
  })





  // show first content by default
  $("#tabs-section .tabs .tab:first-child").addClass("active")

  // click function
  $("#tabs-section .tabs .tab").click(function() {

    var index = $("#tabs-section .tabs .tab").index(this)

    $("#tabs-section .tabs .tab").removeClass("active")
    $(this).addClass("active")
    $("#tabs-section .details .detail").removeClass("active")
    $("#tabs-section .details .detail").eq(index).addClass("active")

    var activeTab = $(this).find("a").attr("href")
    $(activeTab).fadeIn()
    return false

  })





});
(function() {

  

  // define variables
  var items = document.querySelectorAll(".timeline li")

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view")
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc)
  window.addEventListener("resize", callbackFunc)
  window.addEventListener("scroll", callbackFunc)

})()
