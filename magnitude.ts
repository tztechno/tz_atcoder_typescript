import * as fs from 'fs';

const filePath: string = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input: string = fs.readFileSync(filePath, 'utf-8').split('\n')[0];

const [A, B]: number[] = input.split(' ').map(Number);
console.log(Math.pow(32, A - B));
