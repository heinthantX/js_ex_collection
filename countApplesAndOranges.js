function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const applesPosition = apples.map((apple) => a + apple);
  const orangesPosition = oranges.map((orange) => b + orange);
  const applesOnHouse = applesPosition.filter((x) => x >= s && x <= t);
  const orangesOnHouse = orangesPosition.filter((x) => x >= s && x <= t);
  console.log(applesOnHouse.length);
  console.log(orangesOnHouse.length);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
