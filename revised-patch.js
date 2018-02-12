
function natPatch(x, y) {
  c = color('hsla(160, 100%, 50%, 0.5)');
	fill(c);
  noStroke();
  rect(x, y, 100, 100);

  var b = 10;

	for (var n = 0; n < 60; n = n + 20) {
    var startX = n
  	var startY = n-10
  	var endX = n-10;
		var endY = n;
  		for (var v = 0; v < 60; v = v + 5) {
  			noFill();
        stroke(100,0,200);
      	rect(n, n, v, v);
      
      }}
 	  noFill();
    stroke(100,0,200);
  	ellipse (10,90, 5, 5)
  	ellipse (90,10, 5, 5) 

}
background(255);
natPatch(0, 0); 
