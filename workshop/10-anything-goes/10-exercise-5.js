// Q5
// Write a JavaScript program to find ALL the Armstrong 
// numbers between 0 and 999, store them in array an output
// that array to the console.

// Note : An Armstrong number of three digits is an integer 
// such that the sum of the cubes of its digits is equal 
// to the number itself. For example,
// 371 is an Armstrong number since 3*3 + 7*3 + 1*3 = 371.

let armstrongNumbers = [];
for (let i = 0; i < 1000; i++) {      // start your loop with 'for' and put the number start and number end and i++
    let digits = i.toString().split('');    
    let sum = 0;
    digits.forEach(function(digit) {
        sum += Number(digit) * Number(digit) * Number(digit);       //this means the numbers shown have to follow this formula 
    });
    if (sum === i) {
        armstrongNumbers.push(i);
    }
}


console.log(armstrongNumbers);