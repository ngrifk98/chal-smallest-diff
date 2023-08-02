# Smallest Difference Challenge

This is a short-length coding challenge that requires some clever thinking. Given two lists of numbers, the task is to find the smallest difference between any two numbers in those lists.

## Challenge Description

You are given two arrays of integers. Your task is to write an efficient JavaScript function `smallestDifference(arr1, arr2)` that determines the smallest difference between any two numbers from the given arrays.

### Example

Given the arrays:

```javascript
arr1 = [10, 20, 14, 16, 18];
arr2 = [30, 23, 54, 33, 96];
```

The function `smallestDifference(arr1, arr2)` should return `3`, as the smallest difference between any pair of numbers in these lists is `3` (23 - 20 = 3).

## Function Signature

```javascript
function smallestDifference(arr1, arr2) {
  // Implementation here
}
```

## How to Run the Function

1. Open a JavaScript environment, such as the developer console in your web browser or a Node.js environment.

2. Copy the function implementation and paste it into the environment.

3. Create two arrays with integer elements and call the `smallestDifference` function, passing the two arrays as arguments.

4. The function will return the smallest difference between any two numbers in the given arrays.

## Constraints

- The input arrays `arr1` and `arr2` can have lengths in the range of 1 to 10^5.
- The integers in the arrays can range from -10^9 to 10^9.

## License

This code challenge is adapted from a problem in "Cracking the Coding Interview, 6th Edition" by Gayle Laakmann McDowell. The challenge was originally from Career Cup (Palo Alto, CA) in 2015. The code solution provided in this repository is available for public use without any license.

