import * as fs from "fs";
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const S: string = fs.readFileSync(filePath).toString().split("\n")[0];
    
const [a, b] = input[0].split(' ').map(Number);
const [c, d] = input[1].split(' ').map(Number);

const ans = a * d - b * c;
console.log(ans);
