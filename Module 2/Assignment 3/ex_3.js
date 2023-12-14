/*
Write a program that asks for the names of six dogs.
 The program prints dog names to unordered list <ul>
 in reverse alphabetical order. (2p) */

'use strict';

const dogsList = [];
for (let i = 0; i <6; i++) {
    let dogName = prompt("Enter six name of dogs one by one:  ");
    dogsList.push(dogName);
    }

dogsList.sort();
dogsList.reverse();

for(const i of dogsList) {
    document.querySelector('#target').innerHTML +=`<ul> ${i}</ul>`;
}


