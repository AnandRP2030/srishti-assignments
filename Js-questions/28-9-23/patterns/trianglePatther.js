const trianglePattern = (num) => {
    for (let i = 1; i <= num * 2 -1; i++) {
        if (i <= num) {
            for (let j = 1; j <= i ; j++) {
                process.stdout.write(j+" ");
            }
        }else {
            for (let j = 1; j <= (num * 2)  - i; j++){
                process.stdout.write(j+" ");
            }
        }
        console.log("");
    }
}
trianglePattern(5)