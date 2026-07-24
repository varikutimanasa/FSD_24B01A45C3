"use strict";
// Function with explicit parameter and return type
function add(a, b) {
    return a + b;
}
let res1 = add(10, 20);
console.log("Sum =", res1);
// Function with default parameter
function greet(name = "Guest") {
    console.log("Welcome " + name);
}
greet("Manasa");
greet();
// Function with optional parameter
function display(name, age) {
    if (age !== undefined) {
        console.log(name + " is " + age + " years old");
    }
    else {
        console.log(name);
    }
}
display("Manasa", 19);
display("Kiran");
// Function with rest parameters
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log(sum(10, 20));
console.log(sum(10, 20, 30, 40));
// Function with rest parameters
function sums(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log(sums(10, 20));
console.log(sums(10, 20, 30, 40));
