$(document).ready(function () {
  // Toggle animations based on checkbox state
  $("#messageState").on("change", function () {
    $(".message").removeClass("openNor closeNor");

    if ($(this).is(":checked")) {
      $(".message").removeClass("closed no-anim").addClass("openNor");
      $(".heart").removeClass("closeHer openedHer").addClass("openHer");
      $(".container").stop().animate({ backgroundColor: "#f48fb1" }, 2000);
      console.log("Opening message");
    } else {
      $(".message").removeClass("no-anim").addClass("closeNor");
      $(".heart").removeClass("openHer openedHer").addClass("closeHer");
      $(".container").stop().animate({ backgroundColor: "#fce4ec" }, 2000);
      console.log("Closing message");
    }
  });

  // Event listener for the end of animations on the message div
  $(".message").on("animationend", function () {
    if ($(this).hasClass("closeNor")) $(this).addClass("closed");
    $(this).removeClass("openNor closeNor").addClass("no-anim");
    console.log("Message animation ended");
  });

  // Event listener for the end of animations on the heart div
  $(".heart").on("animationend", function () {
    if (!$(this).hasClass("closeHer")) {
      $(this).addClass("openedHer beating");
    } else {
      $(this).addClass("no-anim").removeClass("beating");
    }
    $(this).removeClass("openHer closeHer");
    console.log("Heart animation ended");
  });
});
