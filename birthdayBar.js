function birthdayBar(arr, pairValue, pairCount) {
  let pairedCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    if (i + (pairCount - 1) < arr.length) {
      for (let x = 1; x < pairCount; x++) {
        sum += arr[i + x];
      }
    }

    if (sum === pairValue) {
      pairedCount++;
    }
  }

  return pairedCount;
}

let choArray = [1, 3, 2, 4, 6, 8, 2, 2];

const result = birthdayBar(choArray, 4, 2);
console.log(result);
