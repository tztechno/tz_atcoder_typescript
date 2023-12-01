const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n")[0];

const n = Math.floor(input.length / 2);
const ans = input.charAt(n);
console.log(ans);
