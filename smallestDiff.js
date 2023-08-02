/* Smallest Difference
Difficulty
Harder

Concepts
Algorithms, Runtime


Credit: Adapted from a problem in Cracking the Coding Interview, 6th Edition. Gayle Laakmann McDowell, Career Cup (Palo Alto, CA). 2015.

This is a short-length challenge, but requires some clever thinking.

Given two lists, find the smallest difference (subtraction) between any two nums.

For example, given the arrays:

[10, 20, 14, 16, 18]
[30, 23, 54, 33, 96]
The result would be 3, since 23 - 20 = 3 is the smallest difference of any pair of numbers in those lists.

Write a function that determines the smallest difference.
*/

function smallestDifference(arr1, arr2) {
    // Sort both arrays in ascending order
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
  
    let smallestDiff = Infinity;
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2
  
    while (i < arr1.length && j < arr2.length) {
      const diff = Math.abs(arr1[i] - arr2[j]);
      smallestDiff = Math.min(smallestDiff, diff);
  
      // Move the pointer for the array with the smaller element
      if (arr1[i] < arr2[j]) {
        i++;
      } else {
        j++;
      }
    }
  
    return smallestDiff;
  }
  
  // Test the function
  const arr1 = [10, 20, 14, 16, 18];
  const arr2 = [30, 23, 54, 33, 96];
  console.log(smallestDifference(arr1, arr2)); // Output: 3
  