// Minimum
// The previous chapter introduced the standard function Math.min that returns
// its smallest argument. We can build something like that now. Write a function
// min that takes two arguments and returns their minimum.

const min = function (...params) {
  let mini = params[0];
  for (let i = 0; params.length > i; i++) {
    if (params[i] < mini) {
      mini = params[i];
    }
  }
  console.log(mini);
};

min(5, 6, 9, 5, 2, 8);
