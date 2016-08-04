function setup() {
 createCanvas (640, 480);
 // grass
  c= color (35, 161, 31);
  fill (c);
  noStroke;
  rect (0,429,639,50);

// stems
  d= color (161, 92, 31);
  fill (d);
rect (100, 300, 10, 300);
rect (200, 300, 10, 300);
rect (300, 300, 10, 300);
rect (400, 300, 10, 300);
rect (500, 300, 10, 300);

// pink flower
  e= color (245, 37, 207);
  fill (e);
  translate (105,250);
  noStroke();
  for (var i = 0; i < 10; i ++) {
  ellipse(0, 30, 20, 80);
  rotate(PI/5);
  }
 // blue flower
  f= color (80, 242, 242);
  fill (f);
  translate (100,0);
  noStroke();
  for (var i = 0; i < 10; i ++) {
  ellipse(0, 30, 20, 80);
  rotate (PI/5);
  }
  // yellow flower
  g= color (242, 237, 80);
  fill (g);
  translate (100,0);
  noStroke();
  for (var i = 0; i < 10; i ++) {
  ellipse(0, 30, 20, 80);
  rotate (PI/5);
  }
  // purple flower
  h= color (237, 80, 242);
  fill (h);
  translate (100, 0);
  noStroke ();
  for (var i = 0; i < 10; i ++) {
  ellipse(0, 30, 20, 80);
  rotate (PI/5);
  }
  // red flower
  j= color (250, 45, 17);
  fill (j);
  translate (100,0);
  noStroke ();
  for (var i = 0; i < 10; i ++) {
  ellipse(0, 30, 20, 80);
  rotate (PI/5);
  }
  }
  


function draw() {
  
}