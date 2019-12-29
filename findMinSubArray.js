// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

// time = O(n), space O(1)
function minSubArrayLen(arr, target) {
    let minLength = arr.length;
    let total = 0;
    let i = 0;
    let j = arr.length - 1;

    for (let x = 0; x < arr.length; x++) {
        total += arr[x];
    }

    if (total < target) {
        minLength = 0;
    } else {
        let min = Math.min(arr[i], arr[j]);
        while (total - min >= target) {
            let tempI = i;
            let tempJ = j;
            while (arr[tempI] === arr[tempJ] && tempI + 1 < tempJ - 1) {
                tempI++;
                tempJ--;
            }
            total -= min;
            arr[tempI] > arr[tempJ] ? j-- : i++;
            minLength--;
            min = Math.min(arr[i], arr[j]);
        }
    }
    return minLength;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 3, 4, 2, 1, 3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)) // 2 because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)) // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)) // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)) //  5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)) // 0
console.log(minSubArrayLen([3, 3, 3, 3, 3, 3], 5)) // 2 -> because any two is the smallest subarray