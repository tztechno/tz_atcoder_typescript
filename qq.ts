import * as fs from "fs";
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input: string = fs.readFileSync(filePath).toString().split("\n")[0];

const a=input[0]
const b=input[2]
const ans=parseInt(a)*parseInt(b)

console.log(ans);
