"use strict";
// Check Prime Number
let n = 17;
let isPrime = true;
if (n <= 1) {
    isPrime = false;
}
for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
        isPrime = false;
        break;
    }
}
if (isPrime)
    console.log(n + " is Prime");
else
    console.log(n + " is Not Prime");
// Prime Numbers from 1 to 20
let start = 1;
let end = 20;
for (let i = start; i <= end; i++) {
    let prime = true;
    if (i <= 1)
        prime = false;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            prime = false;
            break;
        }
    }
    if (prime)
        console.log(i);
}
// GCD and LCM
let a1 = 12;
let b1 = 18;
let x = a1;
let y = b1;
while (y != 0) {
    let temp = y;
    y = x % y;
    x = temp;
}
let gcd = x;
let lcm = (a1 * b1) / gcd;
console.log("GCD =", gcd);
console.log("LCM =", lcm);
// Armstrong Number
let w = 153;
let temp = w;
let sum1 = 0;
while (temp > 0) {
    let digit = temp % 10;
    sum1 += digit * digit * digit;
    temp = Math.floor(temp / 10);
}
if (sum1 == w)
    console.log("Armstrong Number");
else
    console.log("Not Armstrong Number");
// Perfect Number
let z = 28;
let total = 0;
for (let i = 1; i < z; i++) {
    if (z % i == 0)
        total += i;
}
if (total == z)
    console.log("Perfect Number");
else
    console.log("Not Perfect Number");
// Strong Number
let number = 145;
let temp1 = number;
let sum2 = 0;
while (temp1 > 0) {
    let digit = temp1 % 10;
    let fact = 1;
    for (let i = 1; i <= digit; i++) {
        fact *= i;
    }
    sum2 += fact;
    temp1 = Math.floor(temp1 / 10);
}
if (sum2 == number)
    console.log("Strong Number");
else
    console.log("Not Strong Number");
// Sum of Digits
let number1 = 1234;
let sum3 = 0;
while (number1 > 0) {
    sum3 += number1 % 10;
    number1 = Math.floor(number1 / 10);
}
console.log("Sum =", sum3);
// Decimal to Binary
let deci = 10;
console.log(deci.toString(2));
// Binary to Decimal
let binary = "1010";
let decimal = parseInt(binary, 2);
console.log("Decimal =", decimal);
// Character Frequency
let st = "program";
let freq = {};
for (let ch of st) {
    if (freq[ch])
        freq[ch]++;
    else
        freq[ch] = 1;
}
console.log(freq);
// Remove Duplicate Characters
let str1 = "programming";
let re = "";
for (let ch of str1) {
    if (!re.includes(ch))
        re += ch;
}
console.log(re);
// Second Largest Element
let arr = [10, 40, 30, 20, 50];
arr.sort((a, b) => b - a);
console.log("Second Largest =", arr[1]);
