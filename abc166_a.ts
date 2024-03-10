//abc166_a.ts
################################
################################
################################
################################
import * as fs from 'fs';
const lines = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const s = lines[0]
console.log(s === 'ABC' ? 'ARC' : 'ABC');
################################
import * as fs from "fs";
const input:string = fs.readFileSync("/dev/stdin", "utf8").trim();
const result: string = input === 'ABC' ? 'ARC' : 'ABC';
console.log(result);
################################
import * as fs from 'fs';
const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split("\n")
const main = (lines: string[]) => {
    const gru = lines[0]
    return gru === "ABC" ? "ARC" : "ABC"
};
console.log(main(input));
################################
import * as fs from "fs";  
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";  
const input: string = fs.readFileSync(filePath).toString().split("\n")[0];  
if (input=="ABC") {
  console.log("ARC");
} else {
  console.log("ABC");
}
################################
