// Arrow Functions

// Normal
function coffee() {
    console.log('coffee is good');
}

// Fat Arrow
let coffee = () => {
    console.log('fat arrow coffee');
}

// Consise body. Doesnt need parentheses if theres only 1 parameter. Return is implied. Line breaks are bad.
let apples = (x, y) => console.log (`There are ${x} apples and ${y} pears.`);
apples (10, 5)

//Block Body. 
let apples = (x, y) => {console.log(`There are ${x} apples and ${y} pears.`);}
apples (10, 5)