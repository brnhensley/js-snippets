// a recursive function that adds all numbers from 0 to the input number

function recursiveRange(num){
    if (num <= 1) return num;
    return num + recursiveRange(num - 1);
}

// SAMPLE INPUT/OUTPUT
console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55
