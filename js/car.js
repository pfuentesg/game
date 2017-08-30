function Car(x, y, speed) {
  this.speed = speed;
  this.x = x;
  this.y = y;
  this.element = $("<div class='car'>");
  $("#circuito").append(this.element);
}
Car.prototype.goUp = function() {
  this.positionY -= 2;
  console.log(this);
};

Car.prototype.goDown = function() {
  this.positionY += this.speed;

  console.log(this);
};
Car.prototype.update = function() {
  this.x += this.speed;
  this.element.css("top", this.y);
  this.element.css("left", this.x);
};
