abc078_b.ts
#################################
#################################
#################################
import { readFileSync } from "fs";
let inputLinesIndex = 0;
const inputLines = readFileSync("/dev/stdin", "utf8").split("\n");
const input = () => inputLines[inputLinesIndex++];
const div = (x: number, y: number) => Math.floor(x / y);
const [X, Y, Z] = input().split(" ").map(Number);
const ans = div(X - Z, Y + Z);
console.log(ans);

#################################
import * as fs from "fs";
const main = (arg: any) => {
  const input = arg.trim().split("\n");
  const [X, Y, Z] = input[0].split(" ").map((n: string) => parseInt(n));
  console.log(Math.floor((X - Z) / (Y + Z)));
};
main(fs.readFileSync("/dev/stdin", "utf8"));
#################################
[Node.js]
import * as fs from "fs";
const input = fs.readFileSync("/dev/stdin", "utf-8")
function Main(input: string) {
  const [x,y,z] = input.split(" ").map(a => Number(a))
  console.log(Math.floor((x - z) / (y + z)))
}
Main(input);
#################################
[python]
X,Y,Z=map(int,input().split())
print((X-Z)//(Y+Z))
#################################
