"use strict";
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
    display() {
        console.log(this.value);
    }
}
let nBox = new Box(200);
let sBox = new Box("Manasa");
nBox.display();
sBox.display();
//generic functions
function show(value) {
    return value;
}
console.log(show(20));
console.log(show("Kiranmai"));
