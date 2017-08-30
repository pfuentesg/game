$(document).ready(function() {
  var car= new Car();
  var wall=new Wall();
  GameStart(car,wall);

  function updateAllCars() {}
  ($(document).keydown(function(e) {
    if (e.keyCode === 40) {
      car.goDown();
      console.log("pasa");
    } else if (e.keyCode === 38) {
      car.goUp();
      console.log("pasa2");
    }
  //  car.updatePosition();
  }));

  // function checkBreak() {
  //
  //   if (car.positionX >= (board.div.x >= board.div.x + board.div.wt)) {
  //     console.log("Game over");
  //   }
  //
  // }
});
