// "use strict";

// let hasDriversLicences = false;
// const passTest = true;

// if (passTest) hasDriversLicences = true;
// if (hasDriversLicences) console.log("i can drive :d");

// const interface = "audio";


// function logger() {
//     console.log("my name is alex");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges. `;
//     return juice
// }


// fruitProcessor(5, 0);
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23");


// function calcAge1(birthYear){
//     const age = 2037 - birthYear;
//     return age;
// }

// const age1 = calcAge1(1986);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1986);
// console.log(age1, age2);

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1986);
// console.log(age3)

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retiremet = 65 - age;
//     return `${firstName} retires in ${retiremet} years`
// }


// console.log(yearsUntilRetirement(1986, "alex"));





function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces =  cutFruitPieces(apples);
    const appleOranges =  cutFruitPieces(oranges);

    console.log(apples, oranges);
    const juice = `juice with ${applePieces} apples and ${appleOranges} oranges. `;
    return juice
}

console.log(fruitProcessor(2, 3));
console.log(fruitProcessor(4+54, 8));
