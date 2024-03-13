//practiceA.ts
##################################
1
2 3
test
##################################
##################################
##################################
##################################
##################################
##################################
##################################
const text = await (new Response(Deno.stdin.readable)).text();
const [a, bc, s] = text.split("\n");
const [b, c] = bc.split(" ");
console.log(`${parseInt(a)+parseInt(b)+parseInt(c)} ${s}`);
##################################
import * as fs from 'fs';

const input = fs.readFileSync("/dev/stdin", "utf8");
const a = +input.split('\n')[0];
const b = +input.split('\n')[1].split(' ')[0];
const c = +input.split('\n')[1].split(' ')[1];
const s = input.split('\n')[2];
console.log("%d %s", a+b+c, s);
##################################
import * as fs from 'fs';

const input: string = fs.readFileSync("/dev/stdin", "utf8");


function processInput(input: string) {
    const lines = input.trim().split('\n');
    const a:number = parseInt(lines[0]);
    const [b, c]:number[] = lines[1].split(' ').map((n) => parseInt(n));
    const d = lines[2];
    console.log(`${a + b + c} ${d}`);
}

processInput(input);
##################################
