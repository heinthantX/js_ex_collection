function staircase(n) {
  let output = '';
  for (let i = 1; i < n + 1; i++) {
    output += ' '.repeat(n - i) + '#'.repeat(i) + '\n';
  }
  console.log(output);
}

staircase(5);
