// O(1n)
const countUniqueValuesWithArray = (array) => {
    let unique = []
    for (let num of array) {   // iterates over the array
        if (!unique.includes(num)) {
            unique.push(num)
        }
    }
    return unique.length
}

console.log(countUniqueValuesWithArray([1, 1, 1, 1, 1, 1, 1]));
console.log(countUniqueValuesWithArray([1, 1, 1, 1, 1, 1, 1, 2]));
console.log(countUniqueValuesWithArray([1, 1, 2, 4, 5, 5, 5, 12]));
console.log(countUniqueValuesWithArray([]));

// O(2n)
const countUniqueValuesWithObject = (array) => {
    let unique = {}
    for (let num of array) {        // iterates over the array O(n)
        if (!unique.hasOwnProperty(num)) {
            unique[num] = 1
        }
    }
    return Object.keys(unique).length  // This iterates over the object and creates an array  O(n)?
}
console.log(countUniqueValuesWithObject([1, 1, 1, 1, 1, 1, 1]));
console.log(countUniqueValuesWithObject([1, 1, 1, 1, 1, 1, 1, 2]));
console.log(countUniqueValuesWithObject([1, 1, 2, 4, 5, 5, 5, 12]));
console.log(countUniqueValuesWithObject([]));


// multiple pointer version also O(n)
// mutates the array
// only works on sorted arrays

const countUniqueValuesMultPointers = (array) => {
    let i = 0
    let j = 1

    while (j < array.length) {
        if (array[i] === array[j]) {
            j++
        } else {
            i++
            array[i] = array[j]
        }
    }
    return j > array.length ? 0 : i + 1;
}

console.log(countUniqueValuesMultPointers([1, 1, 1, 1, 1, 1, 1]));
console.log(countUniqueValuesMultPointers([1, 1, 1, 1, 1, 1, 1, 2]));
console.log(countUniqueValuesMultPointers([1, 1, 2, 4, 5, 5, 5, 12]));
console.log(countUniqueValuesMultPointers([]));