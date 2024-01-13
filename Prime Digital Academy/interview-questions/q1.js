// ## Sum until One Digit

// The Question:

// > Given a non-negative integer num, repeatedly add all its digits until the result has only one digit. For example: Given `num = 38`, the process is like: `3 + 8 = 11`, `1 + 1 = 2`. Since 2 has only one digit, return it.

// Example clarifying questions:

// - Will the input always be a positive integer? Yes.
// - Can I return a number or string? A number please.

// Example test cases:

// ```
// 38 -> 2
// 12 -> 3
// 102 -> 3
// 1000000002 -> 3
// 989 -> 8
// ```

// Lessons:

// - This is potentially a good case for recursion
// - If you use `.toString()`, what happens if this is a really large number when you run it? At some point, it says `NaN` which is a result of the fact that `.toString()` will use scientific notation and you'll end up trying to add a `.` to your number. Here is an example on JSFiddle: https://jsfiddle.net/lukeschlangen/muq0jyk5/6/
// - Can you rewrite it as a while loop?

// Example Solution:

// ```JavaScript
// const sumUntilOne = (number) => {
//   const numberAsString = String(number);
//   let newSumNumber = 0;
//   for (let i = 0; i < numberAsString.length; i++) {
//     newSumNumber += Number(numberAsString[i]);
//   }

//   if (newSumNumber > 9) {
//     return sumUntilOne(newSumNumber);
//   } else {
//     return newSumNumber;
//   }
// }

// console.log(sumUntilOne(3839));
// ```

// Rewritten as a while loop:

// ```JavaScript
// const sumUntilOne = (number) => {
//   while (number > 9) {
//     const numberAsString = String(number);
//     number = 0;
//     for (let i = 0; i < numberAsString.length; i++) {
//       number += Number(numberAsString[i]);
//     }
//   }
//   return number;
// }

// console.log(sumUntilOne(43568767765765677));
// ```
