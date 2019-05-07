//Variables- Containers for storing data values (literally any information)

//var a means variable a exists. the right hand side is initilization which sets the value of the variable.
var a = 1;
var b = 2;
console.log(a + b);

/* Notes:

1. A variable must begin with a letter underscore or a dollar sign
2. numbers may follow the above characters but cannot come first
3. JavaScript is case sensitive - 'hello' and 'Hello' are different
4. Variables must be identified with unique names

*/

var x = 'helloooooooooooooooooooooo';
console.log('declaration', x)

x = 33
console.log ('Init 1:' , x);

var y = ("sup dawg");

console.log(x, y);

/* 
Var, Let, Const;
Var = 'old' keyword
Let = 'new' keyword
Const = 'new' keyword which declares unchangable variables
*/

let today = 'great!';

const elevenFifty = 'wonderful';

console.log(today, elevenFifty);

/* if you use a "," it will automatically put spaces between the strings. if you put "+" it will just jam them together. */

today = 'lovely';

console.log (today, elevenFifty);

elevenFifty = 'super!';
console.log(today, elevenFifty)