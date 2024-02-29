// Your own loop
// Write a higher-order function loop that provides something like a for loop
// statement. It takes a value, a test function, an update function, and a body
// function. Each iteration, it first runs the test function on the current loop value
// and stops if that returns false. Then it calls the body function, giving it the
// current value. Finally, it calls the update function to create a new value and
// starts from the beginning.
// When defining the function, you can use a regular loop to do the actual
// looping.

const test = (val) => {
  if (val > 5) return val;
};

const update = (val) => {
  return val * 4;
};

const loop = (value, test, update) => {
  let newme = [];
  for (let val of value) {
    const passed = test(val);
    if (!passed) {
      continue;
    }
    val = update(val);
    newme.push(val);
  }
  return newme;
};

console.log(
  loop([1, 2, 3, 4, 5, 6, 5, 4, 8, 9, 7, 9, 8, 78, 50], test, update)
);
