// recursive Fibonacci sequence
//  function accepts a number and returns the nth number in the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.


function fib(num) {
    let fibArr = [1, 1];
    if (num <= 2) return 1;

    function helper(x) {
        if (num === x) {
            return fibArr[x - 1];
        } else {
            fibArr.push(fibArr[x - 2] + fibArr[x - 1]);
            return helper(x + 1);
        }
    }
    return helper(2);
}

console.log(fib(3)) // 2
console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465