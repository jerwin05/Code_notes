// const HIGH_TEMPERATURES = {
//     yesterday: 75,
//     today: 77,
//     tomorrow: 80
//   };
//   const {today,tomorrow} = HIGH_TEMPERATURES;
//   console.log(tomorrow);

// const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
// console.log(a,b,c); // 1, 2, 5
// console.log(1,2); 
  
// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function removeFirstTwo(list) {
//   "use strict";
//   // change code below this line
//   const [a, b, ...arr] = list;
//   // change code above this line
//   return arr;
// }
// const arr = removeFirstTwo(source); //this const arr is different from const arr inside the function
// console.log(arr);

const person = {
    name: "Zodiac Hasbro",
    age: 56
  };
  // Template literal with multi-line and string interpolation
  const greeting = `Hello, my name is ${person.name}!
  I am ${person.age+3} years old.`;
  console.log(greeting); // prints
  // Hello, my name is Zodiac Hasbro!
  // I am 56 years old.
  