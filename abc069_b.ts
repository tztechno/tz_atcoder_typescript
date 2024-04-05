abc069_b.ts
#########################################
#########################################
#########################################
#########################################
#########################################
const text = require('fs').readFileSync('/dev/stdin', 'utf-8').toString().split('\n')[0];
console.log(text.slice(0, 1) + (text.length - 2) + text.slice(-1));
#########################################
import * as fs from 'fs';
const s: string = fs.readFileSync('/dev/stdin', 'utf8').trim();
console.log(s.substring(0, 1) + (s.length - 2).toString() + s.substring(s.length-1));
#########################################
import { readFileSync } from 'fs';
const log = console.log;
import * as std from 'tstl';

const input: string[] = readFileSync('/dev/stdin', 'utf8').trim().split(/\n/);
const s = input[0];

let ans = '';
let cnt = 0;
for (let i = 0; i < s.length; i++) {
  if (i === 0 || i === s.length - 1) continue;
  cnt++;
}

log(s[0] + `${cnt}` + s[s.length - 1]);
#########################################
import * as fs from "fs";
const input: string[] = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const S = input[0];
const n=S.length;
console.log('%s%d%s',S[0],n-2,S[n-1]);
#########################################
