import * as fs from "fs";
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const S: string = fs.readFileSync(filePath).toString().split("\n")[0];

const n = S.length;
if (n < 4) {
    const paddedString = '0'.repeat(4 - n) + S;
    console.log(paddedString);
} else {
    console.log(S);
}
