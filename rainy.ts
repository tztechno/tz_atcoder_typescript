//abc175_a rainy.ts


############################################

export const Main = (input: string): void => {
  const arg: string[] = input.split('\n');
  const s: string = arg[0];

  let ans: number = 0;
  if (s.search('R') != -1) {
    ans = 1;
  }
  if (s.search('RR') != -1) {
    ans = 2;
  }
  if (s.search('RRR') != -1) {
    ans = 3;
  }

  console.log(ans);
};

############################################

import * as fs from 'fs';
const input = fs.readFileSync("/dev/stdin", "utf8").trim();
const maxLen = input.split("S").map(s => s.length).reduce((x1,x2) => x1 > x2 ? x1: x2);
console.log(maxLen);

############################################
import * as fs from 'fs';
const filePath: string = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const A: string = fs.readFileSync(filePath, 'utf-8').split('\n')[0];
    
let DP=[0,0,0,0];
let ans=0;
for (let i = 0; i < 3; i++) {
    if (A[i]=='R') {
        DP[i+1]=DP[i]+1
        if (DP[i+1]>ans) {
            ans=DP[i+1]
        }
    }
}
console.log(ans);
############################################

import * as fs from 'fs';
const filePath: string = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const A: string = fs.readFileSync(filePath, 'utf-8').split('\n')[0];
    
let DP=[0,0,0,0]

for (let i = 0; i < 3; i++) {
    if (A[i]=='R') {
        DP[i+1]=DP[i]+1
    }
}
console.log(Math.max(...DP));
############################################
