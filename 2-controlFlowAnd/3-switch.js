// Switch

let dessert = 'dookie'

switch (dessert) {
    case "pie":
    console.log('Pie, pie, me oh my!');
    break;
    case "cake":
    console.log('Cake is great!');
    break;
    case "ice cream":
    console.log('I scream for ice cream!')
    break;
    default:
        console.log(`Sorry, ${dessert} is not on the menu.`)
}

let friend;

switch (friend) {
    case "condition":
    console.log('');
    break;
    case "condition b":
    console.log('something else');
    break;
    default;
        console.log('default')
}

let yep = -8;

switch (true) {
    case (yep < 0 && > -10):
        console.log('Worked!')
    break;
    case (yep > 0):
        console.log('Worked!')
    break;
    default:
    console.log('Did not work!');
    
}