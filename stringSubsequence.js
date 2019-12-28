// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

function isSubsequence(s1, s2) {
    let i = 0;

    for (let j = 0; j < s2.length; j++) {
        if (s1[i] === s2[j]) {
            i++;
        }
    }

    return i === s1.length ? true : false;
}

console.log(isSubsequence('hello', 'hello world'))  // true
console.log(isSubsequence('sing', 'sting'))         // true
console.log(isSubsequence('abc', 'abracadabra'))    // true
console.log(isSubsequence('abc', 'acb'))            // false (order matters)
