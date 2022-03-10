console.log('main.js loaded');

// use the existing 'app' object (if the other main file loaded first) or, if it's not yet defined, initialise it as an empty object
var app = app || {};


app.init = () => {
  console.log('init()');

  app.scene = new THREE.Scene();

  app.camera = new THREE.PerspectiveCamera(
    60, // field of view angle
    window.innerWidth / window.innerHeight, // screen aspect ratio
    0.1, // near field: how close to the camera objects can be, before being ignored
    1000 // far field
  );

  app.camera.position.x = -30;
  app.camera.position.y = 40;
  app.camera.position.z = 30;
  // app.camera.position.set( -30, 40, 30 );

  app.camera.lookAt( app.scene.position ); // Look at 'origin': x=0, y=0, z=0

  // The renderer calculates how to draw all the objects in the scene, based on
  // the camera perspective and the lighting; it renders it all down to a
  // 2D image to show in a <canvas>
  app.renderer = new THREE.WebGLRenderer(); // use hardware acceleration
  app.renderer.setSize( window.innerWidth, window.innerHeight ); // canvas size
  app.renderer.setClearColor( 0x000000 ); // background colour

  // Casting shadows is computationally expensive, so we have to opt in:
  app.renderer.shadowMap.enabled = true;
  app.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // WTF?

  document.getElementById('output').appendChild( app.renderer.domElement );


  app.axes = new THREE.AxesHelper( 50 );
  app.scene.add( app.axes ); // create an axis visualiser and add it to the scene




  // add some cool shit

  // 1. Add a 2D plane, i.e. a sheet, aka "The Runway"
  app.plane = app.createPlane();
  app.scene.add( app.plane ); // add to scene


  // 2. Add a cube! A perfect platonic solid
  app.cube = app.createCube(4, 4, 4);
  app.scene.add( app.cube );

  // Let there be light!
  app.spotlight = app.createSpotlight();
  app.scene.add( app.spotlight );


  // Use the mouse to control the camera perspective
  app.mouseControls = new THREE.OrbitControls(
    app.camera, app.renderer.domElement
  );

  app.animate(); // start the animation/draw loop

}; // app.init()


app.animate = () => {
  app.renderer.render( app.scene, app.camera );
  requestAnimationFrame( app.animate ); // 60 times/sec
}; // animate()




// oldskool dom readiness handler:
window.onload = app.init;
