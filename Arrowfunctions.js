"use strict";
// Traditional Named Function
function add(a, b) {
    return a + b;
}
let res2 = add(10, 20);
console.log("Sum =", res2);
//Arrow Function
const add2 = (a, b) => {
    return a + b;
};
console.log("Sum =", add(15, 25));
// Shorthand Arrow Function
const square = (num) => num * num;
console.log("Square =", square(6));
