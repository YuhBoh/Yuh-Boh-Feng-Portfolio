import * as THREE from "three";
import {GUI} from 'dat.gui';

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

// 1 - CREATING PLANE
const planeGeometry = new THREE.PlaneGeometry(10, 10, 10, 10);// width, height, width segment, height segment
const planeMaterial = new THREE.MeshPhongMaterial({
  color: 0xff0000,
  side: THREE.DoubleSide, // color side red, color both sides red.
  flatShading: true
});
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(planeMesh);

console.log(planeMesh.geometry);

// 1 - a CHANGING PLANE DEPTHS
console.log(planeMesh.geometry.attributes.position.array);

const { array } = planeMesh.geometry.attributes.position;
for (let i = 0; i < array.length; i += 3) {
  const x = array[i];
  const y = array[i + 1];
  const z = array[i + 2];

  array[i + 2] = z + Math.random();
}

// CREATING LIGHT
const light = new THREE.DirectionalLight(
  0xffffff, 1); // white, max brightness;
light.position.set(0, 0, 1); // x, y, in front of object;
scene.add(light);

// CREATE DAT.GUI
const gui = new GUI();
const planeFolder = gui.addFolder('Plane');
console.log(planeMesh, "PLANEMESH"); //To look for width;
console.log(planeMesh.geometry.parameters.width, "WIDTH");

const planeParameters = planeMesh.geometry.parameters;
console.log(planeParameters, "planeWIDTH");

planeFolder.add(planeParameters, "width", 1, 20).onChange(() => {
  planeMesh.geometry.dispose();
  planeMesh.geometry = new THREE.PlaneGeometry(
    planeParameters.width,
    planeParameters.height,
    planeParameters.widthSegments,
    planeParameters.heightSegments
  );
  const { array } = planeMesh.geometry.attributes.position;
  for (let i = 0; i < array.length; i += 3) {
    const x = array[i];
    const y = array[i + 1];
    const z = array[i + 2];

    array[i + 2] = z + Math.random();
  }
});

planeFolder.add(planeParameters, "height", 1, 20).onChange(() => {
  planeMesh.geometry.dispose();
  planeMesh.geometry = new THREE.PlaneGeometry(
    planeParameters.width,
    planeParameters.height,
    planeParameters.widthSegments,
    planeParameters.heightSegments
  );
  const { array } = planeMesh.geometry.attributes.position;
  for (let i = 0; i < array.length; i += 3) {
    const x = array[i];
    const y = array[i + 1];
    const z = array[i + 2];

    array[i + 2] = z + Math.random();
  }
});

planeFolder.add(planeParameters, "widthSegments", 1, 20).onChange(() => {
  planeMesh.geometry.dispose();
  planeMesh.geometry = new THREE.PlaneGeometry(
    planeParameters.width,
    planeParameters.height,
    planeParameters.widthSegments,
    planeParameters.heightSegments
  );
  const { array } = planeMesh.geometry.attributes.position;
  for (let i = 0; i < array.length; i += 3) {
    const x = array[i];
    const y = array[i + 1];
    const z = array[i + 2];

    array[i + 2] = z + Math.random();
  }
});

planeFolder.add(planeParameters, "heightSegments", 1, 20).onChange(() => {
  planeMesh.geometry.dispose();
  planeMesh.geometry = new THREE.PlaneGeometry(
    planeParameters.width,
    planeParameters.height,
    planeParameters.widthSegments,
    planeParameters.heightSegments
  );
  const { array } = planeMesh.geometry.attributes.position;
  for (let i = 0; i < array.length; i += 3) {
    const x = array[i];
    const y = array[i + 1];
    const z = array[i + 2];

    array[i + 2] = z + Math.random();
  }
});

planeFolder.open();

// ANIMATE MESH
function animate() {
  requestAnimationFrame(animate); // animation calls on itself
  
  // cube.rotation.x += 0.01; // rotate cube on x axis
  // cube.rotation.y += 0.01; // rotate cube on y axis

  // planeMesh.rotation.x += 0.01; // rotate plane on x axis

  renderer.render(scene, camera); // animate now
}

animate();