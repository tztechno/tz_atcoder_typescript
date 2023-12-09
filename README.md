# tz_atcoder_typescript

import * as fs from "fs";  
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";  
const input: string = fs.readFileSync(filePath).toString().split("\n")[0];  
