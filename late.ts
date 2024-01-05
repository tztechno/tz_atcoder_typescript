//ABC177_A late

import * as fs from "fs";
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input: string = fs.readFileSync(filePath, "utf-8").split("\n")[0];

const [D,T,S]: number[] = input.split(' ').map(Number);

if (D<=T*S) {
    console.log("Yes");
} else {
    console.log("No");    
}
