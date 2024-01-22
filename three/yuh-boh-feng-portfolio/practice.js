function reverseStringWithoutReverse(inputString) {
  let reversedString = "";

  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }

  return reversedString;
}

// Example usage:
const originalString = "Hello, World!";
const reversedString = reverseStringWithoutReverse(originalString);

console.log(reversedString); // Outputs: '!dlroW ,olleH'
