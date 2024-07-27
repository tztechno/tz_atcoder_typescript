# tz_atcoder_typescript

---
```

```
---
```

```
---
```

```
---
```

```
---
```

```
---
```

```
---
```

```
---
```

    const getShuffledNumbers = () => {
        const numbers = Array.from({ length: 25 }, (_, i) => i + 1);
        for (let i = numbers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
        }
        return numbers;
    };
    
    console.log(getShuffledNumbers())
    
/* 
[
   1,  7, 19, 11,  6,  9, 15,  2,
  25,  8, 13, 24, 12, 17, 23,  3,
  22, 21, 10, 16, 18,  5, 14, 20,
   4
]
*/
```
---
```
var ans=0    
for (let i=1; i<N+1; i++) {
  var p=value(i)
  if (A<=p && p<=B) {
    ans=ans+i
  }
}
console.log(ans)
```
---
```
function value(i: number): number {
  let p = 0;
  while (i>0) {
    p = p + i%10; 
    i = Math.floor(i/10); 
  }
  return p;
}
```
---
```
const stdin = require('fs').readFileSync('/dev/stdin', 'utf8')
const [N,A,B] = stdin.split('\n')[0].split(' ').map(Number)
```
---
```
import { readFileSync } from "fs";
const input: string = readFileSync("/dev/stdin", "utf8");
const n = input.split("\n")[0];
```
---
```
import * as fs from "fs";
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input: string = fs.readFileSync(filePath).toString();
const lines: string[] = input.split("\n");
const N: number = parseInt(lines[0], 10);
const A: number[] = lines[1].split(" ").map(Number);
```
---
```
// 数字の文字列
const numberString: string = "12345";
// 各文字をリストにする
const charList: string[] = numberString.split("");
// 各文字を数字に変換する
const numberList: number[] = charList.map(char => parseInt(char, 10));
// 数字リストの合計値を求める
const sum: number = numberList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
```
---



