let array = [1, 3, 2, 6, 9, 1, 100, 122, 122, 100, 3];

function reverse(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

let reversedArray = reverse(array);
console.log(reversedArray);
