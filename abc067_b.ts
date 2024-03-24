abc067_b.ts
#########################################
#########################################
#########################################
#########################################
#########################################
import { readFileSync } from 'fs';

const [nk, l] = readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
const k: number = +nk.split(' ')[1];
const result = l
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a)
  .slice(0, k)
  .reduce((sum, e) => sum + e);
console.log(result);
#########################################
import * as fs from "fs";

const i = fs.readFileSync("/dev/stdin", "utf8").split("\n");

const [n, k] = i[0].split(" ").map((i) => parseInt(i));
const l: number[] = i[1]
    .split(" ")
    .map((i) => parseInt(i))
    .sort((a, b) => b - a);

let ans = 0;
for (let i = 0; i < k; i++) {
    ans += l[i];
}

console.log(ans);

#########################################
{
  const main = (input: string[][]): void => {
    const [n, x] = input[0].map(Number)
    const numAry = []
    for (let i = 0; i < n; i++) {
      numAry.push(Number(input[1][i]))
    }
    numAry.sort((a, b) => (a > b ? -1 : 1))
    let ans = 0
    for (let i = 0; i < x; i++) {
      ans += numAry[i]
    }
    console.log(ans)
  }

  const __lines: string[] = []
  const __reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  __reader.on('line', (line: any) => {
    __lines.push(line)
  })
  __reader.on('close', () => {
    const arg = __lines.map((s) => s.split(' '))
    main(arg)
  })
}

#########################################
import * as fs from "fs";

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").split("\n");

const [n, k] = input[0].split(" ").map(Number);
const L = input[1].split(" ").map(Number).sort((a, b) => b - a);
const sum = L.slice(0, k).reduce((acc, curr) => acc + curr, 0);

console.log(sum);
#########################################
import * as fs from "fs";
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input0: string = fs.readFileSync(filePath, "utf-8").split("\n")[0];
const [n, k] = input0.split(" ").map(Number); // Splitting and converting to numbers

const input1: string = fs.readFileSync(filePath, "utf-8").split("\n")[1];
let L = input1.split(" ").map(Number); // Splitting and converting to numbers
L.sort((a, b) => b - a); // Sorting in descending order

const sum = L.slice(0, k).reduce((acc, curr) => acc + curr, 0); // Taking first k elements and calculating sum
console.log(sum);
#########################################
