//There are different types of data

//Boolean: on off, true false

let on = true;
console.log(on);

let off = false;
console.log(off);

//Null
//Null = empty value (not 0, not undefined)

let empty = null;
console.log(empty);

//Undefined
//Undefined = value not assigned. not an error, just doesn't have a value yet.
let undef;
console.log(undef);

// Numbers
let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

//Once you get up to 16 digits, JS rounds up sometimes
let rounded = 9999999999999999;
console.log(rounded);

//JS does not like decimals
let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

// Strings
// Any kind of value that starts and finishes in between quotes '' or ""

let stringOne = "double quotes";
let stringTwo = 'single quotes';

console.log(stringOne, stringTwo)

let first = 1050 + 100;
let second = '1050 + 100'

console.log(first)
console.log(second)

console.log(typeof first)
console.log(typeof second)

let third = 1050 + '100';
console.log(third);
console.log(typeof third);

let firstName = 'Eric';
let lastName = 'Bouvier';
let houseNumber = '1028';
let street = 'Sandy Cove Way';
let city = 'Indianapolis, Indiana';
let zipcode = '46227';

console.log('My name is', firstName, lastName + '.', 'My address is', houseNumber, street, city, zipcode + '.',);

// Objects
// An object can hold multiple types of data inside of it. 'A collection of key-value pairings. 
// Denotes with { }. Has keys and values (color (key)): 'blue' (value)), separated with a colon.
//Each key is separated with a comma

let burritosNow = {
    size: 'large',
    quantity: 4,
    now: true,
};

console.log(burritosNow.where)

// Arrays
// Good for lists. Denotes by [ ]. Also don't have key value pairings.
// List of data with commas, but no key pairing.

let burritos = ['large', 4, true];
console.log(burritos);