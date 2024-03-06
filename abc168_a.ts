//abc168_a.ts
################################
################################
################################
import * as fs from 'fs'

// import * as readline from 'readline'
// const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
// const ask = (query: string) => new Promise<string>((resolve) => rl.question(query, resolve))
// // Don't forget `rl.close()`.

const INT = Math.floor

declare global {
  interface Array<T> {
    last(): T | undefined
    isEmpty(): boolean
  }
}
Array.prototype.last = function () {
  return this.length === 0 ? undefined : this[this.length - 1]
}
Array.prototype.isEmpty = function () {
  return this.length === 0
}

const bigIntMax = (...args: bigint[]) => args.reduce((m, e) => (e > m ? e : m))
const bigIntMin = (...args: bigint[]) => args.reduce((m, e) => (e < m ? e : m))
const bigIntAbs = (arg: bigint) => (arg < 0 ? -arg : arg)

declare const stdin: number
function read_stdin() {
  return fs.readFileSync(process.env.NODE_ENV === 'debug' ? stdin : process.stdin.fd, 'utf8')
}
class Input {
  readonly inputs: string[]
  private index = 0
  constructor(str?: string) {
    this.inputs = (str ? str : read_stdin()).split(/\s+/)
  }
  number() {
    return Number(this.inputs[this.index++])
  }
  numbers(n: number) {
    return this.inputs.slice(this.index, (this.index += n)).map(Number)
  }
  bigint() {
    return BigInt(this.inputs[this.index++])
  }
  bigints(n: number) {
    return this.inputs.slice(this.index, (this.index += n)).map(BigInt)
  }
  word() {
    return this.inputs[this.index++]
  }
  words(n: number) {
    return this.inputs.slice(this.index, (this.index += n))
  }
}

function array<T>(len: number, init: T): T[] {
  return Array(len).fill(init)
}

function array2<T>(h: number, w: number, init: T): T[][] {
  return array(h, 0).map(() => array(w, init))
}

function main() {
  const input = new Input()
  const n = Number(input.word().slice(-1))

  if ([2, 4, 5, 7, 9].includes(n)) {
    console.log('hon')
  } else if (n === 3) {
    console.log('bon')
  } else {
    console.log('pon')
  }
}

main()
################################
import * as fs from 'fs';
const input = parseInt(fs.readFileSync("/dev/stdin", "utf8")).toString();
const fp = input.slice(-1);
if(new Set(['2', '4', '5', '7', '9']).has(fp)) {
  console.log('hon');
}else if(new Set(['0', '1', '6', '8']).has(fp)) {
  console.log('pon');
} else {
  console.log('bon');
}
################################
import * as fs from 'fs';
const S: string = fs.readFileSync("/dev/stdin", "utf8").trim();
const a: number = parseInt(S.slice(-1));
if ([2, 4, 5, 7, 9].includes(a)) {
    console.log('hon');
} else if ([0, 1, 6, 8].includes(a)) {
    console.log('pon');
} else {
    console.log('bon');
}
################################
const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim();
const onesPlace = Number(input[input.length - 1]);
const honNumbers = [2,4,5,7,9];
const ponNumbers = [0,1,6,8];
const bonNumber = 3;
if (honNumbers.some(n => n === onesPlace) {
  console.log('hon');
} else if (ponNumbers.some(n => n === onesPlace) {
  console.log('pon');
} else {
  console.log('bon');
}
################################
