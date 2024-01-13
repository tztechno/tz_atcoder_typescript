# tz_atcoder_typescript

############################################

    import * as fs from "fs";  
    const filePath: string = process.platform === "linux" ? "/dev/stdin" : "./input.txt";  
    const input: string = fs.readFileSync(filePath).toString().split("\n")[0];  

############################################

    function add(x: number, y: number): number {
        return x + y;
    }
    let num: number = 5;

############################################

    enum Color {
        Red,
        Green,
        Blue,
    }
    let myColor: Color = Color.Red;

############################################

    interface Person {
        name: string;
        age: number;
    }
    let person: Person = { name: "John", age: 30 };

############################################

    class Animal {
        constructor(public name: string) {}
        makeSound() {
            console.log("Some generic sound");
        }
    }
    let myPet = new Animal("Fluffy");

############################################
