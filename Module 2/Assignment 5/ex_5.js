/*
Write a program that prompts the user for numbers.
 When the user enters one of the numbers he previously entered,
 the program will announce that the number has already been given
 and stops its operation and then prints all the given numbers to the console in ascending order. (2p) */4

'use strict';
const numList = [];
let loop = true;
while (loop) {
    const number = parseInt(prompt("Enter the number: "));
        numList.push(number);
            if (numList.contains(number)) {
                console.log(numList);
            }
            else {
                const number = parseInt(prompt("Enter the number: "));
            }
}


