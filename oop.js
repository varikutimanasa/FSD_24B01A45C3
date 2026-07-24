"use strict";
// Class with Constructor
class Student {
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
let s1 = new Student("Manasa", 19);
s1.display();
// Class with Access Modifiers
class Employee {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    }
}
let emp = new Employee("Rahul", 50000);
console.log(emp.name); // Accessible
emp.display();
// Readonly and Static Properties
class College {
    collegeName;
    static city = "Hyderabad";
    constructor(name) {
        this.collegeName = name;
    }
    display() {
        console.log("College:", this.collegeName);
        console.log("City:", College.city);
    }
}
let c1 = new College("ABC College");
c1.display();
