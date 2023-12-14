/*Write a program that prompts for three integers.
The program prints the sum, product and average of the numbers
 to the HTML document. (3p)
remember to convert strings to numbers when adding
*/

'use strict';
let first, second, third, sum, product, ave;
first = parseInt(prompt("Enter the first number: "));
second = parseInt(prompt("Enter the second number: "));
third = parseInt(prompt("Enter the third number: "));
sum = first + second + third;
product = first * second * third;
ave = (first + second + third) / 3;
document.querySelector('#sum').innerHTML = 'Sum of these numbers is: ' + sum;
document.querySelector('#prod').innerHTML = 'Product of these numbers is: ' + product ;
document.querySelector('#ave').innerHTML = 'Average of these numbers is: ' + ave;
