import * as THREE from "three";
import { GUI } from "dat.gui";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import gsap from "gsap";

// 1 - CREATING MATERIALS
const planeMaterial = new THREE.MeshPhongMaterial({
  side: THREE.DoubleSide, // color side red, color both sides red.
  flatShading: true,
  vertexColors: true,
});

const planeGeometry = new THREE.PlaneGeometry(500, 500, 50, 50); // width, height, width segment, height segment

// FRONT PLANE
const frontMesh = new THREE.Mesh(planeGeometry, planeMaterial);
const planeParameters = frontMesh.geometry.parameters;

// BACK PLANE
const backMesh = new THREE.Mesh(planeGeometry, planeMaterial);
const backParameters = frontMesh.geometry.parameters;

// LEFT PLANE
const leftMesh = frontMesh.clone();
const leftParameters = leftMesh.geometry.parameters;

// RIGHT PLANE
const rightMesh = frontMesh.clone();
const rightParameters = rightMesh.geometry.parameters;

// TOP PLANE

// BOTTOM PLANE

// FRONT PLANE GEOMETRY/POSITION
function generateFrontPlane() {
  frontMesh.geometry.dispose();
  frontMesh.geometry = new THREE.PlaneGeometry(
    planeParameters.width,
    planeParameters.height,
    planeParameters.widthSegments,
    planeParameters.heightSegments
  );

  frontMesh.position.set(0, 0, -250); //(x,y,z)

  // vertice position randomization
  const { array } = frontMesh.geometry.attributes.position;
  const randomValues = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 3 === 0) {
      const x = array[i];
      const y = array[i + 1];
      const z = array[i + 2];

      array[i] = x + (Math.random() - 0.5) * 3;
      array[i + 1] = y + (Math.random() - 0.5) * 3;
      array[i + 2] = z + (Math.random() - 0.5) * 3;
    }
    randomValues.push(Math.random() * Math.PI * 2);
  }
  frontMesh.geometry.attributes.position.randomValues = randomValues;

  frontMesh.geometry.attributes.position.originalPosition =
    frontMesh.geometry.attributes.position.array;

  // UPDATE PLANE COLOR = PLANE COLOR
  const colors = [];
  for (let i = 0; i < frontMesh.geometry.attributes.position.count; i++) {
    colors.push(0, 0, 1); // default front color
  }

  frontMesh.geometry.setAttribute(
    "color",
    new THREE.BufferAttribute(new Float32Array(colors), 3)
  );
}

// BACK PLANE GEOMETRY/POSITION
function generateBackPlane() {
  backMesh.geometry.dispose();
  backMesh.geometry = new THREE.PlaneGeometry(
    backParameters.width,
    backParameters.height,
    backParameters.widthSegments,
    backParameters.heightSegments
  );

  backMesh.position.set( 0, 0, 250); //(x,y,z)

  // vertice position randomization
  const { array } = backMesh.geometry.attributes.position;
  const randomValues = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 3 === 0) {
      const x = array[i];
      const y = array[i + 1];
      const z = array[i + 2];

      array[i] = x + (Math.random() - 0.5) * 3;
      array[i + 1] = y + (Math.random() - 0.5) * 3;
      array[i + 2] = z + (Math.random() - 0.5) * 3;
    }
    randomValues.push(Math.random() * Math.PI * 2);
  }
  backMesh.geometry.attributes.position.randomValues = randomValues;

  backMesh.geometry.attributes.position.originalPosition =
    backMesh.geometry.attributes.position.array;

  // UPDATE PLANE COLOR = PLANE COLOR
  const colors = [];
  for (let i = 0; i < backMesh.geometry.attributes.position.count; i++) {
    colors.push(0, 0, 1); // default back color
  }

  backMesh.geometry.setAttribute(
    "color",
    new THREE.BufferAttribute(new Float32Array(colors), 3)
  );
}

// LEFT PLANE GEOMETRY/POSITION
function generateLeftPlane() {
  leftMesh.geometry.dispose();
  leftMesh.geometry = new THREE.PlaneGeometry(
    leftParameters.width,
    leftParameters.height,
    leftParameters.widthSegments,
    leftParameters.heightSegments
  );

  leftMesh.position.set(-250, 0, 0); //(x,y,z)
  leftMesh.rotateY(Math.PI / 2);

  // vertice position randomization
  const { array } = leftMesh.geometry.attributes.position;
  const randomValues = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 3 === 0) {
      const x = array[i];
      const y = array[i + 1];
      const z = array[i + 2];

      array[i] = x + (Math.random() - 0.5) * 3;
      array[i + 1] = y + (Math.random() - 0.5) * 3;
      array[i + 2] = z + (Math.random() - 0.5) * 3;
    }
    randomValues.push(Math.random() * Math.PI * 2);
  }
  leftMesh.geometry.attributes.position.randomValues = randomValues;

  leftMesh.geometry.attributes.position.originalPosition =
    leftMesh.geometry.attributes.position.array;

  // UPDATE PLANE COLOR = PLANE COLOR
  const colors = [];
  for (let i = 0; i < leftMesh.geometry.attributes.position.count; i++) {
    colors.push(0, 0, 1); // default left color
  }

  leftMesh.geometry.setAttribute(
    "color",
    new THREE.BufferAttribute(new Float32Array(colors), 3)
  );
}

// RIGHT PLANE GEOMETRY/POSITION
function generateRightPlane() {
  rightMesh.geometry.dispose();
  rightMesh.geometry = new THREE.PlaneGeometry(
    rightParameters.width,
    rightParameters.height,
    rightParameters.widthSegments,
    rightParameters.heightSegments
  );

  rightMesh.position.set(250, 0, 0); //(x,y,z)
  rightMesh.rotateY(Math.PI / 2);

  // vertice position randomization
  const { array } = rightMesh.geometry.attributes.position;
  const randomValues = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 3 === 0) {
      const x = array[i];
      const y = array[i + 1];
      const z = array[i + 2];

      array[i] = x + (Math.random() - 0.5) * 3;
      array[i + 1] = y + (Math.random() - 0.5) * 3;
      array[i + 2] = z + (Math.random() - 0.5) * 3;
    }
    randomValues.push(Math.random() * Math.PI * 2);
  }
  rightMesh.geometry.attributes.position.randomValues = randomValues;

  rightMesh.geometry.attributes.position.originalPosition =
    rightMesh.geometry.attributes.position.array;

  // UPDATE PLANE COLOR = PLANE COLOR
  const colors = [];
  for (let i = 0; i < rightMesh.geometry.attributes.position.count; i++) {
    colors.push(0, 0, 1); // default right color
  }

  rightMesh.geometry.setAttribute(
    "color",
    new THREE.BufferAttribute(new Float32Array(colors), 3)
  );
};

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
generateFrontPlane();
generateBackPlane();
generateLeftPlane();
generateRightPlane();

// RENDER PLANES
scene.add(frontMesh, leftMesh, backMesh, rightMesh);

// CREATING/CALLING LIGHT
function light() {
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
light();

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


