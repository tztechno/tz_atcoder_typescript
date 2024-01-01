//ABC178_A Not

################################################

import * as fs from "fs";
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N: number = parseInt(fs.readFileSync(filePath, "utf-8").split("\n")[0], 10);
        
if (N==0) {
    console.log(1);
} else {
    console.log(0);    
}

################################################

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
  console.log(Number(lines[0]) === 0 ? 1 : 0);
});

################################################
