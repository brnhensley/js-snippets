// recursion palindrone checker

function isPalindrome(s) {
    function reverse(string) {
        let revString = string[string.length - 1];
        if (string.length > 1) {
            revString += reverse(string.slice(0, string.length - 1));
        }
        return revString;
    }
    let revString = reverse(s.toLowerCase());
    return revString === s.toLowerCase() ? true : false;
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false
