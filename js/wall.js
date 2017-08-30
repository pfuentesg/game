function Wall(x,wt, hg){
this.x=x;
this.width=wt;
this.height=hg;
this.element = $("<div class='wall'>");
$("#circuito").append(this.element);
$(".wall").css('background', '#000000');
$(".wall").css('width',this.width );
$(".wall").css('height', this.height);
$(".wall").css('left', this.x);
}
