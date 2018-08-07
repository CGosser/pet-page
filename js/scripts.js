$(document).ready(function() {
  $("#black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });

  $("#white").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });
});
