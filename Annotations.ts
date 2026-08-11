// Variable Annotations

let myname: string = "Manasa";
let Ages: number = 19;
let is_Students: boolean = true;

console.log(myname);
console.log(Ages);
console.log(is_Students);
// Function Parameter and Return Type Annotations

function multi(a: number, b: number): number {
    return a * b;
}

let res: number = multi(5, 4);

console.log("Result =", res);
// Array Annotations

let numarray: number[] = [10, 20, 30, 40];
let fruitsarray: string[] = ["Apple", "Banana", "Mango"];

console.log(numarray);
console.log(fruitsarray);