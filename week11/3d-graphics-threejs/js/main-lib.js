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
  plane.receiveShadow = true; // shadows should be cast onto this

  return plane;

}; // createPlane()


app.createSpotlight = () => {

  const light = new THREE.SpotLight( 0xFFFFFF );
  light.position.set( -10, 60, 10 );
  light.castShadow = true;
  light.shadow.mapSize.width = 2048;
  light.shadow.mapSize.height = 2048;

  return light;

}; // createSpotlight()
