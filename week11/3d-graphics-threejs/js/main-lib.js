var app = app || {};

console.log('main-lib.js loaded');

app.createPlane = () => {

  // 3d objects are built from two elements:
  // 1. a geometry, a.k.a. a shape
  // 2. a material, a.k.a. a surface or texture/covering
  //
  // These are combined into a final 'mesh'

  const planeGeometry = new THREE.PlaneGeometry( 120, 20 );
  const planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xCCCCCC // grey
  });

  // Combine into a mesh:
  const plane = new THREE.Mesh( planeGeometry, planeMaterial  );

  plane.position.set( 15, 0, 0 ); // x, y, z
  plane.rotation.x = -0.5 * Math.PI;  // because of maths
  // plane.receiveShadow = true; // shadows should be cast onto this

  return plane;

}; // createPlane()


app.createSpotlight = () => {

  const light = new THREE.SpotLight( 0xFFFFFF );
  light.position.set( -10, 60, 10 );
  // light.castShadow = true;
  // light.shadow.mapSize.width = 2048;
  // light.shadow.mapSize.height = 2048;
  // light.angle = Math.PI/4;
  // light.distance = 200;
  return light;

}; // createSpotlight()


app.createCube = (width, depth, height) => {

  const cubeGeometry = new THREE.BoxGeometry( width, depth, height );
  const cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xFF8F00,
    // wireframe: true
  });

  const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
  cube.position.set( -4, 15, 0 );
  // cube.position.set(
  //   THREE.MathUtils.randInt(-50, 50),
  //   THREE.MathUtils.randInt(-50, 50),
  //   THREE.MathUtils.randInt(-50, 50),
  // );
  // cube.castShadow = true;

  return cube;
}; // createCube


app.createSphere = () => {

  const sphereGeometry = new THREE.SphereGeometry(
    6, // radius
    40, // number of triangle segments on the X axis
    40, // same for Y axis
  );

  const sphereMaterial = new THREE.MeshPhongMaterial({
    color: 0x039BE5
  });

  const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
  sphere.position.set( 20, 6, 2 );
  // sphere.castShadow = true;

  return sphere;

}; // createSphere()


app.addStats = () => {

  const stats = new Stats();
  stats.setMode( 0 );
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.getElementById('stats').appendChild( stats.domElement );

  return stats;

}; // addStats()
