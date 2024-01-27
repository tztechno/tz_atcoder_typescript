//abc173_a payment.ts
##############################
process.stdin.resume();
process.stdin.setEncoding("utf8");

const lines = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  lines.push(line);
});

reader.on("close", () => {
  console.log(
    Number(lines[0]) % 1000 === 0 ? "0" : 1000 - (Number(lines[0]) % 1000)
  );
});

##############################
import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin').toString();

const result = Number(input) % 1000;
console.log(result === 0 ? 0 : 1000 - result);
##############################
import * as fs from 'fs';
const input = fs.readFileSync("/dev/stdin", "utf8");
const main = (input: string) => {
  const inputVal = +input.trim();
  const output = inputVal - (1000 * (Math.ceil(inputVal / 1000)));
  console.log(Math.abs(output));
}
main(input)
##############################
import * as fs from "fs";
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N: number = parseInt(fs.readFileSync(filePath, "utf-8").split("\n")[0], 10);

const A = (1000-N%1000)%1000;
console.log(A);
##############################
