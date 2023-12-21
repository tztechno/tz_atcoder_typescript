#ABC181_A
#rotation
#input= 5

import * as fs from "fs";
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
//const N: string = fs.readFileSync(filePath, "utf-8").split("\n")[0];
const N: number = parseInt(fs.readFileSync(filePath, "utf-8").split("\n")[0], 10);
        
if (N%2==0) {
    console.log('White');
} else {
    console.log('Black');      
}
