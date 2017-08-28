var board= new Board();
$(document).ready(function() {



  setInterval(check, 300);

  function check() {
    // var x = parseInt($(".car").css("left"));
    // x += 10;
    // $(".car").css("left", x + "px");
    ($(document).keydown(function(e) {
      console.log(e.keyCode);
      if (e.keyCode === 40 && board.car.positionY > 0) {
        goDown();
        console.log("pasa");
      } else if (e.keyCode === 38) {
        goUp();
        console.log("pasa2");
      }
      update();
    }));

  }

  function goUp() {
    var now = parseInt($(".car").css("top"));
    now -= 2;
    $(".car").css("top", now + "px");
    board.car.positionY -= 2;

  }

  function goDown() {
    var now = parseInt($(".car").css("top"));
    now += 2;
    $(".car").css("top", now + "px");
    board.car.positionY += 2;

  }

  // function update() {
  //   $(".car").css("top", board.car.positionY + "px");
  // }
});
