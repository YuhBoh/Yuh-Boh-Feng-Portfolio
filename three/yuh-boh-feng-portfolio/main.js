import * as THREE from "three";
import { GUI } from "dat.gui";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import gsap from "gsap";
import { planeMesh } from "./src/mesh-sides/planeMesh.js";
import { leftwardMesh } from "./src/mesh-sides/leftwardMesh.js"

const scene = new THREE.Scene();
let frontPlane = planeMesh();
let backPlane = planeMesh();
let leftPlane = leftwardMesh();
let rightPlane = planeMesh();
let topPlane = planeMesh();
let bottomPlane = planeMesh();

console.log(frontPlane);


scene.add(frontPlane, leftPlane);
