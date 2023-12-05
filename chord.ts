import * as fs from "fs";
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const s: string = fs.readFileSync(filePath).toString().split("\n")[0];

const name = ["ACE", "BDF", "CEG", "DFA", "EGB", "FAC", "GBD"];

if (name.includes(s)) {
    console.log('Yes');
} else {
    console.log('No');
  };
