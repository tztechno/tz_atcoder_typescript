//ABC179_A
//plural

/////////////////////////

import * as fs from "fs";
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const S: string = fs.readFileSync(filePath, "utf-8").split("\n")[0];

const length=S.length
if (S[length-1]=="s") {
  console.log(S+"es") 
}
else {
  console.log(S+"s") 
}


/////////////////////////

import * as fs from 'fs';
const S: string = fs.readFileSync('/dev/stdin', 'utf8').trim();

console.log(s.substring(S.length-1) === 's' ? s + 'es' : s + 's');


/////////////////////////
