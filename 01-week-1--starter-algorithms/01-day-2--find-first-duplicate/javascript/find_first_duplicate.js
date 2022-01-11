// Given an Array, find the first duplicate value that occurs. If there are no duplicates, return -1.
// Input: [2, 1, 3, 3, 2]
// Output: 3
// Input: [1, 2, 3, 4]
// Output: -1

//p1= i[0]
//p2=i[1]

function findFirstDuplicate(arr) {
    for (i = 0; i < arr.length; i ++) {
        if (arr[i] === arr[i + 1]) {
          return arr[i];
        }
      }
      return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

//Step 1: Create an empty array
//Step 2: Iterate through the input array
//Step 3: After each pass through array, return the first duplicate is found
//Step 4: if no duplicate found, return -1


//Explanation
//We used a for loop because it's a logical way to check each value in an array
//We used i + 1 to compare the value one place to the right of i for equality
//if yes, returned value of i and the loop ends (break;)
//if not, continued through loop until i was >= length of array, then return -1