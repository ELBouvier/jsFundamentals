// for of loops

// for of loops look at numbers, so indexes of arrays count
// the for... of statement creates a loop iterating over iterable objects, meaning it can numerically look over these items
// inumerable looks over an ordered schema

let student = {name: 'peter', awesome: true, degree: 'Javascript', week: 1};
for (week of student) {
    console.log('item =>', item) // console logs name awesome degree and week.
    console.log('student[item] =>'), student[name];
}

let catArray = ['tabby', 'british shorhair', 'burmese', 'maine coon', 'rag doll'];
for (cat of catArray){
    console.log(cat)
}

for (cat in catArray){
    console.log(cat)
}