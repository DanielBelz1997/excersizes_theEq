function arrayToList(arr) {
  let list = {};

  for (let i = 0; arr.length > i; i++) {
    if (i > 0) {
      list = {
        ...list,
        ...{ value: arr[i], rest: list },
      };
    } else {
      Object.assign(list, {
        value: arr[i],
        rest: {},
      });
    }
  }

  return list;
}

console.log(arrayToList([1, 2, 3, 4, 5, 6]));
