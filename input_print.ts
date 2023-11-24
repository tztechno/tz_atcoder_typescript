import * as readlineSync from 'readline-sync';

// Nを入力
const N: number = parseInt(readlineSync.question('Enter N: '), 10);

// Aを入力
const inputA: string = readlineSync.question('Enter A: ');
const A: number[] = inputA.split(' ').map(Number);

// NとAを出力
console.log(N);
console.log(...A);
