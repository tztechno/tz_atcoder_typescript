import * as fs from "fs";
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input: string = fs.readFileSync(filePath).toString().split("\n")[0];

const X: number = parseFloat(input);
const a: number = parseInt((X * 10).toString()); // ここで文字列に変換

if (a % 10 >= 5) {
  console.log(parseInt(X.toString()) + 1);
} else if (a % 10 <= 4) {
  console.log(parseInt(X.toString()));
}
