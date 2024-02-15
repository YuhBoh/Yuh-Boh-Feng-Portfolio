import * as THREE from "three";

//Call this function everytime we need to generate a new plane
export default function useGeneratePlane() {

    // 1 - CREATING MATERIALS
    const planeMaterial = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide, // color side, color both sides.
        flatShading: true,
        vertexColors: true,
    });
  
    // 2 - CREATING GEOMETRY
  const planeGeometry = new THREE.PlaneGeometry(500, 500, 50, 50); // width, height, width segment, height segment

  // 3 - CREATING THE MESH
  const mesh = new THREE.Mesh(planeGeometry, planeMaterial);

  // 4  - EXPORTING THE MESH
  return (mesh);
}