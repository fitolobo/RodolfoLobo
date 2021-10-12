$(document).ready(function () {
  $("a").click(function (event) {
    event.preventDefault();

    var roll = this.hash;

    $("html").animate(
      {
      scrollTop: $(roll).offset().top - 86,
    },
    800
    );
  });
});
