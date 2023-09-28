const arr = [1, 2, 43, 230, 89, 100, -4, 0];
const findMaxValue = (arr) => {
    if (arr.length == 0){
        console.log("Array is empty");
        return;
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log("Maximum value in the given array", max);
    return max;
}
findMaxValue(arr)