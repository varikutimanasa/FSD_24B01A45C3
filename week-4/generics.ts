class Box<T>
{
    value: T;
    constructor(value:T){
        this.value=value;
    }
    display(): void{
        console.log(this.value);
    }
}
let nBox=new Box<number>(200);
let sBox=new Box<String>("Manasa");
nBox.display();
sBox.display();
//generic functions
function show<T>(value:T):T{
    return value;
}
console.log(show<number>(20));
console.log(show<String>("Kiranmai"));