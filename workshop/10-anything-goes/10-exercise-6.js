// Q6
// Take the code you wrote in Q5 and now let's create a
// reusable function that takes two arguments,
// numbers that dictate the range within which to look for 
// Armstrong numbers.

// This means that our code from the previous question will need to be tweaked a little
// to determine Armstrong numbers of different lengths.
// e.g.
// a number of 1 digit; each digit is to the power of 1
// a number of 2 digit; each digit is to the power of 2
// a number of 3 digit; each digit is to the power of 3
// a number of 4 digit; each digit is to the power of 4
// a number of 5 digit; each digit is to the power of 5

// See this site for a list of "narcissistic" numbers
// http://mathworld.wolfram.com/NarcissisticNumber.html

function identifyArmstrongNumbers(num1, num2) {
    let armstrongNumbers = [];      //this was first line from 5 
    for (let i = num1; i <= num2; i++) {  //0 and 1000 changes to num1 num2
        let digits = i.toString().split('');  //the same as 5
        let sum = 0;      //the same
        digits.forEach(function(digit) {      //the same
            let product = 1;
            for (let x = 0; x < digits.length; x++) {
                product *= digit;
            }
            sum += product;
        });
        if (sum === i) {  //the same
            armstrongNumbers.push(i);     //the same
        }
    }

    return armstrongNumbers;
}

console.log(identifyArmstrongNumbers(100, 99999));