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