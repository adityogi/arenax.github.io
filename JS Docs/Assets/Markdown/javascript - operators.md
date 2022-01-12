JavaScript Operators
In this tutorial, you will learn about different operators available in JavaScript and how to use them with the help of examples.

What is an Operator?
In JavaScript, an operator is a special symbol used to perform operations on operands (values and variables). For example,

2 + 3; // 5
Here + is an operator that performs addition, and 2 and 3 are operands.

JavaScript Operator Types
Here is a list of different operators you will learn in this tutorial.

Assignment Operators
Arithmetic Operators
Comparison Operators
Logical Operators
Bitwise Operators
String Operators
Other Operators
JavaScript Assignment Operators
Assignment operators are used to assign values to variables. For example,

const x = 5;
Here, the = operator is used to assign value 5 to variable x.

Here's a list of commonly used assignment operators:

LIST

Note: The commonly used assignment operator is =. You will understand other assignment operators such as +=, -=, *= etc. once we learn arithmetic operators.

JavaScript Arithmetic Operators
Arithmetic operators are used to perform arithmetic calculations. For example,

const number = 3 + 5; // 8
Here, the + operator is used to add two operands.

LIST

Example 1: Arithmetic operators in JavaScript

let x = 5;
let y = 3;

// addition
console.log('x + y = ', x + y);  // 8

// subtraction
console.log('x - y = ', x - y);  // 2

// multiplication
console.log('x * y = ', x * y);  // 15

// division
console.log('x / y = ', x / y);  // 1.6666666666666667

// remainder
console.log('x % y = ', x % y);   // 2

// increment
console.log('++x = ', ++x); // x is now 6
console.log('x++ = ', x++); // prints 6 and then increased to 7
console.log('x = ', x);     // 7

// decrement
console.log('--x = ', --x); // x is now 6
console.log('x-- = ', x--); // prints 6 and then decreased to 5
console.log('x = ', x);     // 5

//exponentiation
console.log('x ** y =', x ** y);

JavaScript Comparison Operators
Comparison operators compare two values and return a boolean value, either true or false. For example,

const a = 3, b = 2;
console.log(a > b); // true
Here, the comparison operator > is used to compare whether a is greater than b.

LIST

Example 2: Comparison operators in JavaScript
// equal operator
console.log(2 == 2); // true
console.log(2 == '2'); // true

// not equal operator
console.log(3 != 2); // true
console.log('hello' != 'Hello'); // true

// strict equal operator
console.log(2 === 2); // true
console.log(2 === '2'); // false

// strict not equal operator
console.log(2 !== '2'); // true
console.log(2 !== 2); // false
Comparison operators are used in decision-making and loops. You will learn about the use of comparison operators in detail in later tutorials.

JavaScript Logical Operators
Logical operators perform logical operations and return a boolean value, either true or false. For example,

const x = 5, y = 3;
(x < 6) && (y < 5); // true
Here, && is the logical operator AND. Since both x < 6 and y < 5 are true, the result is true.

LIST

Example 3: Logical Operators in JavaScript
// logical AND
console.log(true && true); // true
console.log(true && false); // false

// logical OR
console.log(true || false); // true

// logical NOT
console.log(!true); // false
Output

true
false
true
false
Logical operators are used in decision making and loops. You will learn about the use of logical operators in detail in later tutorials.

JavaScript Bitwise Operators
Bitwise operators perform operations on binary representations of numbers.

LIST

Bitwise operators are rarely used in everyday programming. If you are interested, visit JavaScript Bitwise -- <https://www.programiz.com/javascript/bitwise-operators> Operators to learn more.
JavaScript String Operators
In JavaScript, you can also use the + operator to concatenate (join) two or more strings.

Example 4: String operators in JavaScript
// concatenation operator
console.log('hello' + 'world');

let a = 'JavaScript';

a += ' tutorial';  // a = a + ' tutorial';
console.log(a);
Output

helloworld
JavaScript tutorial
Note: When + is used with strings, it performs concatenation. However, when + is used with numbers, it performs addition.

Other JavaScript Operators
Here's a list of other operators available in JavaScript. You will learn about these operators in later tutorials.

LIST
