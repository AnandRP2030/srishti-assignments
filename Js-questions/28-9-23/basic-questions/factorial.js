// 2.write a function to calculate the factorial of a given number using a for loop

const findFactorial = (num) => {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    console.log(`Factorial of ${num} is ${factorial}`);
    return factorial;
}
findFactorial(0)