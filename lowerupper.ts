//ABC192_B lowerupper

import * as fs from "fs";

const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const S: string = fs.readFileSync(filePath, "utf-8").split("\n")[0];

const n: number = S.length;

for (let i = 0; i < n; i++) {
    if ((i % 2 === 0 && S[i] !== S[i].toLowerCase()) || (i % 2 === 1 && S[i] !== S[i].toUpperCase())) {
        console.log('No');
        process.exit(0); // use process.exit(0) to exit the program
    }
}

console.log('Yes');
