abc080_b.ts
##########################################
// 数字の文字列
const numberString: string = "12345";
// 各文字をリストにする
const charList: string[] = numberString.split("");
// 各文字を数字に変換する
const numberList: number[] = charList.map(char => parseInt(char, 10));
// 数字リストの合計値を求める
const sum: number = numberList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
##########################################
##########################################
##########################################
##########################################
##########################################
"use strict";
const Main = (input) =>{
   let xs = input.trim().split(' ').map(v=>parseInt(v,10));
   let xs1 = input.trim().split('').map(v=>parseInt(v,10));
   let x =0;
   for(let i=0; i<xs1.length; i++){
   x += xs1[i];
   }
   if(xs[0]%x==0){
     console.log('Yes');
   }else{
     console.log('No');
   }
  }
Main(require('fs').readFileSync('/dev/stdin','utf8'));
##########################################
import * as fs from 'fs';
const input = fs.readFileSync("/dev/stdin", "utf8");
const main = (input: string) => {
  const N = input.trim()
  const nSum = N.split('').map(Number).reduce((p,c) => p + c);
  console.log(+N % nSum === 0 ? 'Yes' : 'No')
}
main(input)
##########################################
[AC]
import * as fs from "fs";  
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";  
const numberString: string = fs.readFileSync(filePath, 'utf8').trim();
const charList: string[] = numberString.split("").filter(char => char.trim() !== '');
const numberList: number[] = charList.map(char => {
const parsed = parseInt(char, 10);
return parsed;
});
const sm: number = numberList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const X = parseInt(numberString, 10);
if (X % sm === 0) {
console.log('Yes');    
} else {
console.log('No');    
}
##########################################
import * as fs from "fs";  
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";  
try {
    const numberString: string = fs.readFileSync(filePath, 'utf8').trim();
    const charList: string[] = numberString.split("").filter(char => char.trim() !== '');
    const numberList: number[] = charList.map(char => {
        const parsed = parseInt(char, 10);
        if (isNaN(parsed)) {
            throw new Error(`Invalid number in input: ${char}`);
        }
        return parsed;
    });
    const sm: number = numberList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const X = parseInt(numberString, 10);
    if (isNaN(X)) {
        throw new Error(`Invalid number in input string: ${numberString}`);
    }
    if (X % sm === 0) {
        console.log('Yes');    
    } else {
        console.log('No');    
    }
} catch (error) {
    console.error("Error reading or processing input file:", error.message);
}
##########################################
[WA]
import * as fs from "fs";  
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";  
const numberString: string = fs.readFileSync(filePath).toString();  
const charList: string[] = numberString.split("");
const numberList: number[] = charList.map(char => parseInt(char, 10));
const sm: number = numberList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const X = parseInt(numberString);
if (X%sm==0) {
    console.log('Yes');    
} else {
    console.log('No');    
}
##########################################
[python]
X=str(input())
M=0
for x in list(X):
  M+=int(x)
if int(X)%M==0:
  print('Yes')
else:
  print('No')
##########################################
