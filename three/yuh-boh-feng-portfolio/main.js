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
const geometry = new THREE.BoxGeometry(1, 1, 1);// width, length, height
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5; // how far away from center of 3D Model

// CREATING PLANE
const planeGeometry = new THREE.PlaneGeometry(5, 5, 10, 10);// width, height, width segment, height segment
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(planeMesh);





function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
