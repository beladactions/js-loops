/*

================
JAVASCRIPT LOOPS
================

Loops are used for repetition, it can be used to perform repeated tasks until a condition is met.

*/

/*

=========
FOR LOOPS
=========

For loops are used to execute a block of code a specific number of times.

*/

for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  
for (let i = 10; i > 5; i--) {
    console.log(i);
  }

  /*

  ===========
  WHILE LOOPS
  ===========

    While loops are used to execute a block of code while a specific condition is true.

*/

// declare the variable

let i = 0;

//run the while loop here

while (i < 10) {
  console.log(i);
  i++;
}


/*

==============
DO-WHILE LOOPS
==============

Do-while loops are similar to while loops, 
except that the code inside the loop is executed at least once, 
even if the condition is false
*/

let i = 10;

do {
  console.log(i);
  i++;
} while (i < 10);


