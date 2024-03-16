//abc093_a.ts
####################################
input.trim().split('').sort().join('');    
####################################
####################################
####################################
####################################
####################################
import * as fs from "fs";
const input = fs.readFileSync("/dev/stdin", "utf-8")

function Main(input: string) {
  const S = input.split("")
  S.pop()
  console.log(S.sort().join("") === "abc" ? "Yes" : "No")
}
 
Main(input);
####################################
import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[0][0];

  return new Set(S).size === 3 ? "Yes" : "No";
};

console.log(main(read()));
####################################
import * as fs from "fs";  
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";  
const input: string = fs.readFileSync(filePath).toString().split("\n")[0];  
const S = input.trim().split('').sort().join('');    
if (S=="abc") {
  console.log("Yes");
} else {
  console.log("No");
}
####################################
