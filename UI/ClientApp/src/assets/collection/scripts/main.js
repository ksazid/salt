$(function (e) {
  "use strict";

  e(window).load(function () {
    e(".page-loader").fadeOut("slow")
  }), e(window).on("scroll resize", function () {

    e(window).scrollTop() >= 75 && (e("body").addClass("secondNav"), e(".scroll-to-top").css("bottom", "0px")), e(window).scrollTop() < 75 && (e("body").removeClass("secondNav"), e(".scroll-to-top").css("bottom", "-50px"))
  }), e(".scroll-to-top", "footer").on("click", function () {
    return e("html, body").animate({
      scrollTop: 0
    })
  }), e(".counter").counterUp({
    delay: 10,
    time: 1e3
  }), e(".client-carousel").owlCarousel({
    loop: !0,
    items: 6,
    autoplay: !0,
    dots: !1
  }), smoothScroll.init({
    offset: 50
  }), e(".anim").waypoint({
    handler: function () {
      var o, t = this.element;
      o = e(t).data("animation"), o = "animated " + o, e(t).addClass(o)
    },
    offset: "60%"
  }), e(".open-nav-button").on("click", function () {
    var o;
    o = e(this).data("clicks"), o ? (e(".main-menu").removeClass("animated fadeIn"), e(".main-menu").css("display", "none")) : (e(".main-menu").css("display", "block"), e(".main-menu").addClass("animated fadeIn")), e(this).data("clicks", !o)
  }), e(".typed").typed({
    strings: ["ThemeForest", "WordPress", "Web Design", "Graphic Design"],
    typeSpeed: 100,
    backDelay: 1e3,
    loop: !0,
    loopCount: !1
  }), e(".chart").easyPieChart({
    barColor: "#47b475",
    scaleColor: !1,
    lineCap: "square",
    size: 150
  }), e(".pageTitleHero").revolution({
    sliderType: "hero",
    sliderLayout: "fullwidth",
    dottedOverlay: "none",
    delay: 9e3,
    responsiveLevels: [1240, 1024, 778, 480],
    visibilityLevels: [1240, 1024, 778, 480],
    gridwidth: [1170, 1024, 778, 480],
    gridheight: [400, 400, 300, 300],
    lazyType: "none",
    shadow: 0,
    spinner: "off",
    autoHeight: "off",
    disableProgressBar: "on",
    hideThumbsOnMobile: "off",
    hideSliderAtLimit: 0,
    hideCaptionAtLimit: 0,
    hideAllCaptionAtLilmit: 0,
    debugMode: !1,
    parallax: {
      type: "scroll"
    }
  }), e(".handle").on("click", function () {
    var o;
    o = e(this).data("clicks"), o ? e(".switcher").css("left", "-200px") : e(".switcher").css("left", "0px"), e(this).data("clicks", !o)
  }), e(".color").on("click", function () {
    var o;
    o = e(this).data("color-class"), e("head").append("<link rel='stylesheet' href='styles/" + o + ".css' type='text/css'>")
  }), e(".word-rotator-footer", "#footer").Morphext({
    animation: "fadeIn",
    separator: ",",
    speed: 4e3
  })
});
