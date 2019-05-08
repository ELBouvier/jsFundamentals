// Parameters
function hi(parameter1, parameter2){
    console.log('HI')
    console.log(parameter1, parameter2)
}

function pet(animal) {
    console.log(`I have a ${animal} for a pet.`) // For string interpolation, you need backticks ``````````````````
}
 
pet('cat');   // I have a cat for a pet. [Result]
pet('dog');
pet('turtle');
pet('yo momma');



function name(firstname, lastname){
    console.log('Hello, my name is', firstname, lastname + '.')
}

name('Eric','Bouvier')