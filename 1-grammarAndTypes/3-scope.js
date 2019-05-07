// Scope
// Each function creates a new scope. 
// Scope determines the accessability or visibility of variables. 
//  JS has function scope. There is local and global scope.
// Variables defined inside a function are NOT accessible from outside the function.

//Local and Global Scope

let x = 12; // Global

function scope() {
    let x = 33      // Local
    console.log (x);
}
scope();
console.log(x);
let x = 12

function coffee() {
    x = 33
    console.log(x);
}
coffee()
    console.log(x);


    // Var vs Let
// VAR
var x = 12

function scope() {
    var x =33
    if (true){
        var x = 45;
        console.log(x);
    }
    console.log(x); //Var does not have blocked scope (blocking between curly brackets)
}

scope()
console.log(x);

var x = 12
//LET
function scope() {
    var x =33
    if (true){
        let x = 45;  //Let is locked between curly brackets, will not bleed outside of them.
        console.log(x);
    }
    console.log(x);
}

scope()
console.log(x);



// CONST

function scope() {
    const x =33 // Constants work within local scope. They stay within the curly brackets.
    if (true){
        const x = 45;
        console.log(x);
    }
    console.log(x);
}

scope()


// This will kick an error because x has already been defined in the global scope.

let x = 'hi'

let x = 42

console.log(x);