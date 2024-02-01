import * as THREE from "three";
import { GUI } from "dat.gui";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import gsap from "gsap";

//Import hooks:
import useGeneratePlane from "./hooks/useGeneratePlane"
import usePatternRandomizer from "./hooks/usePatternRandomizer"
import useLights from "./hooks/useLights";

//functions:
const doPatternRandomizer = usePatternRandomizer();

const frontMesh = useGeneratePlane(); //This function should return a new mesh, using the geometry and material provided in useGeneratePlane.js 
const backMesh = useGeneratePlane();
const leftMesh = useGeneratePlane();
const rightMesh = useGeneratePlane();
const topMesh = useGeneratePlane();
const botMesh = useGeneratePlane();

const frontParameters = frontMesh.geometry.parameters;
const backParameters = backMesh.geometry.parameters;
const leftParameters = leftMesh.geometry.parameters;
const rightParameters = rightMesh.geometry.parameters;
const topParameters = topMesh.geometry.parameters;
const botParameters = botMesh.geometry.parameters;

const raycaster = new THREE.Raycaster();
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
camera.position.z = 150; // how far away from center of 3D Model

// CALLING ALL PLANE FUNCTIONS
doPatternRandomizer(frontMesh, 'front');
doPatternRandomizer(backMesh, 'back');
doPatternRandomizer(leftMesh, 'left');
doPatternRandomizer(rightMesh, 'right');

// RENDER PLANES
scene.add(frontMesh, leftMesh, backMesh, rightMesh);

// CREATING/CALLING LIGHT
function lights() {
  const frontLight = new THREE.DirectionalLight(0xffffff, 1); // white, max brightness;
  frontLight.position.set(0, 0, 1); // x, y, in front of object;

  const backLight = new THREE.DirectionalLight(0xffffff, 1);
  backLight.position.set(0, 0, -1); // light aims backwards

  const botLight = new THREE.DirectionalLight(0xffffff, 1);
  botLight.position.set(0, 1, 0); // light aims down;

  const topLight = new THREE.DirectionalLight(0xffffff, 1);
  topLight.position.set(0, -1, 0); // light aims up

  const leftLight = new THREE.DirectionalLight(0xffffff, 1);
  leftLight.position.set(1, 0, 0); // light aims left

  const rightLight = new THREE.DirectionalLight(0xffffff, 1);
  rightLight.position.set(-1, 0, 0); // light aims right

  scene.add(frontLight, backLight, leftLight, rightLight, topLight, botLight);
};
lights();

const mouse = {
  x: undefined,
  y: undefined,
};

// ANIMATE FRONT PLANE
let frame = 0;

function frontAnimate() {
  requestAnimationFrame(frontAnimate); // animation calls on itself
  renderer.render(scene, camera); // animate now
  raycaster.setFromCamera(mouse, camera);
  frame += 0.01;
  //frontMesh
  const { array, originalPosition, randomValues } =
    frontMesh.geometry.attributes.position;
  for (let i = 0; i < array.length; i += 3) {
    // x
    array[i] = originalPosition[i] + Math.cos(frame + randomValues[i]) * 0.03;
    // y
    array[i + 1] =
      originalPosition[i + 1] + Math.sin(frame + randomValues[i + 1]) * 0.03;
  }

  frontMesh.geometry.attributes.position.needsUpdate = true;

  const intersects = raycaster.intersectObject(frontMesh);
  if (intersects.length > 0) {
    const { color } = intersects[0].object.geometry.attributes;

    // vertice 1
    color.setX(intersects[0].face.a, 0.1);
    color.setY(intersects[0].face.a, 0.5);
    color.setZ(intersects[0].face.a, 1);

    // vertice 2
    color.setX(intersects[0].face.b, 0.1);
    color.setY(intersects[0].face.b, 0.5);
    color.setZ(intersects[0].face.b, 1);

    // vertice 3
    color.setX(intersects[0].face.c, 0.1);
    color.setY(intersects[0].face.c, 0.5);
    color.setZ(intersects[0].face.c, 1);

    intersects[0].object.geometry.attributes.color.needsUpdate = true;

    const initialColor = {
      r: 0,
      g: 0,
      b: 0,
    };

    const hoverColor = {
      r: 1,
      g: 1,
      b: 1,
    };

    gsap.to(hoverColor, {
      r: initialColor.r,
      g: initialColor.g,
      b: initialColor.b,
      duration: 1,
      onUpdate: () => {
        // vertice 1
        color.setX(intersects[0].face.a, hoverColor.r);
        color.setY(intersects[0].face.a, hoverColor.g);
        color.setZ(intersects[0].face.a, hoverColor.b);

        // vertice 2
        color.setX(intersects[0].face.b, hoverColor.r);
        color.setY(intersects[0].face.b, hoverColor.g);
        color.setZ(intersects[0].face.b, hoverColor.b);

        // vertice 3
        color.setX(intersects[0].face.c, hoverColor.r);
        color.setY(intersects[0].face.c, hoverColor.g);
        color.setZ(intersects[0].face.c, hoverColor.b);
        color.needsUpdate = true;
      },
    }); // .to() takes classes or objects
  }
}

