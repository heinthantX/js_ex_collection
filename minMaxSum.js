function minMaxSum(arr) {
  let max = arr[0];
  let min = arr[0];
  let sum = 0;
  for (let value of arr) {
    sum += value;

    if (value > max) {
      max = value;
    }
    if (value < min) {
      min = value;
    }
  }
  let maxSum = sum - min;
  let minSum = sum - max;

  console.log(minSum, maxSum);
}

minMaxSum([1, 3, 5, 7, 9]);
