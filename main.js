$(document).ready(function() {



       setInterval(check , 20);

          function check()  {
            if (document.keypress==37)
            {console.log("arriba");
              goup();}
            else if (document.keyodown==39)
            {  godown();
              console.log("abajo");}
          }







    });