// ANIMATE BACK PLANE
function backAnimate() {
  requestAnimationFrame(backAnimate); // animation calls on itself
  renderer.render(scene, camera); // animate now
  raycaster.setFromCamera(mouse, camera);
  frame += 0.01;
  //frontMesh
  const { array, originalPosition, randomValues } =
    backMesh.geometry.attributes.position;
  for (let i = 0; i < array.length; i += 3) {
    // x
    array[i] = originalPosition[i] + Math.cos(frame + randomValues[i]) * 0.03;
    // y
    array[i + 1] =
      originalPosition[i + 1] + Math.sin(frame + randomValues[i + 1]) * 0.03;
  }

  backMesh.geometry.attributes.position.needsUpdate = true;

  const intersects = raycaster.intersectObject(frontMesh);
  if (intersects.length > 0) {
    const { color } = intersects[0].object.geometry.attributes;

    // vertice 1
    color.setX(intersects[0].face.a, 0.1);
    color.setY(intersects[0].face.a, 0.5);
    color.setZ(intersects[0].face.a, 1);

    // vertice 2
    color.setX(intersects[0].face.b, 0.1);
    color.setY(intersects[0].face.b, 0.5);
    color.setZ(intersects[0].face.b, 1);

    // vertice 3
    color.setX(intersects[0].face.c, 0.1);
    color.setY(intersects[0].face.c, 0.5);
    color.setZ(intersects[0].face.c, 1);

    intersects[0].object.geometry.attributes.color.needsUpdate = true;

    const initialColor = {
      r: 0,
      g: 0,
      b: 0,
    };

    const hoverColor = {
      r: 1,
      g: 1,
      b: 1,
    };

    gsap.to(hoverColor, {
      r: initialColor.r,
      g: initialColor.g,
      b: initialColor.b,
      duration: 1,
      onUpdate: () => {
        // vertice 1
        color.setX(intersects[0].face.a, hoverColor.r);
        color.setY(intersects[0].face.a, hoverColor.g);
        color.setZ(intersects[0].face.a, hoverColor.b);

        // vertice 2
        color.setX(intersects[0].face.b, hoverColor.r);
        color.setY(intersects[0].face.b, hoverColor.g);
        color.setZ(intersects[0].face.b, hoverColor.b);

        // vertice 3
        color.setX(intersects[0].face.c, hoverColor.r);
        color.setY(intersects[0].face.c, hoverColor.g);
        color.setZ(intersects[0].face.c, hoverColor.b);
        color.needsUpdate = true;
      },
    }); // .to() takes classes or objects
  }
}

// ANIMATE LEFT PLANE
function leftAnimate() {
  requestAnimationFrame(leftAnimate); // animation calls on itself
  renderer.render(scene, camera); // animate now
  raycaster.setFromCamera(mouse, camera);
  frame += 0.01;

  const { array, originalPosition, randomValues } =
    leftMesh.geometry.attributes.position;
  for (let i = 0; i < array.length; i += 3) {
    // x
    array[i] = originalPosition[i] + Math.cos(frame + randomValues[i]) * 0.03;
    // y
    array[i + 1] =
      originalPosition[i + 1] + Math.sin(frame + randomValues[i + 1]) * 0.03;
  }

  leftMesh.geometry.attributes.position.needsUpdate = true;

  const intersects = raycaster.intersectObject(leftMesh);
  if (intersects.length > 0) {
    const { color } = intersects[0].object.geometry.attributes;

    // vertice 1
    color.setX(intersects[0].face.a, 0.1);
    color.setY(intersects[0].face.a, 0.5);
    color.setZ(intersects[0].face.a, 1);

    // vertice 2
    color.setX(intersects[0].face.b, 0.1);
    color.setY(intersects[0].face.b, 0.5);
    color.setZ(intersects[0].face.b, 1);

    // vertice 3
    color.setX(intersects[0].face.c, 0.1);
    color.setY(intersects[0].face.c, 0.5);
    color.setZ(intersects[0].face.c, 1);

    intersects[0].object.geometry.attributes.color.needsUpdate = true;

    const initialColor = {
      r: 0,
      g: 0,
      b: 0,
    };

    const hoverColor = {
      r: 1,
      g: 1,
      b: 1,
    };

    gsap.to(hoverColor, {
      r: initialColor.r,
      g: initialColor.g,
      b: initialColor.b,
      duration: 1,
      onUpdate: () => {
        // vertice 1
        color.setX(intersects[0].face.a, hoverColor.r);
        color.setY(intersects[0].face.a, hoverColor.g);
        color.setZ(intersects[0].face.a, hoverColor.b);

        // vertice 2
        color.setX(intersects[0].face.b, hoverColor.r);
        color.setY(intersects[0].face.b, hoverColor.g);
        color.setZ(intersects[0].face.b, hoverColor.b);

        // vertice 3
        color.setX(intersects[0].face.c, hoverColor.r);
        color.setY(intersects[0].face.c, hoverColor.g);
        color.setZ(intersects[0].face.c, hoverColor.b);
        color.needsUpdate = true;
      },
    }); // .to() takes classes or objects
  }
}

