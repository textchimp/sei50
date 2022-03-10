console.log('main.js loaded');

// use the existing 'app' object (if the other main file loaded first) or, if it's not yet defined, initialise it as an empty object
var app = app || {};

// ready for dat.gui
app.controls = {
  rotationSpeed: 0.01, // to control cube rotation
  counter: 0,
  counterIncrement: 0.03, // how fast the counter grows
  numParticles: 1000,
};

app.init = () => {
  console.log('init()');

  app.gui = new dat.GUI();
  app.gui.add( app.controls, 'rotationSpeed', 0, 0.2 );
  app.gui.add( app.controls, 'counterIncrement', 0, 1.0 ).name('Bounce Speed');


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
  // app.renderer.shadowMap.enabled = true;
  // app.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // WTF?

  document.getElementById('output').appendChild( app.renderer.domElement );


  // app.axes = new THREE.AxesHelper( 50 );
  // app.scene.add( app.axes ); // create an axis visualiser and add it to the scene




  // add some cool shit

  // 1. Add a 2D plane, i.e. a sheet, aka "The Runway"
  // app.plane = app.createPlane();
  // app.scene.add( app.plane ); // add to scene


  // 2. Add a cube! A perfect platonic solid

  // app.cubes = [];
  //
  // for( let i = 0; i < 100; i++ ){
  //   const cube =  app.createCube(
  //     THREE.MathUtils.randInt(10, 100),
  //     4,
  //     4
  //   );
  //   app.scene.add( cube );
  //   app.cubes.push( cube );
  // }

  //
  app.cube = app.createCube(4, 4, 4);
  app.scene.add( app.cube );

  // 3. Add a sphere.... a ball... a planet...
  // every point on the surface the same distance
  // from the center... our new home
  app.sphere = app.createSphere();
  app.scene.add( app.sphere );


  app.particleSystem = app.createParticleSystem();
  app.scene.add( app.particleSystem );


  // Let there be light!
  app.spotlight = app.createSpotlight();
  app.scene.add( app.spotlight );

  app.ambientLight = new THREE.AmbientLight( 0x555555 );
  app.scene.add( app.ambientLight );


  // const spotLightHelper = new THREE.SpotLightHelper( app.spotlight );
  // app.scene.add( spotLightHelper );


  // Use the mouse to control the camera perspective
  app.mouseControls = new THREE.OrbitControls(
    app.camera, app.renderer.domElement
  );

  app.stats = app.addStats();

  app.animate(); // start the animation/draw loop

}; // app.init()


// animation loop, running at 60 frames/sec iedally
app.animate = () => {

  app.stats.update();

  app.controls.counter += app.controls.counterIncrement;

  // // Bouncing effect:
  // const sphereYOffset = Math.sin( app.controls.counter );
  // // console.log('counter:', app.controls.counter);
  // // console.log('sin offset:', sphereYOffset);
  // app.sphere.position.y = 6 + Math.abs(sphereYOffset * 15);
  //
  // const sphereXOffset = Math.cos( app.controls.counter );
  // app.sphere.position.x = 20 + (sphereXOffset * 15)

  // Georealistic rotation
  app.sphere.rotation.y += app.controls.rotationSpeed;

  app.cube.rotation.x += app.controls.rotationSpeed;
  app.cube.rotation.y += app.controls.rotationSpeed*2;
  app.cube.rotation.z += app.controls.rotationSpeed;

  app.renderer.render( app.scene, app.camera );
  requestAnimationFrame( app.animate ); // 60 times/sec

}; // animate()

// oldskool dom readiness handler:
window.onload = app.init;


app.onResize = () => {
  // Update THREE.js internals whenever the browser
  // window size changes
  app.camera.aspect = window.innerWidth / window.innerHeight;
  app.camera.updateProjectionMatrix();
  app.renderer.setSize( window.innerWidth, window.innerHeight );
}; // onResize()

// window.onresize = app.onResize;
window.addEventListener( 'resize', app.onResize );
