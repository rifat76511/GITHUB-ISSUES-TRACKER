## 1 . What is the difference between var, let, and const?
 - var: The traditional way to declare variables. It is function-scoped, meaning it is accessible throughout the function it is defined in. It can be re-declared and updated.

 - let: Introduced in ES6, let is block-scoped (only accessible within { }). It can be updated but cannot be re-declared within the same scope.

 - const: Also block-scoped, but it is used for variables that should not change. Once assigned, its value cannot be updated or re-declared.