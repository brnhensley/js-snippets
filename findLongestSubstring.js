// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
// Time Complexity - 0(n)

function findLongestSubstring(str) {
    let count = 0;
    let len = str.length;
    let i = 0;
    let j = 0;
    let frequency = {};

    if (len <= 1) { return len }

    while (count < len - i) {
        if (frequency[str[j]]) {
            count = Math.max(Object.keys(frequency).length, count);
            while (str[i] !== str[j] && i < len - 1) {
                i++;
            }
            i++;
            j = i;
            frequency = {};
        } else {
            frequency[str[j]] = 1;
            if (j < len - 1) { j++ }
        }
    }
    return count;
}

console.log(findLongestSubstring('abca'))               // 3
console.log(findLongestSubstring(''))                   // 0
console.log(findLongestSubstring('rithmschool'))        // 7
console.log(findLongestSubstring('thisisawesome'))      // 6
console.log(findLongestSubstring('thecatinthehat'))     // 7
console.log(findLongestSubstring('bbbbbb'))             // 1
console.log(findLongestSubstring('longestsubstring'))   // 8
console.log(findLongestSubstring('thisishowwedoit'))    // 6


// better solution

// function findLongestSubstring(str) {
//     let longest = 0;
//     let seen = {};
//     let start = 0;

//     for (let i = 0; i < str.length; i++) {
//       let char = str[i];
//       if (seen[char]) {
//         start = Math.max(start, seen[char]);
//       }
//       // index - beginning of substring + 1 (to include current in count)
//       longest = Math.max(longest, i - start + 1);
//       // store the index of the next char so as to not double count
//       seen[char] = i + 1;
//     }
//     return longest;
//   }