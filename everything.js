"use strict";
// Everything
// Analogous to the some method, arrays also have an every method. This one
// returns true when the given function returns true for every element in the array.
// In a way, some is a version of the || operator that acts on arrays, and every is
// like the && operator.

// 95

// Implement every as a function that takes an array and a predicate function
// as parameters. Write two versions, one using a loop and one using the some
// method.

const arr = [1, 2, 6];

/**
 *
 * @param {number} val
 */
const test = (val) => val > 0;

/**
 *
 * @param {[]} arr
 * @returns {boolean}
 */
const myVersion = (arr) => {
  const mu = [];
  for (const ar of arr) {
    if (ar < 0) {
      return false;
    } else {
      mu.push(ar);
    }
  }
  if (mu.length !== 0) {
    return true;
  }
};

console.log(arr.every(test));
