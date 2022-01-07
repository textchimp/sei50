
console.log('Paintr JS loaded', $(this));

/*

1. When the user moves the mouse around,
2. draw a coloured circle at the mouse position

    2a. get the mouse position for the latest move event
    2b. create a <div> and add it to the DOM at that position
    2c. use CSS to style up the div to look like a coloured circle

*/

let hue = 0; // we increment this inside drawCircle()

let prevMouseX = 0;  // remember the last mouse pos, to calculate speed


const drawCircle = function( xPos, yPos ){

  // const circleSize = Math.random() * 300;
  // const circleSize = xPos * 0.5;

  // How to make the circle size depend on the mouse speed?
  const mouseXSpeed = xPos - prevMouseX;

  const circleSize = Math.abs( mouseXSpeed ) * 3; // convert negative to positive, and scale up

  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  // HSL - Hue, Saturation, Lightness
  // hsl(360, 100%, 50%)

  // Make a div to add to the page at the mouse position
  const $circle = $('<div class="circle">');

  $circle.css({
    top:  (yPos - circleSize/2) + 'px',
    left: (xPos - circleSize/2) + 'px',
    // backgroundColor: `rgb(${r}, ${g}, ${b})`,
    backgroundColor: `hsla(${hue}, 100%, 50%, 50%)`,
    width: circleSize + 'px',
    height: circleSize + 'px',
  }); // .css()

  $(document.body).append( $circle );

  $circle.animate({
    top: (Math.random() * window.innerHeight) + 'px',
    left: (Math.random() * window.innerWidth) + 'px',
    opacity: 0
  }, 2000, function(){
    // this runs when the animation is finished
    $(this).remove();
  });

  hue += 10;  // increment hue ready for the next circle we draw

}; // drawCircle()



// $(document).ready( fn )
$( function(){

  console.log('DOM ready!');

  $(document).on('mousemove', function( ev ){

    // console.log('mouse moved!', ev.originalEvent.clientX, ev.originalEvent.clientY);

    const x = ev.originalEvent.clientX;
    const y = ev.originalEvent.clientY;

    // console.log('ev', ev.originalEvent);

    if( ev.originalEvent.shiftKey ){
      drawCircle( x, y );  // pass the mouse coordinates to our draw function
    } // if shiftKey held

    prevMouseX = x;  // remember the pos for next time

  }); // on mousemove

} );  // $(document).ready()
