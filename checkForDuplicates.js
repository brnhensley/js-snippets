// Frequency Counter / Multiple Pointers
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any
// duplicates among the arguments passed in.You can solve this using the frequency counter pattern OR the multiple pointers pattern.

//     Restrictions:
//     Time - O(n)

// frequency counter version
// time O(n), space O(n)
function areThereDuplicates() {
    let count = {};

    if (1 >= arguments.length) {
        return false;
    }

    for (let i in arguments) {
        if (count.hasOwnProperty(arguments[i])) {
            return true;
        } else {
            count[arguments[i]] = 1;
        }
    }
    return false;
}

// console.log(areThereDuplicates(1, 2, 3)); // false
// console.log(areThereDuplicates(1, 2, 2)); // true
// console.log(areThereDuplicates('a', 'b', 'c', 'a')); //true


// multiple pointers version
// time O(n), space O(n)
function areThereDuplicatesMultPointers() {
    let args = Object.values(arguments);
    typeof(args[0]) === Number ? args.sort(function (a, b) { return a - b }) : args.sort()

    let i = 0;
    let j = 1;

    if (1 >= args.length) {
        return false;
    }

    while (j <= args.length) {
        if (args[i] === args[j]) {
            return true;
        } else {
            i++;
            j++;
        }
    }
    return false;
}

console.log(areThereDuplicatesMultPointers(1, 2, 3)); // false
console.log(areThereDuplicatesMultPointers(1, 2, 2)); // true
console.log(areThereDuplicatesMultPointers('a', 'b', 'c', 'a')); //true