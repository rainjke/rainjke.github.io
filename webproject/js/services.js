$(document).ready(function () {
  $(".box").click(function () {
    var text = $(this).data("text");
    $(".content").text(text);
  });
});
$(document).ready(function () {
  $("#games-amount").on("input", function () {
    var value = $(this).val();
    $("#current-value").text(value);
  });
});
