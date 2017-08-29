$(document).ready(function() {
var game= new Game();

  function updateAllCars() {


  }

  ($(document).keydown(function(e) {
    if (e.keyCode === 40) {
      game.goDown();
      console.log("pasa");
    } else if (e.keyCode === 38) {
      game.goUp();
      console.log("pasa2");
    }
    game.update();
  }));

  // function checkBreak() {
  //
  //   if (car.positionX >= (board.div.x >= board.div.x + board.div.wt)) {
  //     console.log("Game over");
  //   }
  //
  // }
});
