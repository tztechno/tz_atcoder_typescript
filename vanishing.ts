import * as fs from 'fs';
const filePath: string = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input: string = fs.readFileSync(filePath, 'utf-8').split('\n')[0];

const [V, T, S, D] = input.split(' ').map(Number);

if (V * T <= D && D <= V * S) {
  console.log('No');
} else {
  console.log('Yes');
}
