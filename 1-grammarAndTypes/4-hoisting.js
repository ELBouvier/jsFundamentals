// Hoisting

console.log(scissors);
scissors = 'blue';

console.log(scissors);
var scissors;

// JS reads code twice. First time it looks for left hand declarations. Second time it looks at the right hand inits.