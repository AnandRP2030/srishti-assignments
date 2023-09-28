const pattern2 = (num) => {
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(j + " ");
        }
        console.log("");
    }
}
pattern2(10);