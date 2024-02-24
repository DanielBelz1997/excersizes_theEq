function max(...numbers) {
  let result = -Infinity;
  for (const num of numbers) {
    if (num > result) result = num;
  }
  return result;
}
