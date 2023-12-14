/*
Write a program that prompts the user for the start and end year. The program prints all leap years from the interval given by the user.
Printing is done in an unordered list to the HTML document. (3p)
Example output HTML code:
<ul>
   <li>1992</li>
   <li>1996</li>
   <li>2000</li>
   <li>2004</li>
   <li>2008</li>
</ul> */
'use strict';
const startYear = prompt("Enter the starting year: ");
const endYear = prompt("Enter the ending year: ");
for (let year = startYear; year <= endYear; year++) {
    if (year % 4 !== 0) {
    }
    else if (year % 400 != 0 && year % 100 == 0) {
    }
    else {
        document.querySelector('#target').innerHTML += `<li>${year}</li>`;
    }
}
