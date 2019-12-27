const checkAnagram = (s1, s2) => {
    let count1 = {}
    let count2 = {}
    for (let char of s1.toLowerCase()) {
        count1[char] ? count1[char]++ : count1[char] = 1
    }
    for (let char of s2.toLowerCase()) {
        count2[char] ? count2[char]++ : count2[char] = 1
    }

    if (count1.length === count2.length) {
        for (let key in count1) {
            if (count1[key] !== count2[key]) {
                return false
            }
        }
    } else {
        return false
    }
    return true
}

console.log(checkAnagram("buttholeplay", "playholebutt"));
console.log(checkAnagram("Wholetthedogsout", "whowhowhowhowhow"));
