function Car(x, y) {
  this.positionX = $(".div").css("left");
  this.positionY = $(".div").css("top");
}

function goUp() {
  board.car.positionY -= 2;
}

function goDown() {
  board.car.positionY += 2;
}

function update() {
  $(".car").css("top", board.car.positionY + "px");
}
