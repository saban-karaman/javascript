// function hello() {
//     console.log("Hello World!")
// }

// hello()

// function sum(a, b) {
//     return a+b;
    
// }   

// document.write(sum(12, 3));

// function sayHi(name) {
//     console.log(`Hello ${name}`);
//     name='Ed'
//     console.log(`Hello ${name}`);
// }

// let myName = 'mark';
// sayHi(myName)
// console.log('outside', myName);

// let student = {};
// student.name = 'Mark'
// function sayHi2(student){
//     console.log(`Hello ${student.name} entry point`);
//     student.name ='John';
//     student = {name : 'Leon'}
//     console.log(`Hello ${student.name} inside function`);
// }
// sayHi2(student)
// console.log(`Hello! ${student.name} from outside`);


// function div(num1, num2) {
//     // console.log(num1/num2);
//     if (num2 === 0) {
//         console.log("Zero Division Error");
        
//     }else{
//         console.log(num1/num2);
//     }
// }


// div(10, 0)

// function divv2(num1, num2) {
//     return num2 ? num1 / num2 : 'Zero Division Error'
// }


// console.log(div2(18, 3));

// function sum(a, b, ...args) {
//     // console.log(arguments);
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++){
//     total += arguments[i];
//     }
//     return (total);
// }

// console.log(sum(1,2,3,4,5,6,7,100));

// function sum2(a, b, ...args) {
//     console.log(args);
//     console.log(arguments);
//     return a+b
    
// }

// console.log(sum2(1,2,3,4,5,6,7,100));


// function sayHi1() {
//     return 'Hello from sayHi1'
// }

// console.log(sayHi1());

// const sayHi2 = function greet() {
//     return 'hello sayhi2'
// }

// console.log(sayHi2())


const pascalNumber = function(n){
    return (n*(n+1)/2)
}

console.log(pascalNumber(4));