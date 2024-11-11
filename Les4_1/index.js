$(document).ready(function () {
  let isShown = true;
  $(".panel").click(function () {
    if (isShown) {
      $(".notification").hide();
    } else {
      $(".notification").show();
    }
    isShown = !isShown;
  });
});
