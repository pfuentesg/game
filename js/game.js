function Game() {
  var fps = 30;
  var carSpeedInPxSec = 100 / fps;

  // Create the objects
  this.car = new Car(0, 500, carSpeedInPxSec);
  this.walls = [];

  setInterval(this.update.bind(this), 1000 / fps);
}

Game.prototype.update = function() {
  this.car.update();
  this.walls.forEach(function(e) {
    e.update();
  });
};
//aqui iran todos los generadores dinamicos de divs, los vambios de velocidad, anchura,
// altura y esas mierdas
