function Wall(x, wt, hg, speed, id) {
  this.x = x;
  this.width = wt;
  this.height = hg;
  this.id = id;
  this.y = this.id == 1 ? 1000 - this.height : 0;
  this.element = $("<div class='wall'>").css({
    'width': this.width,
    'height': this.height,
    'left': this.x,
    'top': this.y,
    'background': '#000000',
    'position': "absolute"
  });
  $("#circuito").append(this.element);
  this.speed = speed;
}

Wall.prototype.update = function() {
  this.x -= this.speed;
  this.element.css("left", this.x);
};

Wall.prototype.update = function() {
  this.x -= this.speed;
  this.element.css("left", this.x);
};
Wall.prototype.newWall = function() {
  var newId = Math.round(Math.random());
  console.log(newId);
  var newX = 2000;
  var newWith = 200;
  var newHeight = 200;
  return (new Wall(newX, newWith, newHeight, this.speed,newId));
};
