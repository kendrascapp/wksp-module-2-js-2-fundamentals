// HINT:
// You can get the Nth character, or letter, from a string by writing "string"[N].
// The returned value will be a string containing only one character (for example, "b").
// The first character has position 0, which causes the last one to be found at position string.length - 1.
// In other words, a two-character string has length 2, and its characters have positions 0 and 1.


// Q1
// Write a function countBs that takes a string as its only argument
// and returns a number that indicates how many uppercase “B”
// characters there are in the string.

function countBs(str) {                                             
    const letterArray = str.split('');                              
    let count = 0;                                                 
    for (let i = 0; i < letterArray.length; i++) {                   
        if (letterArray[i] === 'B') {
            count++;
        }
    }

    return count;
}
// -------------------------------------------------------------------------
console.log('Q1: ', countBs('BananaBabyBubbles'));

// 'countBs is the function' name and 'str is the argument' (of countBs) 
// Variables defined with 'const' behave like let variables, 
// except they cannot be reassigned
// const variables must be assigned a value ( = ) when they are declared 
// const defines a constant reference to a value
// 'count = 0'  because the first character has position 0 and we need to assign that
// 'for' sets the loop