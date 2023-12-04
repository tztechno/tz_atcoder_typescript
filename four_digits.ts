import * as fs from "fs";
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input: string = fs.readFileSync(filePath).toString().split("\n")[0];

const n = input.length;

if (n < 4) {
    const paddedString = '0'.repeat(4 - n) + input;
    console.log(paddedString);
} else {
    console.log(input);
