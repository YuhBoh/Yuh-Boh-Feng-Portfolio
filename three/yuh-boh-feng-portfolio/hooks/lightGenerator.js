import * as THREE from "three";

export default useLights() {
  function doLight(directon) {
    const scene = new THREE.Scene();

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

  }
  return doLight
}
