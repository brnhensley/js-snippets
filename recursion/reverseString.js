// reverse a string with a recursive function

function reverse(string) {
    let revString = string[string.length - 1];
    if (string.length > 1) {
        revString += reverse(string.slice(0, string.length - 1));
    }
    return revString;
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'