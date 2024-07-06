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



