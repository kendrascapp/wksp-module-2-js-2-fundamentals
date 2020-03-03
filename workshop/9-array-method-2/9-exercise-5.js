// For exercises 4 to 8, you are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

// Q5
// Returns a new list with all the elements of lst that are length greater than 5
// create a function to check # in given string 
// tell keepLong to check # of character in each string in the array 

function keepLong(lst) {
let greaterThan5 = function(givenString) {
    return (givenString.length > 5);
}  
let names = lst.filter(greaterThan5);
return names;
}
// -------------------------------------------------------------------------
console.log('Q5 keepLong()', keepLong(['Cyborg', 'Robin', 'Batman', 'Superman', 'Aquaman', 'Flash']));