$(document).ready(function () {
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > 100) {
      $(".navbar").css("background", "#323232");
      $(".logo a").css("color", "#e6e6e8");
      $(".navbar").css("padding", ".7% 5% .7% 5%");
      $("a span").css("right", "4.5%");
      $("a span").css("top", "20%");
    } else {
      $(".navbar").css("background", "transparent");
      $(".logo a").css("color", "#323232");
      $(".navbar").css("padding", "4% 10% 1% 10%");
      $("a span").css("right", "9.5%");
      $("a span").css("top", "50%");
    }
  });
});

window.onscroll = function () {
  scrollFunction();
};
