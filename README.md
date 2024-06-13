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



