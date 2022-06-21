let array = [1, 3, 2, 6, 9, 6, 1, 100, 122, 122, 3];

function biggestNumber(arr) {
  let biggestNum = 0;
  for (let value of arr) {
    if (biggestNum < value) {
      biggestNum = value;
    }
  }
  console.log('Biggest Number', biggestNum);
}

biggestNumber(array);
