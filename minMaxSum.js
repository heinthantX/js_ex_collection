function minMaxSum(arr) {
  let maxSum = 0;
  let minSum = Number.MAX_VALUE;
  for (let value of arr) {
    let sum = 0;
    for (let a of arr) {
      sum += a;
    }
    sum -= value;
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < minSum) {
      minSum = sum;
    }
  }

  console.log(minSum, maxSum);
}

minMaxSum([1, 3, 5, 7, 9]);
