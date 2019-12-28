// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

function averagePair(arr, num) {
    let i = 0;
    let j = arr.length - 1;
    if (1 >= arr.length) { return false; }

    while (i < arr.length && j >= 0) {
        if ((arr[i] + arr[j]) / 2 === num) {
            return true;
        } else if ((arr[i] + arr[j]) / 2 < num) {
            i++;
        } else if ((arr[i] + arr[j]) / 2 > num) {
            j--;
        }
    }
    return false;
}

console.log(averagePair([1, 2, 3], 2.5)) //true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) // false
console.log(averagePair([], 4)) // false
