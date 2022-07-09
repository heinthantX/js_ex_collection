function sockMerchant(n, ar) {
  let pairs = 0;

  for (let i = 0; i < n; i++) {
    if (!ar[i]) continue;
    for (let j = i + 1; j < n; j++) {
      if (!ar[j]) continue;
      if (ar[i] === ar[j]) {
        pairs++;
        ar[i] = null;
        ar[j] = null;
      }
    }
  }
  return pairs;
}

console.log(sockMerchant(15, [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]));
