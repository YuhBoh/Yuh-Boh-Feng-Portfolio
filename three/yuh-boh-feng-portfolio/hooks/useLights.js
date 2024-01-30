import * as THREE from "three";

// CREATING/CALLING LIGHT
export default function useLights(direction) {
  switch (direction) {
    case frontLight:
      direction.position.set(0, 0, 1); // x, y, in front of object;
      break;
    case backLight:
      direction.position.set(0, 0, -1); // light aims backwards
      break;
    case botLight:
      direction.position.set(0, 1, 0); // light aims down;
      break;
    case topLight:
      direction.position.set(0, -1, 0); // light aims up
      break;
    case leftLight:
      direction.position.set(1, 0, 0); // light aims left
      break;
    case rightLight:
      direction.position.set(-1, 0, 0); // light aims right
      break;
  };
};
