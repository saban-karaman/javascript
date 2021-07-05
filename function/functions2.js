// var a = 0;

// function add100(a) {
//     return a+100;
// }
// console.log(add100(1));

// const arrow = (a) => {
//     return a+100;
// }
// console.log{arrow(2)};

// const arrow = a => a+100;
// console.log(arrow(2));

// const user = 'Mark';

// const sayHi = (user) => `Welcome ${user}`
// console.log(sayHi(user));

//Zero Division Error

// const div = (num1, num2) => {
//     if (num2===0) {
//         return 'Zero Division';
//     }
// }

// const div = (num1, num2) => num2 === 0 ? 'Zero Division' : num1/num2

// console.log(div(18,0))

// const calcArea = radius => 3.14 * radius**2;

// console.log(calcArea(5))

//this methodu

// const cat = {
//     name: 'Muezza',
//     age: 8,
//     whatName() {
//         return this.name
//     }
// };
// console.log(cat.whatName());  // Output: Muezza

// const car = () => {make: "BMW"}  // output: undefined curly brace!

const car = () => ({make: "BMW"})  // output: {make:"BMW"} 
console.log(car());

