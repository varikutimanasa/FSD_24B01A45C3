// Merge Arrays

let arr1: number[] = [1, 2, 3];
let arr2: number[] = [4, 5, 6];
let merged = [...arr1, ...arr2];
console.log(merged);

// Missing Number
let nums: number[] = [1, 2, 3, 5];
let m = 5;
let expected = (m * (m + 1)) / 2;
let actual = nums.reduce((sum, num) => sum + num, 0);
console.log("Missing Number =", expected - actual);

// Rotate Array
let array: number[] = [1, 2, 3, 4, 5];
let k: number = 2;
let rotated = [...array.slice(k), ...array.slice(0, k)];
console.log(rotated);

// Count Occurrences
let num_arr: number[] = [1, 2, 2, 3, 3, 3];
let count: { [key: number]: number } = {};
for (let num of num_arr) {
    if (count[num])
        count[num]++;
    else
        count[num] = 1;
}
console.log(count);

// Find Duplicate Elements
let d: number[] = [1, 2, 3, 2, 4, 5, 1];
let duplicate: number[] = [];
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
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    display(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}
let st1 = new Students("Manasa", 19);
st1.display();

// BankAccount Class

class BankAccount {
    balance: number;
    constructor(balance: number) {
        this.balance = balance;
    }
    deposit(amount: number): void {
        this.balance += amount;
    }
    withdraw(amount: number): void {
        this.balance -= amount;
    }
    displayBalance(): void {
        console.log("Balance =", this.balance);
    }
}
let account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
account.displayBalance();

// Access Modifiers

class Employes {
    public name: string;
    private salary: number;
    protected department: string;
    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    display(): void {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}
let em = new Employes("Rahul", 50000,"IT" );
console.log(em.name);
em.display();

// Readonly Property

class Stu {
    readonly studentId: number;
    name: string;
    constructor(studentId: number, name: string) {
        this.studentId = studentId;
        this.name = name;
    }
    display(): void {
        console.log("Student ID:", this.studentId);
        console.log("Name:", this.name);
    }
}
let s = new Stu(101, "Manasa");
s.display();

// Static Property and Static Method

class Colle {
    static collegeName: string = "ABC Engineering College";
    static displayCollege(): void {
        console.log("College Name:", Colle.collegeName);
    }
}
Colle.displayCollege();

// Namespace Example

namespace MathOperations {
    export function add(a: number, b: number): number {
        return a + b;
    }
    export function subtract(a: number, b: number): number {
        return a - b;
    }
    export function multiply(a: number, b: number): number {
        return a * b;
    }
    export function divide(a: number, b: number): number {
        return a / b;
    }
}
console.log("Addition =", MathOperations.add(10, 5));
console.log("Subtraction =", MathOperations.subtract(10, 5));
console.log("Multiplication =", MathOperations.multiply(10, 5));
console.log("Division =", MathOperations.divide(10, 5));
// Generic Class

class Box<T> {

    value: T;

    constructor(value: T) {
        this.value = value;
    }

    display(): void {
        console.log(this.value);
    }
}

let numberBox = new Box<number>(100);
let stringBox = new Box<string>("Manasa");

numberBox.display();
stringBox.display();