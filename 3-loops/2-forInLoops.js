// For in loops

//great for iterating over balues in an object
//the for in statement iterates a specified variable over all the enumerable properties of an object

let student = {name: 'peter', awesome: true, degree: 'Javascript', week: 1};
for (item in student) {
    console.log('item =>', item) // console logs name awesome degree and week.
    console.log('student[item] =>', student[name])
}

let dogArray = ['collie', 'pit bull', 'newfie', 'dachshund']; //in an array, it'll give the values
for (dog in dogArray){  //in an array, it'll give the values
    console.log(dog)
}


// Write a for in loop that capitalizes the first letter of a student's name
let studentName= 'cody';
let capName;
for(let n in studentName) {
    if (n == 0) {
        capName = studentName[n].toUpperCase();
    } else {
        capName += studentName[n].toLowerCase
    }
}
console.log(capName);