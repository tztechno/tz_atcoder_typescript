import * as fs from "fs";

const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input: string = fs.readFileSync(filePath, "utf-8").split("\n")[0];

const [A]: string[] = [input];

if (A === 'Hello,World!') {
    console.log('AC');
} else {
    console.log('WA');
}
