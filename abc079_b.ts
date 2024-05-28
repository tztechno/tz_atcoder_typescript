abc079_b.ts
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
import * as fs from 'fs';
const input = fs.readFileSync("/dev/stdin", "utf8");
const main = (input: string) => {
  const N = +input.trim();
  const L = [2n, 1n];
  for (let i = 2; i <= N; i++) {
    L[i] = L[i - 1] + L[i - 2];
  }
  console.log(L[N].toString());
}
main(input)
##########################################
function b079(input: string) {
  const n: number = parseInt(input.trim(), 10);
  let l = 2n;
  let r = 1n;
  for (let i = 1; i < n; i++) {
    const tmp = l + r;
    l = r;
    r = tmp;
  }
  console.log(r.toString());
}
b079(require("fs").readFileSync("/dev/stdin", "utf8"));
##########################################
const stdin = require('fs').readFileSync('/dev/stdin', 'utf8')
const N = stdin.split('\n')[0].split(' ').map(Number)[0]
let L = [BigInt(2), BigInt(1)];
for (let i = 2; i <= N; i++) {
  L.push(L[i-2] + L[i-1]);
}
console.log(L[N].toString());
##########################################
[python]
N=int(input())
L=[2,1]
for i in range(N-1):
    L+=[L[-2]+L[-1]]
print(L[-1])
##########################################
