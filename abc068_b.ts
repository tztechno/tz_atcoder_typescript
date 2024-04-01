abc068_b.ts
#########################################
import * as fs from "fs";
const input: string[] = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const n = Number(input[0]);
#########################################
import * as fs from "fs";
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input: string[] = fs.readFileSync(filePath, 'utf8').trim().split('\n'); 
const n = parseInt(input[0]);
#########################################
#########################################
#########################################
#########################################
#########################################
#########################################
import * as fs from "fs";

const input: string[] = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const n = Number(input[0]);

let ans = 1;
let now = 0;

for (let i = 1; i <= n; i++) {
  let num = 0;
  let s = i;
  for (;;) {
    if (s % 2 == 0) {
      num += 1;
      s = s/ 2;
    } else {
      break;
    }
  }

  if (now < num) {
    ans = i;
    now = num;
  }
}

console.log(ans);

#########################################
export function solve(input: string) {
  return 1 << Math.floor(Math.log2(+input));
}

// deno-fmt-ignore
if (!process.env.VITEST) console.log(solve(require("fs").readFileSync(0, "utf8").trim().toString()));
#########################################
import * as fs from "fs";
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input: string[] = fs.readFileSync(filePath, 'utf8').trim().split('\n'); 
const n = parseInt(input[0]);
let ans=0
for (let i=0; i<n+1; i++) {
  if (2**i<=n) {
  ans=2**i    
  }
  else
    break    
}
console.log(ans);
#########################################
