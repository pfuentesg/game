$(document).ready(function() {



       setInterval(check , 20);
function check(){
  goUp();
if (document.onkeydown)
}

function goUp(){
  var now = parseInt($(".car").css("top"));
  now-=5;
  $(".car").css("top", now+"px");

}


    });
