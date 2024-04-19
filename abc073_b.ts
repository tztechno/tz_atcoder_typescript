abc073_b.ts
#######################################
#######################################
#######################################
#######################################
import * as fs from 'fs';

const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n: number = +args[0];
let ans: number = 0;
for (let i = 1; i <= n; i++) {
    const l: number = +args[i].split(' ')[0];
    const r: number = +args[i].split(' ')[1];
    ans += r - l + 1;
}
console.log(ans);

#######################################
"use strict";

main(require("fs").readFileSync("/dev/stdin", "utf8"));

function main(input) {
  const [[groupCount], ...groups] = input.trim().split("\n").map(s => s.split(" ").map(Number));

  const ans = groups.reduce((p, [from, to]) => (to - from + 1 + p), 0);
  console.log(ans);
}
#######################################
import * as fs from 'fs';
const input = fs.readFileSync("/dev/stdin", "utf8");
const main = (input: string) => {
  const [N, ...seat] = [...input.trim().split('\n')]
  let total = 0;
  for(let i = 0; i < +N; i++) {
    const p = Math.abs(seat[i].split(' ').map(Number).reduce((p,c) => p - c)) + 1
    total += p
  }
  console.log(total)
}
main(input)
#######################################
[MY AC (Node.js)]
[let [l,r] = input[i+1].split(' ').map(Number);]

import * as fs from "fs";
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input: string[] = fs.readFileSync(filePath, 'utf8').trim().split('\n'); 
const n = parseInt(input[0]);

let t = 0
for (let i = 0; i < n; i++) {
    let [l,r] = input[i+1].split(' ').map(Number);
    t+=r-l+1;
}
console.log(t); 
#######################################
