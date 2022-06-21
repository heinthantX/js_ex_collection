function catAndMouse(catA, catB, mouseC) {
  if (Math.abs(catA - mouseC) == Math.abs(catB - mouseC)) {
    return 'Mouse C';
  } else if (Math.abs(catA - mouseC) < Math.abs(catB - mouseC)) {
    return 'Cat A';
  } else {
    return 'Cat B';
  }
}

const result = catAndMouse(1, 3, 2);

console.log(result);
