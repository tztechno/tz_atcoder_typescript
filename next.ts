#ABC329_B
#next

import * as fs from 'fs';
const filePath: string = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input: string = fs.readFileSync(filePath, 'utf-8').split('\n')[0];
    
const C = Array.from(new Set(input.split(' ').map(Number))).sort((a, b) => b - a);
console.log(C[1]);    

###############

import * as fs from "fs";
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input: string = fs.readFileSync(filePath).toString().split("\n")[1];    
    
const A = input.split(' ').map(Number);
const B = new Set(A);
const C = Array.from(B).sort((a, b) => b - a);
console.log(C[1]);    
