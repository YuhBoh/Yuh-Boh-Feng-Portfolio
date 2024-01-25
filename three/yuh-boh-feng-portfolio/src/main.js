import * as THREE from "three";
import { GUI } from "dat.gui";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import gsap from "gsap";
import { forwardMesh } from "./mesh-sides/forwardMesh";

const scene = new THREE.Scene();
const frontMesh = forwardMesh();
scene.add(frontMesh);