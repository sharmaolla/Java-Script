/*
Write a program that asks the user for the number of participants.
After this, the program asks for the names of all participants.
Finally, the program prints the names of the participants on
 the web page in an ordered list (<ol>) in alphabetical order. (2p) */

'use strict';
const participants = [];
let number = prompt("Enter the number of participants");
for (let i = 0; i < number; i ++) {
    let name = prompt("Enter the name of participants one by one:");
    participants.push(name);
}
participants.sort();

for (const i of participants) {
    document.querySelector('#target').innerHTML += `<ol>${i}</ol>`;
}
