$(document).ready(function() {



       setInterval(check , 100);
function check(){

($(document).keydown(function (e) {
  console.log (e.keyCode);
  if (e.keyCode===40)
{  goDown();
console.log("pasa");}
  else if (e.keyCode===38)
{  goUp();
console.log("pasa2");}
}));

}

function goUp(){
  var now = parseInt($(".car").css("top"));
  now-=1;
  $(".car").css("top", now+"px");

}

function goDown(){
  var now = parseInt($(".car").css("top"));
  now+=1;
  $(".car").css("top", now+"px");

}

    });
