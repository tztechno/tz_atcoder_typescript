abc108_a.ts
##############################################
##############################################
##############################################
##############################################
function main(input) {
  K = parseInt(input.split(/\s|\n/g),10);
  g = Math.floor(K/2);
  k = Math.ceil(K/2);
  console.log(g*k)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
##############################################
import * as fs from "fs";
const input = fs.readFileSync("/dev/stdin", "utf-8")
function Main(input: string) {
  const k = Number(input)
  console.log(Math.floor(k/2)*(Math.ceil(k/2))
}
Main(input)
##############################################
const stdin = require('fs').readFileSync('/dev/stdin', 'utf8')
const [n] = stdin.split('\n')[0].split(' ').map(Number)
const ans = Math.floor(n/2)*Math.floor((n+1)/2);
console.log(ans);
##############################################
[python]
N=int(input())
print((N//2)*((N+1)//2))
##############################################
