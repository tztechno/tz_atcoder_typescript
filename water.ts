import * as fs from "fs";

const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input: string = fs.readFileSync(filePath, "utf-8").split("\n")[0];

const N: number = parseInt(input, 10); // Specify base 10 for parsing
const m: number = Math.floor(N / 5); // Use Math.floor for integer division
const diff: number = N % 5;

if (diff <= 2) {
  console.log(m * 5);
} else {
  console.log((m + 1) * 5);
}
