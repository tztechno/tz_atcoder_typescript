import * as fs from "fs";

const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input: string = fs.readFileSync(filePath, "utf-8").split("\n")[0];

const K: number = parseInt(input);
const h: number = Math.floor(21 + K / 60);
const m: number = K % 60;

const ans: string = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;

console.log(ans);
