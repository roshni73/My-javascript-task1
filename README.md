# My-javascript-task1
This is a simple task that demonstrates  Basic JavaScript
## Event Loop
The event loop is a mechanism in JavaScript that handles the execution of multiple chunks of your program over time. Each chunk is a piece of code that is executed by the JavaScript engine, which could be a function, a callback, or an event handler. The event loop allows JavaScript to perform non-blocking operations by offloading operations to the system kernel whenever possible.

### JavaScript Threading

JavaScript is single-threaded, which means it processes one operation at a time in a single sequence, or thread, of execution. However, JavaScript can appear to be multi-threaded due to its asynchronous non-blocking behavior, enabled by the event loop and APIs provided by the browser or Node.js.

### Runtime Errors

A runtime error is an error that occurs during the execution of a program. In JavaScript, runtime errors can be caused by a variety of reasons such as type mismatches, reference errors, range errors, etc.
## Immediately Invoked Function Expressions (IIFEs)
An IIFE is a function that runs as soon as it is defined. The function expression is enclosed within () operator to create a local scope. Then, the function is immediately invoked with another pair of parentheses ().
```javascript
(function() {
    let message = 'Hello, world!';
    console.log(message); 
})();

console.log(message);//undefined
```
## Array Manipulation

### difference between map and forEach
#### map():
This function is used when you want to transform all elements of an array and create a new array with the transformed elements. It does not mutate the original array. It takes a callback function as an argument, which is applied to each element of the array, and returns a new array.
```javascript
let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map(num => num * num); // [1, 4, 9, 16, 25]
```
#### forEach():
This function is used when you want to execute a function for each element in the array. It does not return anything. It is typically used for side effects such as updating the DOM, logging to the console, or changing external (to the function) variables.
```
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));
```
### Concept of Immutability in array manipulation
Immutability is a concept in programming where an object cannot be changed after it's created. In JavaScript, primitive types like numbers, strings, and booleans are immutable by default. However, objects and arrays are mutable, meaning their properties or elements can be changed.
nstead of modifying the original array, you create a new array with the desired changes. This approach can prevent unintended side effects where the original array is used elsewhere in the code.





