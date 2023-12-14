/*
Write a program that asks the user for numbers until he gives zero.
 The given numbers are printed in the console from the largest to the smallest. (2p) */

'use strict';
const numbers = [];

for (;;) {
    let num = parseInt(prompt("Enter the number: "));
    numbers.push(num);

    if (num === 0) {
        break;
    }
}
numbers.sort(function(a,b) {
   return b-a;
})
for (const i of numbers) {
       console.log(i);
}



