import * as fs from "fs";
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input: string = fs.readFileSync(filePath).toString().split("\n")[0];

const S=input
if (S.slice(-2) === 'er') {
    console.log('er');
} else {
    console.log('ist');
  }
