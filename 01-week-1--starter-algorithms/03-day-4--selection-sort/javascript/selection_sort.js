// Sort an Array of numbers using selection sort. 
// The selection sort algorithm sorts an array by repeatedly finding the minimum element (lowest value) in the input Array
// and then putting it at the correct location in the sorted Array.
// Input: [3, -1, 5, 2]

// Output: [-1, 2, 3, 5]
function selectionSort(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    let minPos = i;
     for ( let j = i + 1)
   }
   
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Step 1 − Set MIN to arr[0]
// Step 2 − Search the minimum element in the list
// Step 3 − Swap with value at location MIN
// Step 4 − Increment MIN to point to next element
// Step 5 − Repeat until list is sortedn

