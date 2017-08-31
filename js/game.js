function Game() {
  var fps = 30;
  var carSpeedInPxSec = 100 / fps;
  this.wallSpeed = 5;
  this.car = new Car(40, 500, carSpeedInPxSec);
  this.walls = [];
  setInterval(this.updateGame.bind(this), 1000 / fps);
}

Game.prototype.updateGame = function() {
  this.car.update();
  this.checkCollision();
  this.walls.forEach(function(wall) {
    wall.update();
    if (wall.x <= 0) {
      //  removeWall();
    }

  }, this);

  console.log();
};
Game.prototype.checkCollision = function() {
  var check = $(".car").collision(".wall");
  if (check.length != 0) {
    console.log('value is Array!');
  } else {
    console.log('Not an array');
  }
};
Game.prototype.removeWall = function() {
  this.walls.splice(0, 1);
};
Game.prototype.pushWall = function() {
  this.walls.push(new Wall(500, 200, 300, this.wallSpeed));
};
// pullWall=function(){
//   this.walls.pull(new Wall(500, 200, 300, wallSpeed));
// };
 Game.prototype.newGame=function(){

   this.walls.push(new Wall(500, 200, 300, this.wallSpeed ));
   this.walls.push(new Wall(800, 200, 500, this.wallSpeed , 1));
   this.walls.push(new Wall(1100, 200, 400, this.wallSpeed));
   this.walls.push(new Wall(1400, 200, 500, this.wallSpeed, 1));
   this.walls.push(new Wall(1700, 200, 300, this.wallSpeed));
   this.walls.push(new Wall(2000, 200, 300, this.wallSpeed, 1));
   this.walls.push(new Wall(2300, 200, 300, this.wallSpeed));
   this.walls.push(new Wall(2600, 200, 300, this.wallSpeed, 1));

};

//aqui iran todos los generadores dinamicos de divs, los vambios de velocidad, anchura,
// altura y esas mierdas
