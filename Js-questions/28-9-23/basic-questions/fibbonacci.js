// 3.Generate and print the first 10 numbers in the fibannoci sequence using for loop
const printFibonacci = (limit) => {
  if (limit == 1) {
    console.log(limit);
    return;
  }

  if (limit == 2) {
    console.log(0, 1);
    return;
  }

  let num1 = 0;
  let num2 = 1;
  console.log(num1)
  console.log(num2)
  for (let i = 2; i <= limit; i++) {
    let sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    console.log(sum, " ");
  }
};
printFibonacci(30);
