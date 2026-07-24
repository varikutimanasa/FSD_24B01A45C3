// Merge Arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = [...arr1, ...arr2];
console.log(merged);
// Missing Number
let nums = [1, 2, 3, 5];
let m = 5;
let expected = (m * (m + 1)) / 2;
let actual = nums.reduce((sum, num) => sum + num, 0);
console.log("Missing Number =", expected - actual);
// Rotate Array
let array = [1, 2, 3, 4, 5];
let k = 2;
let rotated = [...array.slice(k), ...array.slice(0, k)];
console.log(rotated);
// Count Occurrences
let num_arr = [1, 2, 2, 3, 3, 3];
let count = {};
for (let num of num_arr) {
    if (count[num])
        count[num]++;
    else
        count[num] = 1;
}
console.log(count);
// Find Duplicate Elements
let d = [1, 2, 3, 2, 4, 5, 1];
let duplicate = [];
for (let i = 0; i < d.length; i++) {
    for (let j = i + 1; j < d.length; j++) {
        if (d[i] == d[j] && !duplicate.includes(d[i])) {
            duplicate.push(d[i]);
        }
    }
}
console.log("Duplicate Elements =", duplicate);
// Student Class with Constructor
class Students {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}
let st1 = new Students("Manasa", 19);
st1.display();
// BankAccount Class
class BankAccount {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
    displayBalance() {
        console.log("Balance =", this.balance);
    }
}
let account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
account.displayBalance();
// Access Modifiers
class Employes {
    name;
    salary;
    department;
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}
let em = new Employes("Rahul", 50000, "IT");
console.log(em.name);
em.display();
// Readonly Property
class Stu {
    studentId;
    name;
    constructor(studentId, name) {
        this.studentId = studentId;
        this.name = name;
    }
    display() {
        console.log("Student ID:", this.studentId);
        console.log("Name:", this.name);
    }
}
let s = new Stu(101, "Manasa");
s.display();
// Static Property and Static Method
class Colle {
    static collegeName = "ABC Engineering College";
    static displayCollege() {
        console.log("College Name:", Colle.collegeName);
    }
}
Colle.displayCollege();
// Namespace Example
var MathOperations;
(function (MathOperations) {
    function add(a, b) {
        return a + b;
    }
    MathOperations.add = add;
    function subtract(a, b) {
        return a - b;
    }
    MathOperations.subtract = subtract;
    function multiply(a, b) {
        return a * b;
    }
    MathOperations.multiply = multiply;
    function divide(a, b) {
        return a / b;
    }
    MathOperations.divide = divide;
})(MathOperations || (MathOperations = {}));
console.log("Addition =", MathOperations.add(10, 5));
console.log("Subtraction =", MathOperations.subtract(10, 5));
console.log("Multiplication =", MathOperations.multiply(10, 5));
console.log("Division =", MathOperations.divide(10, 5));
// math.ts
export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b;
}
export function multiply(a, b) {
    return a * b;
}
export function divide(a, b) {
    return a / b;
}
// app.ts
import { add, subtract, multiply, divide } from "./math";
console.log("Addition =", add(20, 10));
console.log("Subtraction =", subtract(20, 10));
console.log("Multiplication =", multiply(20, 10));
console.log("Division =", divide(20, 10));
// Generic Class
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
    display() {
        console.log(this.value);
    }
}
let numberBox = new Box(100);
let stringBox = new Box("Manasa");
numberBox.display();
stringBox.display();
