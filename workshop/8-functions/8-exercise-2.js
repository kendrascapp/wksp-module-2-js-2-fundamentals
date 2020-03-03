// Q2a
// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)

// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp

function max(num1, num2){
    return (num1 < num2 ? num2 : num1);
}
console.log(max(10, 20));


// Q2b
// Without changing the function at all, 
// can you figure out how we could use it to determine the greater number between 4 integers?
console.log(max(max(5, 12), max(7, 19)));

// Q2c
// Would this work with more integers? 
// yes