// Flattening
// Use the reduce method in combination with the concat method to “flatten”
// an array of arrays into a single array that has all the elements of the original
// arrays.

arrayOfArrays = [
  [1, 2, 3, 3, 5, 4],
  [8, 9, 45, 7, 656, 8, 8, 9, 88, 87],
  [6, 566, 4565, 65, 6656, 879, 87, 999, 899, 898],
];

const newArray = arrayOfArrays.reduce((a, b) => {
  return a.concat(b);
});

console.log(newArray);
