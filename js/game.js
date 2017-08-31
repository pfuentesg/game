function Game() {
  var fps = 30;
  var carSpeedInPxSec = 100 / fps;
  this.wallSpeed = 5;
  this.car = new Car(40, 500, carSpeedInPxSec);
  this.wall = [];
  setInterval(this.update.bind(this), 1000 / fps);
}

Game.prototype.update = function() {
  this.car.update();
  //checkCollision();
  this.pushWall();
  this.wall.forEach(function(e) {
    console.log("entro");
    e.update();
    this.pushWall();
    if (e.x <= 0) {
      //  removeWall();
    }
  }, this);
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
  this.wall.splice(0, 1);
};
Game.prototype.pushWall = function() {
  this.wall.push(new Wall(500, 200, 300, this.wallSpeed));
};
// pullWall=function(){
//   this.wall.pull(new Wall(500, 200, 300, wallSpeed));
// };
//     new Wall(500, 200, 300, wallSpeed),
// new Wall(800, 200, 500, wallSpeed, 1),
// new Wall(1100, 200, 400, wallSpeed),
// new Wall(1400, 200, 500, wallSpeed, 1),
// new Wall(1700, 200, 300, wallSpeed),
// new Wall(2000, 200, 300, wallSpeed, 1),
// new Wall(2300, 200, 300, wallSpeed),
// new Wall(2600, 200, 300, wallSpeed, 1)

//aqui iran todos los generadores dinamicos de divs, los vambios de velocidad, anchura,
// altura y esas mierdas
