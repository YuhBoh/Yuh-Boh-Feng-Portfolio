import * as THREE from "three";

//Call this function everytime we need to randomize a plane's pattern.
export default function usePatternRandomizer() {
  function doPatternRandomizer( mesh, pos ) {

    // Delete old geometry
    mesh.geometry.dispose();

    // Create New geometry based on the old geomtries dimensions like:
    //.PlaneGeometry(500, 500, 50, 50); // width, height, width segment, height segment
    mesh.geometry = new THREE.PlaneGeometry(
        mesh.geometry.parameters.width,
        mesh.geometry.parameters.height,
        mesh.geometry.parameters.widthSegments,
        mesh.geometry.parameters.heightSegments
    );
      

    //Constants
    // const meshGeometry = mesh.geometry;
    // const meshPosition = meshGeometry.attributes.position;


    //Set position based on 'pos' parameter:
  switch (pos) {
    case 'front':
        console.log('Moving front');
        mesh.position.set(0, 0, 250); //(x,y,z)
        break;
    case 'back':
        console.log('Moving back');
        mesh.position.set(0, 0, -250); //(x,y,z)
        break ;
    case 'left':
    console.log('Moving left');
        mesh.position.set(-250, 0, 0); //(x,y,z)
        mesh.rotateY(Math.PI / 2);
        break ;
    case 'right':
        console.log('Moving right');
        mesh.position.set(250, 0, 0); //(x,y,z)
        mesh.rotateY(Math.PI / 2); //CHANGE VALUES!
        break ;
    case 'top':
        mesh.position.set(0, 250, 0); //(x,y,z)
        break ;
    case 'bot':
        mesh.position.set(0, -250, 0); //(x,y,z)
        break ;
    default:
        break;
    }


    // vertice position randomization
    const { array } = mesh.geometry.attributes.position;
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
    mesh.geometry.attributes.position.randomValues = randomValues;

    mesh.geometry.attributes.position.originalPosition = mesh.geometry.attributes.position.array;

    // UPDATE PLANE COLOR = PLANE COLOR
    const colors = [];
    for (let i = 0; i < mesh.geometry.attributes.position.count; i++) {
      colors.push(0, 0, 1); // default front color
    }

    mesh.geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(new Float32Array(colors), 3)
    );
  }
  return  doPatternRandomizer;
}
