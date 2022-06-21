let array = [1, 3, 2, 6, 9, 1, 100, 122, 122, 100, 3, 110];

function secondBiggestNumber(arr) {
  let biggestNum = 0;
  let secondBiggestNum = -1;

  for (let value of arr) {
    if (value > biggestNum) {
      secondBiggestNum = biggestNum;
      biggestNum = value;
    } else if (value < biggestNum && value > secondBiggestNum) {
      secondBiggestNum = value;
    }
  }
  console.log('Second biggest Number', secondBiggestNum);
}

secondBiggestNumber(array);
