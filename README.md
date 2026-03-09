## 1 . What is the difference between var, let, and const?
 - var: The traditional way to declare variables. It is function-scoped, meaning it is accessible throughout the function it is defined in. It can be re-declared and updated.

 - let: Introduced in ES6, let is block-scoped (only accessible within { }). It can be updated but cannot be re-declared within the same scope.

 - const: Also block-scoped, but it is used for variables that should not change. Once assigned, its value cannot be updated or re-declared.

 ## 2 . What is the spread operator (...)?
- The spread operator allows an iterable (like an array or object) to be expanded into individual elements. It is commonly used to make shallow copies of arrays or to combine multiple objects/arrays into one. For example: [...oldArray, newItem].

## 3 . What is the difference between map(), filter(), and forEach()?
- forEach(): Iterates over an array and executes a function for each element. It does not return a new array.

- map(): Iterates over an array and returns a new array containing the results of the function applied to every element.

- filter(): Iterates over an array and returns a new array containing only the elements that pass a specific logical condition.

## 4 . What is an arrow function?
- An arrow function is a concise syntax for writing JavaScript functions using the => operator. They do not have their own this context and are ideal for short, one-line operations.
Example: const greet = () => console.log("Hello World");

## 5 . What are template literals?
- Template literals are string literals that allow embedded expressions. They use backticks ( ` ) instead of quotes. They support multi-line strings and "string interpolation," allowing you to insert variables directly using ${variable}.