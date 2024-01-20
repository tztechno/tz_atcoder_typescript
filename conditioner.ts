//abc174_a conditioner.ts

####################################
function main(input) {
    if(input >= 30){
    console.log("Yes");
    }else{
    console.log("No")
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
####################################
import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const X = Number(input[0][0]);

  return X >= 30 ? "Yes" : "No";
};

console.log(main(read()));
####################################
import * as fs from "fs";
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const X: number = parseInt(fs.readFileSync(filePath, "utf-8").split("\n")[0], 10);

if (X>=30) {
    console.log('Yes')    
} else {
    console.log('No')    
}
####################################
import * as fs from "fs";
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const X: number = parseInt(fs.readFileSync(filePath, "utf-8").split("\n")[0], 10);

const judge: number = Number(X >= 30);
const ANS: string[] = ['No', 'Yes'];
console.log(ANS[judge]);
####################################
