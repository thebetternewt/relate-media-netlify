// JS Goes here - ES6 supported

// Say hello
console.log("🦊 Hello! Edit me in src/js/app.js");

// Services Section
$(function() {
  $("#brand").click(function() {
    console.log("brand button clicked!");
    $(".service-header").hide();
    $(".service-info").hide();

    animate("#brand-header, #brand-info", "fadeIn");
    $("#brand-header").show();
    $("#brand-info").show();
    return false;
  });

  $("#web").click(function() {
    console.log("web button clicked!");
    $(".service-header").hide();
    $(".service-info").hide();

    animate("#web-header, #web-info", "fadeIn");
    $("#web-header").show();
    $("#web-info").show();
    return false;
  });

  $("#photo").click(function() {
    console.log("photo button clicked!");
    $(".service-header").hide();
    $(".service-info").hide();

    animate("#photo-header, #photo-info", "fadeIn");
    $("#photo-header").show();
    $("#photo-info").show();
    return false;
  });

  // Animate
  function animate(element, animation) {
    $(element).addClass("animated " + animation);
    var wait = setTimeout(function() {
      $(element).removeClass("animated " + animation);
    }, 1000);
  }
});