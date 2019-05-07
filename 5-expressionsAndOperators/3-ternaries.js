// Ternaries
// The shorthand version of an if else if statement

let x = 6;

if (x < 0) {
    console.log('yes');
} else {
    console.log('no');
}
//condition if    logic        else  logic
    (x > 0) ? console.log('yes') : console.log('no');

// The following two are the same things:

if (age >= 25) {
    console.log('can rent car')
} else if (age >= 21) {
    console.log('can drink')
} else if {
    console.log('can vote')
} else {
    console.log("too young")
}

let age = 2;
(age >= 25) ? console.log('can rent car') : (age >=21) ? console.log('can drink') : (age >= 18) ? console.log('can vote') : console.log('too young')

let x = 4; 
(x == 0) ? console.log('1') : (x < 0) ? console.log('2') : console.log('3')

let yep = -8;

(yep < 0 && yep > -10) ? console.log('worked') : (yep > 0) ? console.log('worked!') : console.log(`didn\'t work`);