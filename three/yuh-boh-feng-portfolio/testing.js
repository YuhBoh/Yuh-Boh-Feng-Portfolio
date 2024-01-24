//Hengs example:

// plane1 = scene.getObjectByName("Name of your plane")
// plane1.position.set(0, 1, 0); //(x,y,z)

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";


// 1 - CREATING PLANE
const planeMaterial = new THREE.MeshStandardMaterial({
  color: 0x00ff00,
  side: THREE.DoubleSide, // both sides of mesh has color
  // flatShading: true,
});



const planeGeometry = new THREE.PlaneGeometry(400, 400); // width, height, width segment, height segment

//Create 6 different planes:
const planeFrontMesh = new THREE.Mesh(planeGeometry, planeMaterial);
const planeBackMesh = new THREE.Mesh(planeGeometry, planeMaterial);
const planeLeftMesh = new THREE.Mesh(planeGeometry, planeMaterial);
const planeRightMesh = new THREE.Mesh(planeGeometry, planeMaterial);
const planeTopMesh = new THREE.Mesh(planeGeometry, planeMaterial);
const planeBottomMesh = new THREE.Mesh(planeGeometry, planeMaterial);

const scene = new THREE.Scene(); // creates an empty world to put 3d stuff in.

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

console.log(planeBottomMesh.parent.position, "POS");
planeBottomMesh.rotateX(Math.PI / 2);
planeTopMesh.rotateX(Math.PI / 2);
planeLeftMesh.rotateY(Math.PI / 2);
planeRightMesh.rotateY(Math.PI / 2);


// CREATING LIGHT/BACKLIGHT
const light = new THREE.DirectionalLight(0xffffff, 1); // white, max brightness;
light.position.set(0, 0, 1); // light aims forward;
scene.add(light);

const backLight = new THREE.DirectionalLight(0xffffff, 1);
backLight.position.set(0, 0, -1); // light aims backwards
scene.add(backLight);

const botLight = new THREE.DirectionalLight(0xffffff, 1);
botLight.position.set(0, 1, 0); // light aims down;
scene.add(botLight);

const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(0, -1, 0);// light aims up
scene.add(topLight);

const leftLight = new THREE.DirectionalLight(0xffffff, 1);
leftLight.position.set(1, 0, 0); // light aims left
scene.add(leftLight);

const rightLight = new THREE.DirectionalLight(0xffffff, 1);
rightLight.position.set(-1, 0, 0); // light aims right
scene.add(rightLight);

function animate() {
  requestAnimationFrame(animate); // animation calls on itself
  renderer.render(scene, camera); // animate now
}

animate();