// ANIME RIGHT PLANE
function rightAnimate() {
  requestAnimationFrame(rightAnimate); // animation calls on itself
  renderer.render(scene, camera); // animate now
  raycaster.setFromCamera(mouse, camera);
  frame += 0.01;

  const { array, originalPosition, randomValues } =
    rightMesh.geometry.attributes.position;
  for (let i = 0; i < array.length; i += 3) {
    // x
    array[i] = originalPosition[i] + Math.cos(frame + randomValues[i]) * 0.03;
    // y
    array[i + 1] =
      originalPosition[i + 1] + Math.sin(frame + randomValues[i + 1]) * 0.03;
  }

  rightMesh.geometry.attributes.position.needsUpdate = true;

  const intersects = raycaster.intersectObject(rightMesh);
  if (intersects.length > 0) {
    const { color } = intersects[0].object.geometry.attributes;

    // vertice 1
    color.setX(intersects[0].face.a, 0.1);
    color.setY(intersects[0].face.a, 0.5);
    color.setZ(intersects[0].face.a, 1);

    // vertice 2
    color.setX(intersects[0].face.b, 0.1);
    color.setY(intersects[0].face.b, 0.5);
    color.setZ(intersects[0].face.b, 1);

    // vertice 3
    color.setX(intersects[0].face.c, 0.1);
    color.setY(intersects[0].face.c, 0.5);
    color.setZ(intersects[0].face.c, 1);

    intersects[0].object.geometry.attributes.color.needsUpdate = true;

    const initialColor = {
      r: 0,
      g: 0,
      b: 0,
    };

    const hoverColor = {
      r: 1,
      g: 1,
      b: 1,
    };

    gsap.to(hoverColor, {
      r: initialColor.r,
      g: initialColor.g,
      b: initialColor.b,
      duration: 1,
      onUpdate: () => {
        // vertice 1
        color.setX(intersects[0].face.a, hoverColor.r);
        color.setY(intersects[0].face.a, hoverColor.g);
        color.setZ(intersects[0].face.a, hoverColor.b);

        // vertice 2
        color.setX(intersects[0].face.b, hoverColor.r);
        color.setY(intersects[0].face.b, hoverColor.g);
        color.setZ(intersects[0].face.b, hoverColor.b);

        // vertice 3
        color.setX(intersects[0].face.c, hoverColor.r);
        color.setY(intersects[0].face.c, hoverColor.g);
        color.setZ(intersects[0].face.c, hoverColor.b);
        color.needsUpdate = true;
      },
    }); // .to() takes classes or objects
  }
}

// // CREATE DAT.GUI
// const gui = new GUI();
// const leftFolder = gui.addFolder("Plane"); // create menu
// planeFolder.open(); // default open menu

// planeFolder.add(planeParameters, "width", 1, 500).onChange(generatePlane); // adds category
// planeFolder.add(planeParameters, "height", 1, 500).onChange(generatePlane);
// planeFolder
//   .add(planeParameters, "widthSegments", 1, 100)
//   .onChange(generatePlane);
// planeFolder
//   .add(planeParameters, "heightSegments", 1, 100)
//   .onChange(generatePlane);


// CALL ON ANIMATE FUNCTIONS
frontAnimate();
backAnimate();
leftAnimate();
rightAnimate();

addEventListener("mousemove", (event) => {
  mouse.x = (event.clientX / innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / innerHeight) * 2 + 1;
});


