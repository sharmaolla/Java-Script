/*Write a program that asks the user for an integer and tells if the number is a prime number. (2p)
Prime numbers are numbers that are only divisible by 1 and itself.
For example, number 13 is a prime number as it can only be divided by 1 or 13
so that the result is an integer.
On the other hand, number 21 for example is not a prime number as it can be also be
divided by numbers 3 and 7.
Print the result on the HTML document.
*/

'use strict';
let number, count;
number = parseInt(prompt("Enter the number please: "));
count = 0;
for (let i = 2; i < number; i++){
    if (number % i == 0){
       count++;
    }
}
console.log(count);
if (count == 0){
    document.querySelector('#target').innerHTML = `${number} is a PRIME number.`;
}
else{
    document.querySelector('#target').innerHTML = `${number}  is NOT a prime number.`;
}