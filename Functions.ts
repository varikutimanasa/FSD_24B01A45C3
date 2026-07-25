// Function with explicit parameter and return type

function add1(a: number, b: number): number {
    return a + b;
}

let res1: number = add1(10, 20);

console.log("Sum =", res1);
// Function with default parameter

function greet(name: string = "Guest"): void {
    console.log("Welcome " + name);
}

greet("Manasa");
greet();
// Function with optional parameter

function display(name: string, age?: number): void {
    if (age !== undefined) {
        console.log(name + " is " + age + " years old");
    } else {
        console.log(name);
    }
}

display("Manasa", 19);
display("Kiran");
// Function with rest parameters

function sum(...numbers: number[]): number {
    let total: number = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log(sum(10, 20));
console.log(sum(10, 20, 30, 40));
