abc072_b.ts
######################################
######################################
######################################
######################################
######################################
######################################
import { readFileSync } from 'fs';
const log = console.log;
import * as std from 'tstl';

const input: string[] = readFileSync('/dev/stdin', 'utf8').trim().split(/\n/);

const main = (input: Array<string>) => {
  const s = input[0];
  let ans = '';
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) ans += s[i];
  }
  log(ans);
};

main(input);

######################################
function main(input: string) {
  const result = input.trim().split('').filter((a, i) => !(i % 2)).join('');
  console.log(result);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));

######################################
import { readFileSync } from 'fs'

const main = (arg: string) => {
  const s = arg.trim().split('')

  const ans = s.filter((_, index) => index % 2 === 0).join('')

  console.log(ans)
}

main(readFileSync('/dev/stdin', 'utf-8'))
######################################
[Node.js]
import * as fs from "fs";
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const s: string = fs.readFileSync(filePath).toString().split("\n")[0];
const n=s.length
let a=""
for (let i=0;i<n;i+=2){
a+=s[i]    
}
console.log(a);
######################################
