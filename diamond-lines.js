for (var x = 0; x <= 170; x = x + 10) {
  var startX = x
  var startY = 170-x
  var endX = 340-x;
  var endY = 170-x;
  line(startX, startY, endX, endY);
} 

for (var x = 0; x <= 170; x = x+10) {
  var startX = x;
  var startY = 170+x;
  var endX = 340-x;
  var endY = 170+x;
  line(startX, startY, endX, endY);
}
