console.log('main.js loaded');


// let drawCount = 0;


const circles = [];  // for storing all the drawn circles, so we can redraw and move them

// Runs ONCE when the sketch is first loaded
function setup(){
  // Make the canvas the full size of the window
  createCanvas(windowWidth, windowHeight);

  background(0, 0, 0); // black canvas background

  // strokeWeight(10); // width of outlines
  // stroke(0, 0, 255); // outline colour
  noStroke();  // turn off shape outlines

  // fill(255, 0, 0);
  // //       x   y   w   h
  // ellipse(50, 50, 80, 80);
  //
  //
  // fill(0, 255, 0);
  //
  // noFill(); // don't fill in the shape with any colour
  // stroke(0, 200, 0); // just give it an outline
  //
  // // put the circle at the center of the window
  // ellipse(windowWidth/2, windowHeight/2,  150, 150);
  //
  // noStroke();
  // fill(0, 0, 255);
  // rect(300, 400, 200, 200);
  //
  // fill(20, 100, 70);
  // triangle(
  //   200, 100, // position of first point
  //   150, 300, // second point
  //   400, 300  // third point
  // );
  //
  // stroke(255, 0, 0);
  // strokeWeight(2);
  // line( 100, 300,  600, 200 );
  //
  // point( 500, 100 );
  // stroke(0, 255, 0);
  // point(502, 100);

  frameRate(60);

  colorMode(HSB, 255); // stop using RGB

} // setup()



// This function runs in a loop, nonstop, for
// as long as the page is open
// It will try to run at 60 frames/sec
function draw(){

  // drawCount++;
  // if( drawCount > 255 ){
  //   drawCount = 0;
  // }

  // When halfway across the screen,
  // mouseFraction will be 0.5
  // const mouseFraction = mouseX / windowWidth;
  //
  // // 0.5 * 255 = 127
  // const hue = mouseFraction * 255;

  // NOT THE SAME as ES6 myArray.map();
  const hue = map(
    mouseX, // input value from input range,
    0, windowWidth, // input range min, max
    0, 255 // output range min, max
  );


  // fill(
  //   // random(255), // Math.random() * 255,
  //   // random(255),
  //   // random(255),
  //
  //   hue,
  //   // frameCount % 255, // Hue
  //   // 100 + (frameCount % 100),
  //   255,  // Saturation
  //   255,  // Brightness
  //
  //   220   // "alpha channel" aka opacity
  // );

  // Random size + position "screensaver" example
  // const circleSize = random(1000);
  // ellipse(
  //   random(windowWidth),  //windowWidth/2,
  //   random(windowHeight),  // windowHeight/2,
  //   circleSize,
  //   circleSize
  // );


  // SO THAT we can move "individual" circles around within the canvas
  // we need to
  // 1. record the details about each circle as its drawn, into an array
  // 2. every draw() loop, also loop through the array of circles and REDRAW them

  if( keyIsDown(SHIFT) ){

    const circleSize = 60;

    // ellipse(
    //   mouseX, // p5 updates these for us
    //   mouseY,
    //   circleSize,
    //   circleSize
    // );


    const mouseXVelocity = mouseX - pwinMouseX; // thanks p5!
    const mouseYVelocity = mouseY - pwinMouseY; // thanks p5!

    const newCircle = {
      xPos: mouseX,
      yPos: mouseY,
      size: circleSize,
      hue: hue,
      // xVel: random(-5, 5),  // create a random speed (velocity) for each
      // yVel: random(-5, 5)   // new circle when it's created
      xVel: mouseXVelocity,
      yVel: mouseYVelocity
    };

    circles.push( newCircle );  // record the fact that a new circle was created

  } // if shift is held

  // clear the screen (unless you want cool trails)
  background(0);

  updateCircles();

} // draw()


function updateCircles(){
  // loop through the array of circles and REDRAW them

  // for( let i = 0; i < circles.length; i++ ){
  //   circles[i]
  // }
  // circles.forEach( circle => {
  //   // draw circ
  // });

  for( const circle of circles ){

    // change the position of the current circle
    circle.xPos += circle.xVel;  // add the circle's speed (i.e. 10 pixels) to its position
    circle.yPos += circle.yVel;

    // draw the circle
    fill( circle.hue, 255, 255, 200 );
    ellipse( circle.xPos, circle.yPos, circle.size, circle.size );

  } // for each circle

} // updateCircles()






// make the window responsive, i.e
// automatically update the canvas size
// whenever the user changes the browser window size
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
