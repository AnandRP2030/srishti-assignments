function reverseNumberPattern(num) {
  for (let i = 0; i <= num; i++) {
    for (let j = 1; j <= num - i; j++) {
      process.stdout.write(j+ " ");
    }
    console.log("");
  }
}
reverseNumberPattern(5);
