abc074_b.ts
#######################################
const input: string[]
#######################################
#######################################
#######################################
#######################################
declare function require(x: string): any;

var input = require("fs").readFileSync("/dev/stdin", "utf8");
input = input.split("\n");

const n = +input[0];
const k = +input[1];
const x = input[2].split(" ").map((x:string)=>+x);


let result = 0;
for(const a of x){
	result += Math.min(a, Math.abs(a-k))*2;
}

console.log(result);
#######################################
import * as fs from "fs";

const [N, K, x]: string[] = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let ans = 0;
const devide_K = Math.floor(Number(K) / 2);

for (const i of x.split(" ")) {
  if (devide_K >= Number(i)) {
    ans += Number(i) * 2;
  } else {
    ans += (Number(K) - Number(i)) * 2;
  }
}

console.log(ans);

#######################################
import * as fs from "fs";  
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";  
const input: string[] = fs.readFileSync(filePath).toString().split("\n");  

const N = parseInt(input[0]);
const K = parseInt(input[1]);
const X = input[2].split(" ").map(Number);
let S = 0;
for (let i = 0; i < N; i++) {
  S +=Math.min(X[i], K - X[i]) * 2;
}
console.log(S);

#######################################
[error]
[Cannot find module 'readline-sync' or its corresponding type declarations.]

import * as readlineSync from 'readline-sync';

const N: number = parseInt(readlineSync.question());
const K: number = parseInt(readlineSync.question());

const inputA: string = readlineSync.question();
const X: number[] = inputA.split(' ').map(Number);

let S = 0;
for (let i = 0; i < N; i++) {
  S += Math.min(X[i], K - X[i]) * 2;
}
console.log(S);

#######################################
