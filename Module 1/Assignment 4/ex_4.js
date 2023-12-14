/*In the Harry Potter children's books, the sorting hat assigns a new student at Hogwarts School of
 Witchcraft and Wizardry to one of the four classes, which are Gryffindor, Slytherin, Hufflepuff,
 and Ravenclaw. Write an electronic sorting hat that asks for a student's name and draws a room for him.
 If you enter Anna as the name, for example, the program prints to the HTML document "Anna, you are
 Ravenclaw." (3p)
Use math.random() to draw a value (1, 2, 3 or 4)
Once the number is drawn, you need to use a multiple choice structure (if, else if, ..., else or switch).*/

    'use strict';
    let name, number;
    name = prompt("Enter your name please: ");
    number = Math.floor(Math.random()*4)+1;
    switch(number){
    case (number = 1):
    document.querySelector('#target1').innerHTML = name + ', you are Gryffindor';
    break;
    case (number = 2):
    document.querySelector('#target2').innerHTML = name + ', you are Slytherin';
    break;
    case (number = 3):
    document.querySelector('#target3').innerHTML = name + ', you are Hufflepuff';
    break;
    case (number = 4):
    document.querySelector('#target4').innerHTML = name + ', you are Ravenclaw';
    break;
    }
