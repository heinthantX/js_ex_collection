function sockMerchant(n, ar) {
  let pairs = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (ar[i] === ar[j] && i != j && ar[i]) {
        pairs++;
        ar[i] = null;
        ar[j] = null;
      }
    }
  }
  return pairs;
}

console.log(sockMerchant(15, [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]));
