// create a function that takes in a non negative integar and return all powers of 2 ranging from 0 to n

// 0 -> [1]
// 1 -> [1, 2]

// create function
// initialize empty arr
// for loop 2**n unshift
// until n === 0
// return arr

let arr = [];
function nPower(n) {
  for (let i = n; i >= 0; i--) {
    let num = 2 ** i;
    arr.unshift(num);
  }
  return arr;
}

console.log(nPower(2));
