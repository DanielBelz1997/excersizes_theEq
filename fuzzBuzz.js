function fuzzBuzz() {
  for (let i = 1; 100 > i; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzBuzz");
      continue;
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log("buzz");
      continue;
    } else if (i % 3 === 0 && i % 5 !== 0) {
      console.log("fizz");
      continue;
    }
    console.log(i);
  }
}

fuzzBuzz();
