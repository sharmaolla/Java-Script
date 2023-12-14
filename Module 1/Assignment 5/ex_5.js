/*Write a program that asks the user to enter a year and notifies
 the user whether the input year is a leap year. A year is a leap year
 if it is divisible by four. However, years divisible by 100 are leap years
 only if they are also divisible by 400. Print the result on the HTML document. (3p)*/
'use strict';

 let year = prompt("Please enter the year: ");

 if (year % 4 !== 0) {
    document.querySelector('#target').innerHTML = `${year} is NOT a leap year`;
 }
 else if (year % 400 != 0 && year % 100 == 0) {
    document.querySelector('#target').innerHTML = `${year} is NOT a leap year`;
 }
 else {
    document.querySelector('#target1').innerHTML = `${year} is a leap year`;
 }




