let sp;
let tr;
let sq;
let bg;
let button;
let song;

function setup() {
  bg = loadImage("retro.jpeg");
  createCanvas(200, 200);
  sp = new Spot(33.0, 50.0, 30.0);
  tr = new Triangle(65, 70, 85, 45, 100, 70);
  sq = new Square(35.0, 100.0, 25.0);

  var button = createButton("click for help");
  button.position(0, 200);
  button.mousePressed(helpBox);

  song = loadSound("themeSong.mp3"); //Do music when the canvas is pressed
}
function helpBox() {
  alert(
    "Use the up, down, left, and right arrows to make the shapes move around the canvas. Alternatively, use u, r, l, and d to make the shapes move around the canvas. To hear music, click on the canvas and to stop click the canvas again. Pressing the space bar will generate random colors on the shapes."
  );
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
  } else {
    song.play();
  }
}

function draw() {
  background(0);
  background(bg);
  stroke(10);
  sp.draw();
  sq.draw();
  tr.draw();

  //shapes.fill;
  //shapes.outline;

  if (keyIsPressed) {
    if (keyCode == UP_ARROW || keyCode == 85) {
      // 'u'
      sp.moveUp();
      tr.moveUp();
      sq.moveUp();
    }
  }

  if (keyIsPressed) {
    if (keyCode == DOWN_ARROW || keyCode == 68) {
      //'d'
      sp.moveDown();
      tr.moveDown();
      sq.moveDown();
    }
  }

  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW || keyCode == 82) {
      //'r'
      sp.moveRight();
      tr.moveRight();
      sq.moveRight();
    }
  }

  if (keyIsPressed) {
    if (keyCode == LEFT_ARROW || keyCode == 76) {
      //'l'
      sp.moveLeft();
      tr.moveLeft();
      sq.moveLeft();
    }
  }

  if (keyIsPressed) {
    if (keyCode == 32) {
      //Spacebar
      fill(random(255), random(255), random(255));
    }
  }
}
