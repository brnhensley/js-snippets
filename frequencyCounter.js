// Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(x,y) {
    let xCount = {};
    let yCount = {};

    x = x.toString();
    y = y.toString();

    for (const digit of x) {
        xCount.hasOwnProperty(digit) ? xCount[digit]++ : xCount[digit] = 1;
    }
    for (const digit of y) {
        yCount.hasOwnProperty(digit) ? yCount[digit]++ : yCount[digit] = 1;
    }

    if (xCount.length === yCount.length) {
        for (const i in xCount) {
            if (xCount[i] !== yCount[i]) {
                return false;
            }
        }
    } else {
        return false;
    }
    return true;
}

console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false
