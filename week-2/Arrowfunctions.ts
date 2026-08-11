// Traditional Named Function

function add(a: number, b: number): number {
    return a + b;
}

let res2 = add(10, 20);

console.log("Sum =", res2);
//Arrow Function
const add2=(a:number,b:number):number=>{
    return a+b;
};
console.log("Sum =", add(15, 25));
// Shorthand Arrow Function

const square = (num: number): number => num * num;

console.log("Square =", square(6));