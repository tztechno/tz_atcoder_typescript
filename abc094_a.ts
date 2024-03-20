//abc094_a.ts
####################################
####################################
####################################
####################################
####################################
####################################
var lines: string[] = [];
var reader: any = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on("line", function(line: string) {
  lines.push(line);
});
reader.on("close", function() {
  var value_a: number = Number(lines[0].split(" ")[0]);
  var value_b: number = Number(lines[0].split(" ")[1]);
  var value_x: number = Number(lines[0].split(" ")[2]);
  if (value_a > value_x) {
    console.log("NO");
  } else if (value_b >= value_x - value_a) {
    console.log("YES");
  } else {
    console.log("NO");
  }
});
####################################
import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B, X] = input[0].map(Number);

  return A <= X && A + B >= X ? "YES" : "NO";
};

console.log(main(read()));
####################################
import * as fs from "fs";
const input = fs.readFileSync("/dev/stdin", "utf-8")

function Main(input: string) {
  const [A, B, X] = input.split(" ").map(x => Number(x))
  console.log(A <= X && X <= A+B ? "YES" : "NO")
}
 
Main(input);
####################################
const stdin = require('fs').readFileSync('/dev/stdin', 'utf8')
const [a, b, x] = stdin.split('\n')[0].split(' ').map(Number)
if (a<=x && x<=a+b) {
  console.log("YES");
} else {
  console.log("NO");
}
####################################
