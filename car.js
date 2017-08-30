function Car(x, y) {
  this.positionX = x;
  this.positionY = y;
}
Car.prototype.goUp = function() {
  this.positionY -= 2;
};

Car.prototype.goDown = function() {
  this.positionY += 2;
  var a=parseInt($(".car").css("top"));
  a+=5;
  $(".car").css("top", a+"px");
  console.log(this);
};
Car.prototype.updatePosition=function (){
    $(".car").css("top", this.positionY +"px");
};
