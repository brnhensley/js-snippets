// compare two arrays to see if the second contains the square of each number in the first including duplicates,
// but order can be mixed up
// this solution doesn't work with negatives

const checkIfSame = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    }
    arr1.sort(function (a, b) { return a - b })
    arr2.sort(function (a, b) { return a - b })

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] ** 2 !== arr2[i]) {
            return false
        }
    }
    return true
}

// console.log(checkIfSame([4, 5, 1, 2, 3, 6], [16, 9, 36, 25, 4, 1]));

// Can handle negatives

const checkSame = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    }
    count1 = {}
    count2 = {}

    for (let num of arr1) {
        num = Math.abs(num)
        count1.hasOwnProperty(num) ? count1[num]++ : count1[num] = 1
    }
    for (let num of arr2) {
        num = Math.abs(num)
        count2.hasOwnProperty(num) ? count2[num]++ : count2[num] = 1
    }
    console.log(count1);
    console.log(count2);

    if (count1.length === count2.length) {
        for (var key in count1) {
            if (count1[key] !== count2[key**2]) {
                return false
            }
        }
    }
    return true
}

console.log(checkSame([-4, -5, -4, 2, 4, -6], [16, 16, 36, 25, 4, 16]));