// For loops

/*
A programming tool that repeats a set of instructions until a specified condition is met.

Makes something happen again and again until a condition has been met.  Iterates until complete.

"if im hungry, I will eat. I will keep eating until I am full. When I am full, I will stop."
*/

/*
Statement 1 is executed (one time) before the execution of the code block.

Statement 2 defines the condition for executing the code block.

Statement 3 is executed (every time) after the code block has been executed.
*/

for (statement 1; statement 2; statement 3) {
    // code block to be executed
  }

const vacationSpots =['Florence', 'Copenhagen', 'Istanbul', 'Your mom\'s bedroom'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);
console.log(vacationSpots[3]);

// Types of loops
/*
For statement
Do while statement
While statement
Labeled statement
Break Statement
Continue Statement
For in statement
For of statment
*/

//To break a loop in the terminal shortcut is "ctrl + C".


//for takes initilization, stopping condition, and how many iterations
        for (let i = 0; i < 10; i++ ) {
            console.log(i);
}


for (let n = 2; n <= 20; n += 2) {
    console.log(n);
}