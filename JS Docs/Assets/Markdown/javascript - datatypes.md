# JavaScript Data Types #

1. There are eight basic types of data types in JavaScript.

* They are: 

     1. String
     2. Number
     3. BigInt
     4. Boolean
     5. undefined
     6. null
     7. Symbol
     8. Object

>>Note: The Object data type (non-primitive type) can store collections of data, whereas primitive data type can only store a single data.

-----------------------
## JavaScript Strings ##

**String** is used to store text. 
In JavaScript, strings are surrounded by quotes:
> - Single quotes: 'Hello'
> - Double quotes: "Hello"
> - Backticks: `Hello`

Example: 
```
     const name = 'ram';
     const name1 = "hari";
     const result = `The names are ${name} and ${name1};
```
- Single quotes and double quotes are practically the same and you can use either of them.

- Backticks are generally used when you need to include variables or expressions into a string.
-  This is done by wrapping variables or expressions with **```${variable or expression}```** as shown above.
-----------------------
## JavaScript Number ##
**``` Number ```** represents integer and floating numbers (decimals and exponentials).\
Example: 
```
     const number1 = 3;
     const number2 = 3.433;
     const number3 = 3e5 // 3 * 10^5
```
> A number type can also be 
1. **+Infinity**
2. **-Infinity**
3. **NaN (not a number)**\
Example 1: 
```
     const number1 = 3/0;
     console.log(number1); // Infinity

     const number2 = -3/0;
     console.log(number2); // -Infinity

     // strings can't be divided by numbers
     const number3 = "abc"/3; 
     console.log(number3);  // NaN
```
-----------------------
## JavaScript BigInt ##

* In JavaScript, Number type can only represent numbers less than (253 - 1) and more than -(253 - 1).
*  However, if you need to use a larger number than that, you can use the `BigInt` data type.\
Example 1:
```
     // BigInt value
     const value1 = 900719925124740998n;

     // Adding two big integers
     const result1 = value1 + 1n;
     console.log(result1); // "900719925124740999n"

     const value2 = 900719925124740998n;

     // Error! BitInt and number cannot be added
     const result2 = value2 + 1; 
     console.log(result2); 
```
Output
```
     900719925124740999n
     Uncaught TypeError: Cannot mix BigInt and other types
```
>> Note: BigInt was introduced in the newer version of JavaScript and is not supported by many browsers including Safari.\
Visit JavaScript BigInt support to learn more.
-----------------------
## JavaScript Boolean ##
- This data type represents logical entities. 
- Boolean represents one of two values: **`true`** or **`false`**.
- It is easier to think of it as a yes/no switch.

Example 1:
```

     const dataChecked = true;
     const valueCounted = false;
     
```
-----------------------
## JavaScript undefined ##
- The `undefined` data type represents **value that is not assigned**.
- If a variable is declared but the value is not assigned, then the value of that variable will be `undefined`.

Example 1:
```
     let name;
     console.log(name); // undefined
```

- It is also possible to explicitly assign a variable value undefined.

Example 2:
```
     let name = undefined;
     console.log(name); // undefined
```

>> Note: It is recommended not to explicitly assign `undefined` to a variable.\
Usually, `null` is used to assign 'unknown' or 'empty' value to a variable.
-----------------------
## JavaScript null ##

In JavaScript, `null` is a special value that represents **empty** or **unknown** value.

Example 1:
```
     const number = null;
```


The code above suggests that the number variable is empty.


>>Note: `null` is not the same as **NULL or Null**.
-----------------------
## JavaScript Symbol ##

- This data type was introduced in a newer version of JavaScript (from ES2015).
- A value having the data type Symbol can be referred to as a **symbol value**.
