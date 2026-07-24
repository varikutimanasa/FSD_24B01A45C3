// Class with Constructor

class Student {
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

let s1 = new Student("Manasa", 19);
s1.display();
// Class with Access Modifiers

class Employee {
    public name: string;
    public salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    display(): void {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    }
}

let emp = new Employee("Rahul", 50000);

console.log(emp.name);   // Accessible
emp.display();
// Readonly and Static Properties

class College {
    readonly collegeName: string;
    static city: string = "Hyderabad";

    constructor(name: string) {
        this.collegeName = name;
    }

    display(): void {
        console.log("College:", this.collegeName);
        console.log("City:", College.city);
    }
}

let c1 = new College("ABC College");

c1.display();