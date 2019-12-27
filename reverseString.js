// O(n)
function reverseOne(s) {
    return s.split("").reverse().join("");
}

console.log(reverseOne("Built in methods")
);

// O(n)
function reverseTwo(s) {
    output = ""
    for (let i = s.length - 1; i >= 0; i--) {
        output += s[i]
    }
    return output
}

console.log(reverseTwo("For loop with no array"));
