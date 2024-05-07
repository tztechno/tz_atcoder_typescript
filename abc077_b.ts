abc077_b.ts
##############################################
##############################################
##############################################
##############################################
const stdin = require('fs').readFileSync('/dev/stdin', 'utf8')
const n = Number(stdin.split('\n')[0])
const ans = _ => {
  for (let i = n; i > 0; i--) {
    const root = Math.sqrt(i)
    if (Number.isInteger(root)) {
      return i
    }
  }
}
console.log(ans())
##############################################
import * as fs from 'fs';
const input = fs.readFileSync("/dev/stdin", "utf8");
const main = (input: string) => {
  const N = +input.trim()
  console.log(Math.floor(Math.sqrt(N)) ** 2)
}
main(input)
##############################################
[AC in Node.js]
const stdin = require('fs').readFileSync('/dev/stdin', 'utf8')
const [n] = stdin.split('\n')[0].split(' ').map(Number)
var m = Math.floor(Math.sqrt(n))
console.log(m**2)
##############################################
[python]
import math
n=int(input())
m=int(math.sqrt(n))
print(m**2)
##############################################
