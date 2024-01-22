//Hengs example:

// plane1 = scene.getObjectByName("Name of your plane")
// plane1.position.set(0, 1, 0); //(x,y,z)

import * as THREE from "three";
// import { GUI } from "dat.gui";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";


// 1 - CREATING PLANE
const planeMaterial = new THREE.MeshStandardMaterial({
  color: 0x00ff00,
  side: THREE.DoubleSide, // color side red, color both sides red.
  // flatShading: true,
});



const planeGeometry = new THREE.PlaneGeometry(400, 400); // width, height, width segment, height segment

//Create you 6 different planes:
const planeFrontMesh = new THREE.Mesh(planeGeometry, planeMaterial);
const planeBackMesh = new THREE.Mesh(planeGeometry, planeMaterial);
const planeLeftMesh = new THREE.Mesh(planeGeometry, planeMaterial);
const planeRightMesh = new THREE.Mesh(planeGeometry, planeMaterial);
const planeTopMesh = new THREE.Mesh(planeGeometry, planeMaterial);
const planeBottomMesh = new THREE.Mesh(planeGeometry, planeMaterial);



const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

// CAMERA CONTROL
new OrbitControls(camera, renderer.domElement);
camera.position.z = 5; // how far away from center of 3D Model


//IMPORTANT THIS IS WHERE YOU ADD ALL YOUR PLANE MESHES!!!
//ADD 6 PLANES HEREE!!
scene.add(planeFrontMesh, planeBackMesh, planeLeftMesh, planeRightMesh, planeTopMesh, planeBottomMesh);

//Now all the planes should show up in your scene.
//And you now have access to each plane in your scene.
//NOW YOU NEED TO CHANGE THEIR POSITIONS/ ROTATIONS TO GET CREATE THE SHAPE OF A CUBE!
planeFrontMesh.position.set(0, 0, 250); //(x,y,z)
planeBackMesh.position.set(0, 0, -250); //(x,y,z)
planeLeftMesh.position.set( -250, 0, 0); //(x,y,z)
planeRightMesh.position.set(250, 0, 0); //(x,y,z)
planeTopMesh.position.set(0, 250, 0); //(x,y,z)
planeBottomMesh.position.set(0, -250, 0); //(x,y,z)

//Create vector 3:
// const a = new THREE.Vector3( -250, 500, 0 );
// // const b = new THREE.Vector3( 250, 250, 0 );
// // const d = a.distanceTo( b );
// planeTopMesh.rotateOnAxis(a, 45.0);


//Change the rotation of the top and bottom planes
// planeTopMesh = new THREE.Euler(0, 1, 1.57, "XYZ");
// planeBottomMesh.rotation.x = Math.PI / 2;
// planeLeftMesh.rotation.y = Math.PI / 2;
// planeRightMesh.rotation.y = Math.PI / 2;


// CREATING LIGHT/BACKLIGHT
const light = new THREE.DirectionalLight(0xffffff, 1); // white, max brightness;
light.position.set(0, 0, 1); // x, y, in front of object;
scene.add(light);

const backlight = new THREE.DirectionalLight(0xffffff, 1); // white, max brightness;
backlight.position.set(0, 0, -1); // x, y, in front of object;
scene.add(backlight);

// const mouse = {
//   x: undefined,
//   y: undefined,
// };

// ANIMATE MESH
// let frame = 0;

function animate() {
  requestAnimationFrame(animate); // animation calls on itself
  renderer.render(scene, camera); // animate now
  // frame += 0.01;

}

animate();