function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false;

  let keysA = Object.keys(a),
    keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

console.log(
  deepEqual(
    { value: 1, rest: { value: "1", rest: { value: 12, rest: {} } } },
    { value: 1, rest: { value: "1", rest: { value: 12, rest: {} } } }
  )
);
