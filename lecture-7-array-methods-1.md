# 2.1.7 - JavaScript Array methods P1

---

- Arrays have a bunch of methods attached to them.
- Many of which you'll use on a daily basis.

---

## Common Array methods

- `.concat()` // combines the two 
- `.join()` 

---

### [`.concat()`](https://www.w3schools.com/jsreF/jsref_concat_array.asp)

The `.concat()` method returns a _new_ array with the values of two existing arrays.

```js
// Example
const arrayOne = ['think', 'dream', 'learn', 'write'];
const arrayTwo = ['thought', 'dreams', 'knowledge', 'truth'];

let newArray = arrayOne.concat(arrayTwo);

```

---

### [`.join()`](https://www.w3schools.com/jsreF/jsref_join.asp)

The `.join()` method returns the array as a string.

```js
// Example
const lexicon = ['The', 'large', 'shaggy', 'dog', 'barked', 'at', 'the', 'silence'];

let sentence = lexicon.join(); 
//result: "the,large,shaggy,dog,barked....."
//if you put a space next to join -  lexicon.join(' ') it will put spaces between the words you are joining. 
// join is the opposite of split 
```

---

And there are so many more.

---

## Exercise

Let's dip into the internet and see if we can learn all of these methods collectively.

1. `.includes()`
let summer = ['annoying', 'sister', 'warrior'];
console.log('.includes()', summer.includes('sister'))
console.log('.includes() ', summer.includes('sis'));

`.slice()`
let veg = ['carrot', 'celery', 'cabbage', 'broccoli', 'onion']
const cruc


2. `.indexOf()`, // a search tool which identifies the location of a value/string based on its character number
if the value / string does not exist, it returns the value -1

example 
string = "baby yoda is the cutest character of all time" 
let string.indexOf("yoda");
yoda = 5

`.push()` // adds new items to the end of an array and returns the new combined length (mutates the array)

example: let outfit = ["shoes", "pants", "shirt"];
outfit.push("hat", "purse", "coat");
console.log(outfit)

// 


3. `.pop()` 
let outfit = ["shoes", "pants", "shirt"];
outfit.pop();
console.log(outfit);
returns shirt, leaving pants and shirt together in the array 

`.sort()`
sorts the array alphabetically 

4. `.shift()`, `.unshift()`
5. `.reverse()`, `.lastIndexOf()`
6. `.splice()`, `.toString()`

- Split into teams of 2.
- Take given methods
    - find an explanation/definition, then write your own.
    - create two examples of each method in use. Be creative. 😛

---

[Next lecture: Functions](../lecture-8-functions)