$(document).ready(function() {
    $("#circuito").append("<div class='start'>");
$(".start").css({
    'width': "1500",
    'height': "600",
    'left': 1000,
    'top': 250,
    'position': "absolute"
  });
  $(".start").append("<h1>PRESS SPACEBAR TO START</h1> ");

  var game = new Game();
  ($(document).keydown(function(m){
    if(m.keyCode===32){
      $(".start").remove();
    game.newGame();
    game.interval();}
  }));

  ($(document).keydown(function(e) {
    if (e.keyCode === 40 && game.car.y < 950) {
      game.car.goDown();
      console.log("pasa");
    } else if (e.keyCode === 38 && game.car.y > 0) {
      game.car.goUp();
      console.log("pasa2");
    }
    //    car.updatePosition();
  }));

  // function checkBreak() {
  //
  //   if (car.positionX >= (board.div.x >= board.div.x + board.div.wt)) {
  //     console.log("Game over");
  //   }
  //
  // }
});
