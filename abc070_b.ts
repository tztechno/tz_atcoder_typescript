abc070_b.ts
##############################
スペースなら.split(" ")、改行なら.split("\n")
const input: number[] = fs.readFileSync(filePath, "utf-8").trim().split(" ").map(Number);
##############################
##############################
##############################
##############################
##############################
import * as fs from 'fs';
const input = fs.readFileSync("/dev/stdin", "utf8");
const main = (input: string) => {
  const [A, B, C, D] = [...input.trim().split(' ').map(Number)]
  const min = Math.min(B,D) - Math.max(A,C)
  console.log(min > 0 ? min : 0)
}
main(input)
##############################
import * as fs from 'fs';

const input = fs.readFileSync("/dev/stdin", "utf8");
const [a,b,c,d] = input.split(" ").map(Number);

const low = Math.max(a,c);
const up = Math.min(b,d);

const time = Math.max(0,up-low);
console.log(time);
##############################
import * as fs from "fs";
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input: number[] = fs.readFileSync(filePath, "utf-8").trim().split(" ").map(Number);
const [a, b, c, d]: number[] = input;
const t: number = Math.max(Math.min(b, d) - Math.max(a, c), 0);
console.log(t);
##############################
