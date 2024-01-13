// ********************************************************************//
// CONTROL FLOW: How Do We Have the Power to
//               Make Our Computers Work for Us!
  // We have the power to enable our code to 
  // make decisions.
  // Tools at our disposal!
  // 1. Conditionals! if/else logic.
    // * Also: Switch statements.
  // 2. Loops!
  // 3. Functions!

let sports = [
  {
    name: 'Tennis',
    awesomeLevel: 9
  },
  {
    name: 'Archery',
    awesomeLevel: 5
  },
  {
    name: 'Soccer',
    awesomeLevel: 8
  }
];

for (let sport of sports) {
  console.log(sport);
}

let animals = [
  {
    name: 'Whale',
    awesomeLevel: 10
  },
  {
    name: 'Penguin',
    awesomeLevel: 7
  },
  {
    name: 'Tiger',
    awesomeLevel: 7
  }
];

// Declaring a function named filterToAwesomeLevel.
  // INPUTS:
    // things: array of objects, where each object has
    //         an awesomeLevel property
    // levelValue: number, we'll "keep" things whose
    //             awesomeLevel property is above this value
  // OUTPUTS:
    // an array containing zero or more objects whose
    // awesomeLevel property was higher than the levelValue parameter
function filterToAwesomeLevel (things, levelValue) {
  let filteredThings = [];
  // What's going on here?
    // 1. Declaring variable called filteredThings
    // 2. Assigning the value of empty array to filteredThings
  
  // Loop (or "iterate") through things, which is a parameter
  // of this function that we expect to be an array.
  for (let thing of things) {
    // Compare the current thing's aweseomLevel property against
    // the value of the levelValue parameter. If the current thing's
    // awesomeLevel is HIGHER than levelValue, run the code on Line 69.
    if (thing.awesomeLevel > levelValue) {
      filteredThings.push(thing);
    }
  }

  return filteredThings;
}

console.log('Expect tennis and soccer objects:', filterToAwesomeLevel(sports, 7));

// Pod 4
console.log('1.');
let firstNumber = 4;
let secondNumber = '2';

let thirdNumber = theDivider(firstNumber, secondNumber);

console.log('thirdNumber after step 1:', thirdNumber);

function theDivider(numberOne, numberTwo) {
  numberOne / numberTwo;
}