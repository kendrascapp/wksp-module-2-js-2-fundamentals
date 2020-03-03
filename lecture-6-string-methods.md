# 2.1.6 - JavaScript String Methods

---

## Methods

Methods have to be the most exciting part of JavaScript!

- Methods are special functions that reference the values of the data stored in the object.
- Methods are called with dot notation `object.method(arguments)`. _The period between object and method is the dot in dot notation._
- Because ALL of the data types we've learned about are actually objects, they all have a bunch of built-in methods and special properties.

---

For example, all objects have `toString` and `valueOf` methods.

```js
let num = 3;
num.toString();   /* this is how you can convert to strings *// "3"

let bool = true;  /* turns the word 'true' into a string */ / "true"
bool.toString();

let str = 'hello';  /* "hello" */
str.toString();

let arr = [1, 2, 'three']; /* "1,2, three" */
arr.toString();

let dip = {value: 3};  
dip.toString();
```

Let's look at the examples above again using `valueOf`.  

/* methods are functions INSIDE of each data value. Every data value has innate methods you can call */
---

- When programming with JavaScript we don't generally care that booleans, numbers and functions are objects. Their methods aren't that useful most of the time.

- The most helpful built-in methods are on strings and arrays.

_We'll talk more about objects and methods later when we talk about creating our own methods._

---

## Common String Methods

Strings have a bunch of methods and properties that will be immediately useful. 😉

- `.length`   
- `.replace()`
- `.slice()`    
- `.concat()`   (combine)
- `.split()`     
- `.indexOf()`  (give you position in array) 

📝 None of these methods **mutate** the string; strings are **immutable**.
📝 They return a new version of the string which you can then work with as you like.

---

### [`.length`](https://www.w3schools.com/jsreF/jsref_length_string.asp)

Calling `.length` returns the length of the sequence.

```js
// Example
const sentiment = 'I love programming';
sentiment.length;
// answer: 18 (there's 18 characters to this string)
```

---

### [`.replace()`](https://www.w3schools.com/jsreF/jsref_replace.asp)

The `.replace()` method replaces a specified value with another value in a string.

It takes 2 parameters, the value to replace and the new value.

```js
// Example
const sentiment = 'I love programming';
// sentiment2.replace('programming', 'bacon'):
//answer: "i love bacon"
```

---

### [`.slice()`](https://www.w3schools.com/jsreF/jsref_slice_string.asp)

`.slice()` extracts a part of a string and returns the extracted part in a new string.

- The method takes 2 parameters: the start position, and the end position.

```js
// Example
const sentiment = 'I love programming';
// s2.slice(2, 6); 
//answer: "love: 
// you have to count the characters starting at 0 and spaces count as a character.  
```

---

### [`.concat()`](https://www.w3schools.com/jsreF/jsref_concat_string.asp)

The `.concat()` method is used to join two or more strings.

```js
// Example
let partOne = 'Do or do not.';
let partTwo = 'There is no try.';
// const new1 = partOne.concat(partTwo);
// const2 new2 = `${partOne}${partTwo}`
// partOne.concat(partTwo);
// as soon as you put a ` it is a string literal and can accept JS
// to put JS in you need to do `${stuff u want to add})
```

---

### [`.split()`](https://www.w3schools.com/jsreF/jsref_split.asp)

The `.split()` method "split" a string into an array of _substrings_.

```js
// Example
const truth = 'The greatest teacher, failure is.';
// truth.split('') (if you split on nothing it will take the string and put it into indvidual letters)
// truth.split(' ') if you split on a space it will give tou the words spaced out
//splitting on a particular character will remove that character 
```

---

### [`.indexOf()`](https://www.w3schools.com/jsreF/jsref_indexof.asp)

The `.indexOf()` method returns the position of the first occurrence of a specified value in a string.

This method returns -1 if the value to search for never occurs.

```js
// Example
let yodaSpeak = "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.";
// yodaSpeak.indexOf('Anger') (have to capitalize the word you are looking for)
//index of is 56 (the position at which the word starts.. so in this case character 56)

```

_Why would JavaScript decide to return `-1` instead of some other value? like `0`?_

---

## More String Methods here...

https://www.w3schools.com/jsreF/jsref_obj_string.asp

---

[Next lecture: Array Methods P1](../lecture-7-array-methods-1)