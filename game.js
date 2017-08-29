function Game() {
  this.car = new Car(40, 50);
  this.wall = new Wall (100, this.with, this.height);

}
setInterval(this.gameProces, 200);

Game.prototype.gameProces= function (){
this.car.positionX +=5;

  this.update();
};

Game.prototype.goUp = function() {
  this.car.positionY -= 2;
};

Game.prototype.goDown = function() {
  this.car.positionY += 2;
};

Game.prototype.update = function() {
  $(".car").css("top", this.car.positionY + "px");
  $(".car").css("left", this.car.positionX + "px");
};
