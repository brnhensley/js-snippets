// O(1)
function AddUpToo(n) {
    return n * (n + 1) / 2;
}

let time3 = performance.now();
AddUpToo(1000000000);
let time4 = performance.now();
console.log(`Method two Time : ${(time4 - time3) / 1000} seconds`);