// Question #1: Turning Strings to URLs

// URLs cannot have spaces.Instead, all spaces in a string are replaced with % 20. Write an algorithm that replaces all spaces in a string with % 20.

// You may not use the replace() method or regular expressions to solve this problem.Solve the problem with and without recursion.

//     Example
// Input: "Jasmine Ann Jones"
// Output: "Jasmine%20Ann%Jones"

// no recursion for loop
function formatUrlForLoop(str) {
    var stringArray = str.split("");
    stringArray.forEach(char => {
        if (char === " ") {
            char = "%20"
            console.log(char);
        }
    });
    console.log(string);
    
    return stringArray.join("");
}

console.log(formatUrlForLoop("Jasmine Ann Jones"));

// no recursion foreach loop
function formatUrlForeachLoop(str) {
    var stringArray = str.split("");
    var formattedString = "";
    stringArray.forEach(char => {
        if (char === " ") {
            char = "%20";
        }
        formattedString += char;
    });
    return formattedString;
}

console.log(formatUrlForeachLoop("Jasmine Ann Jones"));


// recursion

function formatUrlRecursive(str) {
    let formattedUrl = (str[0] === " ") ? "%20" : str[0];
    return str.length > 1 
        ? formattedUrl += formatUrlRecursive(str.slice(1)) 
        : formattedUrl 
}

console.log(formatUrlRecursive("Jasmine Ann Jones"));