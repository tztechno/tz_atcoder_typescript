//abc169_a multiplication.ts
################################
################################
import * as fs from "fs"
const foo = fs.readFileSync("/dev/stdin", "utf8")
const [a,b] = foo.split(" ")
console.log(a*b)
################################
export function solve(input: string) {
  const [A, B] = input.split(/\s/).map(Number);
  return A * B;
}
if (!process.env.VITEST) console.log(solve(require("fs").readFileSync(0, "utf8").trim()).toString());
################################
function a000(input: string) {
    const [a, b]: number[] = input.trim().split(' ').map(s => parseInt(s, 10))
    console.log(a * b)
}
a000(require("fs").readFileSync("/dev/stdin", "utf8"))
################################
import * as fs from "fs";
const x = fs.readFileSync("/dev/stdin", "utf8").split(" ").map(item => parseInt(item));
function solve(x: number[]): number {
    return x[0]*x[1]
}
console.log(solve(x));
################################
import * as fs from 'fs';
const input = (fs.readFileSync("/dev/stdin", "utf8") as string)
const X = input.split(" ").map(Number)
console.log(X[0]*X[1]);
################################
