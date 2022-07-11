function kangaroo(x1, v1, x2, v2) {
  let p1 = x1;
  let p2 = x2;
  for (let i = 1; i < 10000; i++) {
    if (p1 === p2) {
      return 'YES';
    }
    p1 += v1;
    p2 += v2;
  }
  return 'NO';
}

console.log(kangaroo(0, 3, 4, 2));
