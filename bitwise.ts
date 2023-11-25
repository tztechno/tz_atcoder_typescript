import * as fs from "fs";

const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input: string = fs.readFileSync(filePath, "utf-8").split("\n")[0];

const [A, B]: number[] = input.split(' ').map(Number);

for (let i: number = 0; i < 256; i++) {
    if ((A ^ i) === B) {
        console.log(i);
        break;
    }
}
