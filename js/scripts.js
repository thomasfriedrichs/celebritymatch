$(document).ready(function () {
  $("#formOne").submit(function (event) {
    const sport = parseInt($("#sport").val());
    const movie = parseInt($("#movie").val());
    if (sport == 1) {
      if (movie == 1) {
        $("#result").text("Cristiano Rinaldo");
      } else if (movie == 2) {
        $("#result").text("Zidane Zidane");
      } else if (movie == 3) {
        $("#result").text("Leo Messi");
      } else {
        $("#result").text("Nemar");
      }
    } else if (sport == 2) {
      if (movie == 1) {
        $("#result").text("Tom Brady");
      } else if (movie == 2) {
        $("#result").text("Joe Montana");
      } else if (movie == 3) {
        $("#result").text("Payton Manning");
      } else {
        $("#result").text("Drew Brees");
      }
    } else if (sport == 3) {
      if (movie == 1) { 
        $("#result").text("Ichiro Suzuki");
      } else if (movie == 2) {
        $("#result").text("Babe Ruth");
      } else if (movie == 3) {
        $("#result").text("Ken Griffy Jr");
      } else {
        $("#result").text("Barry Bonds");
      }
    } else {
      if (movie == 1) {
        $("#result").text("Lebron James");
      } else if (movie == 2) {
        $("#result").text("Steph Curry");
      } else if (movie == 3) {
        $("#result").text("Kevin Durant");
      } else {
        $("#result").text("Michael Jordan");
      }
    }
    $(".hide").show();
    event.preventDefault();
  });
});
