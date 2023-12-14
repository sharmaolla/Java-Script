/*
Write a program that prompts the user for five numbers and prints them in the reverse order they were entered. Print the result to the console.(2p)
Save the numbers to an array, then use for-loop to iterate in reverse order.
Do not use array.reverse() function.
*/

'use strict';
const numbers = [];
for (let i = 0; i <= 4; i++ ){
    let num = prompt("Enter the number: ");
    numbers.push(num);
}
console.log(numbers);

const reversed = [];
for(let i = numbers.length - 1; i >= 0; i--) {
   const index = numbers[i];
   reversed.push(index);
}
document.querySelector('#target').innerHTML = `The numbers in reversed order: ${reversed}`;


