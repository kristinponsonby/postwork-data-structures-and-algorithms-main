// Find the nth element in the Fibonacci series. The Fibonacci sequence starts with a 0 followed by a 1.
// After that, every value is the sum of the two values preceding it. 
///Here are the first seven values as an example: 0, 1, 1, 2, 3, 5, 8, 13, 22, 55,

// ```
// Input: 0 
// Output: 0

// 0,1 
// 0 + 1 = 1
// 1, 1
// 1 + 1 2

// Input: 2
// Output: 1
function fibonacci(num) {
  // type your code here
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;
//
// Please add your pseudocode to this file
// And a written explanation of your solution
