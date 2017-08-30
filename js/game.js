function Game() {
  var fps = 30;
  var carSpeedInPxSec = 100 / fps;
  // Create the objects
  this.car = new Car(0, 500, carSpeedInPxSec);
  this.walls = []  ;
this.walls2=new Wall (300,300,300);
walls.push(wals2);
this.walls3=new Wall (400,400,300);
walls.push(wals3);
  setInterval(this.update.bind(this), 1000 / fps);
}

Game.prototype.update = function() {
  this.car.update();
  // this.walls.forEach(function(e) {
  //   e.update();
  // });
};
// this.walls[0]=(100,200,300);
//this.walls[1]=(300,200,300);
// this.walls[3]=(600,200,300);
//aqui iran todos los generadores dinamicos de divs, los vambios de velocidad, anchura,
// altura y esas mierdas
