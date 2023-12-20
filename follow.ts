import * as fs from "fs";
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input: string = fs.readFileSync(filePath).toString().split("\n")[0];
    
const [A, B] = input.split(' ').map(Number);
const XB = 2*A+100

console.log(XB-B);
