"use strict";
var Ope;
(function (Ope) {
    function add(a, b) {
        return a + b;
    }
    Ope.add = add;
    function sub(a, b) {
        return a - b;
    }
    Ope.sub = sub;
})(Ope || (Ope = {}));
console.log(Ope.add(2, 3));
console.log(Ope.sub(5, 2));
