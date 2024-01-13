// ## Fibonacci

// The Question:

// > The Fibonacci number sequence is created by starting with 1, 1, and then adding the previous two numbers together. It's starts like:

// ```
// 1, 1, 2, 3, 5, 8, 13, 21, 34 ...
// ```

// Write a program that can find the nth Fibonacci number.

// Example clarifying questions:

// - Will the input always be a positive integer? Yes.

// Example test cases:

// ```
// 1 -> 1
// 2 -> 1
// 3 -> 2
// 4 -> 3
// 5 -> 5
// 6 -> 8
// ```

// Lessons:

// - Fibonacci is the classical example for recursion
// - What happens if this is a really large number when you run it? At some point, it says `Uncaught RangeError: Maximum call stack size exceeded` which is really a result of the maximum stack size. Meaning, it has to call itself so many times that chrome or your environment says "No, this is too deep of a stack trace." Think, stack overflow. This is a potential issue with any recursive function: https://stackoverflow.com/a/7828803/3644991
// - Here is an example of the recursive function that works for a small number, but errors out for a big one: https://jsfiddle.net/lukeschlangen/5huL6zsg/5/
// - Here is an example of the looping function that works for any size number, but large numbers will take a long long time to run: https://jsfiddle.net/lukeschlangen/aegmLwe7/4/ Although, at a certain point, it will take forever to run or JavaScript will just return `Infinity`.

// Example Solution:

// ```JavaScript
// const recursiveFibonacci = (n) => {
//   if (n <= 0) {
//     return 0;
//   } else if (n === 1) {
//     return 1;
//   } else {
//     return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
//   }
// };

// console.log(recursiveFibonacci(68897));
// ```

// Rewritten as a for-loop:

// ```JavaScript
// const loopingFibonacci = (n) => {

//  let fibo = 1;
//  let fiboPrev = 1;
//   if (n <= 0) {
//     return 0;
//   } else if (n === 1) {
//     return 1;
//   } else {
//    for(let i = 2; i < n; i++){
//     let temp = fibo;
//     fibo += fiboPrev;
//     fiboPrev = temp;
//    }
//    return fibo;
//   }
// }

// console.log(loopingFibonacci(68897));
// ```
