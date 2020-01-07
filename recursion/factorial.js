// function that calculates a factorial of a number using recursion
// factorial of 4 = 4 * 3 * 2 * 1

// does not work for negative nums
function factorial(num) {
    return num <= 1 ? 1 : num * factorial(num - 1);
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));
console.log(factorial(9));
console.log(factorial(10));

// what's happening here

// function factorial(num) { // num = 4
//     if (num === 1) {
//         return num;
//     } else {
//         return num * factorial(num - 1); {  // num = 3
//             if (num === 1) {
//                 return num;
//             } else {
//                 return num * factorial(num - 1); { // num = 2
//                     if (num === 1) {
//                         return num;
//                     } else {
//                         return num * factorial(num - 1); { // num = 1
//                             if (num === 1) {
//                                 return num;   // This returns this time
//                             } else {
//                                 return num * factorial(num - 1)
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }