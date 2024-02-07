//abc170_a variables.ts
#####################################
#####################################
import * as fs from 'fs';
const input = (fs.readFileSync("/dev/stdin", "utf8") as string)
const X = input.split(" ").map(Number)
console.log(X.findIndex(x=> x===0)+1);
#####################################
import * as fs from "fs";
const x = fs.readFileSync("/dev/stdin", "utf8").split(" ").map(item => parseInt(item));

console.log(solve(x)+1);

function solve(x: number[]): number {
    return x.findIndex((item) => item == 0)
}
#####################################
import * as fs from 'fs';
const input = (fs.readFileSync("/dev/stdin", "utf8") as string)
const ary = input.split(" ").map(Number)
const len = ary.length
let res = 0
for (let i = 0; i < len; i++) {
    if (ary[i] === 0) {
        res = i + 1
    }
}
console.log(res);
#####################################
import * as fs from "fs";
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input: string = fs.readFileSync(filePath).toString().split("\n")[0];
const X: number[] = input.split(' ').map(Number);

for (let i=0; i<5; i++) {
    if (X[i]==0) {
        console.log(i+1);
        break;
    }
}   
#####################################
