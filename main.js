var board = new Board();
$(document).ready(function() {
  setInterval(check, 300);

  function check() {
    var x = parseInt($(".car").css("left"));
    x += 10;
    $(".car").css("left", x + "px");
    ($(document).keydown(function(e) {
      console.log(e.keyCode);
      if (e.keyCode === 40 && board.car.positionY < 950) {
        goDown();
        console.log("pasa");
      } else if (e.keyCode === 38 && board.car.positionY > 0) {
        goUp();
        console.log("pasa2");
      }
      update();
      checkBreak();
    }));

  }

  function checkBreak() {
  
    if (board.car.positionX < board.div.x) {
      console.log("Game over");
    }

  }
});
