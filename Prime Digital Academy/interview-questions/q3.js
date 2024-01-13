// ## Flatten Array

// The Question:

// > Create a function to flatten an array of numbers. So if you're given and array like `[1, [2, 3], [4, [5]], 6]` , your function should return a "flat" array like `[1, 2, 3, 4, 5, 6]`.

// Example clarifying questions:

// - Will the array only contain numbers and arrays of numbers? Yes.
// - Is there a limit to how deeply nested the array can be? No.
// - Can the array include empty arrays? Yes.
// - Can I use the built in Array.flat() method? No.

// Example test cases:

// `[1, 2, 3, 4]` --> `[1, 2, 3, 4]`
// `[1, [2, [3]], 4]` --> `[1, 2, 3, 4]`
// `[1, [], [2, []], 3, 4]` --> `[1, 2, 3, 4]`
// `[]` --> `[]`

// Example solution:

// ```js
// const flatten = (arr) => {
//   // Initialize a "flat" array
//   let flatArray = [];
//   // Loop through our input array
//   for (let item of arr) {
//     // If the item is an array...
//     if (Array.isArray(item)) {
//       // Flatten out the nested array into a list of items
//       let flattenedItems = flatten(item);
//       // and add those items to the flat array
//       flatArray.push(...flattenedItems);
//     }
//     else {
//       // Otherwise just add the item to the array
//       flatArray.push(item);
//     }
//   }
//   return flatArray;
// }
// ```
