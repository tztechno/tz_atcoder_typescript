//abc092_a.ts
################################
[perfectly same as usage in js]
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
################################
################################
################################
################################
################################
const stdin = require('fs').readFileSync('/dev/stdin', 'utf8')
const [a, b, c, d] = stdin.split('\n').map(Number)
const t = a > b ? b : a
const bus = c > d ? d : c
console.log(t+bus)
################################
import * as fs from 'fs';
const input = fs.readFileSync("/dev/stdin", "utf8");
const main = (input: string) => {
  const [A, B, C, D] = [...input.trim().split('\n').map(Number)];
  console.log(Math.min(A,B) + Math.min(C,D));
}
main(input)
################################
import * as fs from "fs";
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input: string[] = fs.readFileSync(filePath, 'utf8').trim().split('\n'); 

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);
const d = parseInt(input[3]);

function min(a: number, b: number): number {
 return a < b ? a : b;
}

const ans = min(a, b) + min(c, d);
console.log(ans);
################################
[perfectly same as usage in js]
'use strict';
function main (input) {
    const lines = input.trim().split("\n");
    const A = parseInt(lines[0]);
    const B = parseInt(lines[1]);
    const C = parseInt(lines[2]);
    const D = parseInt(lines[3]);
    console.log(Math.min(A, B)+Math.min(C,D));
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
################################
