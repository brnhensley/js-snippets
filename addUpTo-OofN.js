// O(n)
function AddUpTo(n) {
    let total = 0
    for (let i = 1; i <= n; i++) {
        total += i
    }
    return total;
}

let time1 = performance.now();
AddUpTo(1000000000);
let time2 = performance.now();
console.log(`Method one Time : ${(time2 - time1) / 1000} seconds`);
