abc081_b.ts
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
import { readFileSync } from "fs";
const input: string = readFileSync("/dev/stdin", "utf8");
const n = input.split("\n")[0];
let a = input
  .split("\n")[1]
  .split(" ")
  .map((v) => Number(v));

let count = 0;
while (true) {
  const result = a.find((v) => v % 2 !== 0);
  if (result !== undefined) break;
  count += 1;
  a = a.map((v) => v / 2);
}
console.log(count);
##########################################
import * as fs from "fs";
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input: string = fs.readFileSync(filePath).toString();
const lines: string[] = input.split("\n");
const N: number = parseInt(lines[0], 10);
const A: number[] = lines[1].split(" ").map(Number);

let B = [...A]; 
let flag=1
for (let i = 0; i < N * 10; i++) {
  for (let j = 0; j < N; j++) {
    let bj = B[j];
    if (bj % 2 === 0) {
      B[j] = Math.floor(bj / 2); 
    } else {
      console.log(i); 
      flag=0
      break; 
    }
  }
  if (flag==0) {
    break;
  }
}
##########################################
[python]
N=int(input())
A=list(map(int,input().split()))
B=A
for i in range(N*10):
  for j in range(N):
    bj=B[j]
    if bj%2==0:
        B[j]=bj//2
    else:
        print(i)
        exit()
##########################################
