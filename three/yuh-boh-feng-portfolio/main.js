import * as THREE from "three";

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

// CREATING CUBE
// const geometry = new THREE.BoxGeometry(1, 1, 1);// width, length, height
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// CAMERA POSITION
camera.position.z = 5; // how far away from center of 3D Model

// CREATING PLANE
const planeGeometry = new THREE.PlaneGeometry(5, 5, 10, 10);// width, height, width segment, height segment
const planeMaterial = new THREE.MeshPhongMaterial({ 
  color: 0xff0000, 
  side: THREE.DoubleSide }); // color side red, color both sides red.
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(planeMesh);

// CREATING LIGHT
const light = new THREE.DirectionalLight(
  0xffffff, 1); // white, max brightness;
light.position.set(0, 0, 1); // x, y, in front of object;
scene.add(light);

// ANIMATE MESH
function animate() {
  requestAnimationFrame(animate); // animation calls on itself
  
  // cube.rotation.x += 0.01; // rotate cube on x axis
  // cube.rotation.y += 0.01; // rotate cube on y axis

  // planeMesh.rotation.x += 0.01; // rotate plane on x axis

  renderer.render(scene, camera); // animate now
}

animate();
