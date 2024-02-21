// // add in stats FPS
// (function(){
//   var script=document.createElement('script');
//   script.onload=function(){
//       var stats=new Stats();
//       document.body.appendChild(stats.dom);
//       requestAnimationFrame(function loop(){
//           stats.update();
//           requestAnimationFrame(loop)
//       });
//   };
//   script.src='/jsm/stats.min.js';
//   document.head.appendChild(script);
// })()



// create the scene
var scene = new THREE.Scene();
// create camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// create renderer
var renderer = new THREE.WebGLRenderer();
// set size and add to document
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// new geometry, material, and mesh for cube
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
// add the cube to the scene
scene.add( cube );

// constant for flipping directional path of camera in 1 dimension
reverse_multiplier = 1;
// camera movement speed
cam_speed = 0.1;


// animation loop
function animate() {
  // spin and rotate the cube
  requestAnimationFrame( animate );
  cube.rotation.x -= 0.02;
  cube.rotation.y += 0.01;
  // print out the camera position
  // console.log(camera.position.y)

  // set maximum and minimum distance to travel
  cam_max_dist = 1;
  cam_min_dist = 1;

  // increment camera position based on distance
  if (camera.position.y > cam_max_dist) {
    // invert the traveling direction
    reverse_multiplier = -1;
  }
  else if (camera.position.y < 1) {
    // invert the traveling direction
    reverse_multiplier = 1;
  }
  // update camera position
  camera.position.y +=cam_speed * reverse_multiplier;
  camera.lookAt(0,0,0);

  // render frame
  renderer.render( scene, camera );
}

// call animation function above
animate();