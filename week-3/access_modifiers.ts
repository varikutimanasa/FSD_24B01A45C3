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