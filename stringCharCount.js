// foreach version
const forEachCharCount = (s) => {
    let count = new Object()
    chars = s.toLowerCase().split(" ").join("").split("") // deletes spaces

    chars.forEach(char => {
        if (!count.hasOwnProperty(char)) {
            count[char] = 1
        } else {
            count[char]++
        }
    });
    return count
}

console.log(forEachCharCount("I eat butts and drink butts"))

// for loop version

const forCharCount = (s) => {
    s = s.toLowerCase().split(" ").join("") // delete spaces
    let count = new Object();

    for (let i = 0; i < s.length; i++) {
        !count.hasOwnProperty(s[i]) ? count[s[i]] = 1 : count[s[i]]++;
    }

    return count;
}

console.log(forCharCount("HO HO HO merry Christmas"));

// for of loop

const forOfCharCount = (s) => {
    s = s.toLowerCase().split(" ").join('')
    let count = {};
    for (let char of s) {
        if (!count.hasOwnProperty(char)) {
            count[char] = 1
        } else {
            count[char]++
        }
    }
}

console.log(forCharCount("Butts Butts Butts"));
