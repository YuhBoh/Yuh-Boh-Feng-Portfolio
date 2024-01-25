import * as THREE from "three";
import { GUI } from "dat.gui";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import gsap from "gsap";

export function forwardMesh() {
  // 1 - CREATING PLANE
  const planeMaterial = new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, // color side red, color both sides red.
    flatShading: true,
    vertexColors: true,
  });

  const planeGeometry = new THREE.PlaneGeometry(500, 500, 50, 50); // width, height, width segment, height segment
  const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
  const planeParameters = planeMesh.geometry.parameters;

  // CREATE PLANE
  function generatePlane() {
    planeMesh.geometry.dispose();
    planeMesh.geometry = new THREE.PlaneGeometry(
      planeParameters.width,
      planeParameters.height,
      planeParameters.widthSegments,
      planeParameters.heightSegments
    );

    // vertice position randomization
    const { array } = planeMesh.geometry.attributes.position;
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
    planeMesh.geometry.attributes.position.randomValues = randomValues;

    planeMesh.geometry.attributes.position.originalPosition =
      planeMesh.geometry.attributes.position.array;

    // UPDATE PLANE COLOR = PLANE COLOR
    const colors = [];
    for (let i = 0; i < planeMesh.geometry.attributes.position.count; i++) {
      colors.push(0, 0, 0); // default plane color
    }

    planeMesh.geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(new Float32Array(colors), 3)
    );
  }

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

  scene.add(planeMesh);
  generatePlane();

  // CREATING LIGHT/BACKLIGHT
  const light = new THREE.DirectionalLight(0xffffff, 1); // white, max brightness;
  light.position.set(0, 0, 1); // x, y, in front of object;
  scene.add(light);

  const backlight = new THREE.DirectionalLight(0xffffff, 1); // white, max brightness;
  backlight.position.set(0, 0, -1); // x, y, in front of object;
  scene.add(backlight);

  const mouse = {
    x: undefined,
    y: undefined,
  };

  // ANIMATE MESH
  let frame = 0;

  function animate() {
    requestAnimationFrame(animate); // animation calls on itself
    renderer.render(scene, camera); // animate now
    raycaster.setFromCamera(mouse, camera);
    frame += 0.01;

    const { array, originalPosition, randomValues } =
      planeMesh.geometry.attributes.position;
    for (let i = 0; i < array.length; i += 3) {
      // x
      array[i] = originalPosition[i] + Math.cos(frame + randomValues[i]) * 0.03;
      // y
      array[i + 1] =
        originalPosition[i + 1] + Math.sin(frame + randomValues[i + 1]) * 0.03;
    }

    planeMesh.geometry.attributes.position.needsUpdate = true;

    const intersects = raycaster.intersectObject(planeMesh);
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

  // CREATE DAT.GUI
  const gui = new GUI();
  const planeFolder = gui.addFolder("Plane"); // create menu
  planeFolder.open(); // default open menu

  planeFolder.add(planeParameters, "width", 1, 500).onChange(generatePlane); // adds category
  planeFolder.add(planeParameters, "height", 1, 500).onChange(generatePlane);
  planeFolder
    .add(planeParameters, "widthSegments", 1, 100)
    .onChange(generatePlane);
  planeFolder
    .add(planeParameters, "heightSegments", 1, 100)
    .onChange(generatePlane);


  animate();

  addEventListener("mousemove", (event) => {
    mouse.x = (event.clientX / innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / innerHeight) * 2 + 1;
  });
};
