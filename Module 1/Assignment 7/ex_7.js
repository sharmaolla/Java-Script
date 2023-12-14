/*
Write a program that rolls user defined number of dice and displays the sum of the results of the dice rolls.(2p)
First, program asks the user for the number of dice rolls.
Then the program throws a die as many times as the user defined.
Print the sum of the results in the console or in the HTML document. */

'use strict';
let numDice = prompt("Enter the number of dice to roll: ");
let sum = 0;
for (let i = 0; i < numDice;  i++) {
    let eyes = Math.floor(Math.random()*6)+1;
    console.log(eyes);
    sum += eyes;

}
document.querySelector('#target').innerHTML = `The sum of ${numDice} rolled dice is ${sum}`;