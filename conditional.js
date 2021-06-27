// var a = '5';
// var b = '3';

// console.log(a-b);

// let x = 100 + 50 * 3
// console.log(x)


// let x = 2 && 3;
// console.log(x)


//.lenght string uzunluğunu verir
//.includes ('@') true veya false
// let password = 'passwo';
// console.log(password.length >= 5 && password.includes('@'));

// let password ='p@ssw'
// console.log(password.length >= 8 || password.includes('@') && password.length>5);

//Nullish operator

// var a;
// console.log(a ?? 'hello'); // nulll s text output: text

// var a = 0;
// console.log(a ?? 'hello'); // nulll s text output: a

// if else yapıları
// let score = 81;
// if (score >= 50){
//     console.log('congrulate')
// }
// if (score>=50) console.log('Cograts');

// if (score > 80){
//     console.log('congrats')
// }else{
//     console.log('should try hard')
// }

// //Ternary Operator
// score > 80 ? console.log('congrats') : console.log('should try hard');

// let score = 80;
// if (score > 80){
//     console.log('congrats')
// }else if (score>=50){
//     console.log('not bad')
// }else{
//     console.log('should try')
// }

// let score = prompt('whats your exam');
// if (score > 80){
//     console.log('congrats')
// }else if (score>=50){
//     console.log('not bad')
// }else{
//     console.log('should try')
// }
// let userName = 'Mark';
// userName ? console.log(`hello ${userName}`) : console.log('please login')

// let score = 81;
// score > 80 ? console.log('Tebrikler'): (score >=50 ? console.log('Fena değil'): console.log('çalışman lazım'));
//Switch case statements

var text;
var fruits;
fruits = fruits.toLowerCase();
switch (fruits){
    case "banana":
        text="banana is good";
    break;
    case "orange":
        text="orange is not my best";
    break;
    case "apple":
        text="how you like them apples";
    break;
    default:
        text = "i have neer heard this fruit"

}
console.log(text);