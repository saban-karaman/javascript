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





// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces =  cutFruitPieces(apples);
//     const appleOranges =  cutFruitPieces(oranges);

//     console.log(apples, oranges);
//     const juice = `juice with ${applePieces} apples and ${appleOranges} oranges. `;
//     return juice
// }

// console.log(fruitProcessor(2, 3));
// console.log(fruitProcessor(4+54, 8));


// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const retirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retire = 65 - age;

//     if (retire > 0){
//         return retire;
//     } else {
//         return -1;
//     }

//     // return retire;

//     // return `${firstName} retires in $ {retire} years`;
// }

// console.log(retirement(1986, "saban"));

// const calcAverage = (score1, score2, score3) =>{
//     return (score1+score2+score3)/3
// }

// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

// function checkWinner(teamA, teamB) {
//     if (teamA > 2*teamB) {
//         console.log(`Dolphin win (${teamA} vs. ${teamB})`)
//     } else if ( teamB > 2*teamA) {
//         console.log(`Koala win (${teamB} vs. ${teamA})`)
//     } else {
//         console.log(`No wins (${teamA} vs. ${teamB}) `)
//     }
// }

// checkWinner(avgDolphins, avgKoalas);

// const friend1 = "michael";
// const friend2 ="steven";
// const friend3 = "peter";

// const friends = ["michael", "steven", "peter"];

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends.length);
// console.log(friends[friends.length-1]);


// friends[2] = "jay";
// console.log(friends);


// const firstName = "jonas";
// const jonas = [firstName, "shedmant", 2037-1991, "teacher", friends];

// console.log(jonas);

// const friends = ["michael", "steven", "peter"];
// friends.push("jay");
// console.log(friends);

// friends.unshift("john");
// console.log(friends);

// friends.pop();
// console.log(friends);
// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("steven"));

// console.log(friends.includes("steven"));


// const calcTip = function (tip) {
//     if (tip > 50 && tip < 300) {
//         return tip*0.15
//     } else {
//         return tip*0.20
//     }
// }

// const bills = [125, 555, 44];

// let tips = [];
// for (let i = 0; i < bills.length; i++) {
    
//     tips.push(calcTip(bills[i]))
// };

// let total = [];
// for (let i = 0; i < tips.length; i++) {
    
//     total.push(tips[i]+bills[i])
// };



// console.log(tips);
// console.log(total);

// const alexArray = [
//     "jonas",
//     "schmedtamn",
//     2037 - 1991,
//     "teacher",
//     ["michael", "peter", "steven"]
// ];

// const alex = {
//     firstName: "alex",
//     lastName: "souza",
//     age: 2037 - 1991,
//     job:"teacher",
//     friends:["michael", "peter", "steven"]
// };

// console.log(alex);
// console.log(alex.lastName);
// console.log(alex["lastName"]);

// const nameKey = "Name";
// console.log(alex["first"+nameKey]);
// console.log(alex["last"+nameKey]);

// const interestedIn = prompt('What do you want to know about Alex? ');
// console.log(alex[interestedIn]);

// if (alex[interestedIn]) {
//     console.log(alex[interestedIn]);
// } else {
//     console.log('Wrong request');
// }


// alex.location = "brasil";
// alex["twitter"] = "@alexsouza";
// console.log(alex);


// const jonas = `${alex.firstName} has ${alex.friends.length} friends, and his best friend is called ${alex.friends[0]}`;
// console.log(jonas);

// const alex = {
//     firstName: "alex",
//     lastName: "souza",
//     age: 2037 - 1991,
//     birthYear: 2000,
//     job:"teacher",
//     friends:["michael", "peter", "steven"],
//     hasDriverLicence: true,

//     // calcAge: function() {
//     //     return 2037 - alex.birthYear;
//     // }
//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     }
// };

// console.log(alex.calcAge());
// // console.log(alex['calcAge'](1992));

// console.log(`${alex.firstName} is a  ${alex.calcAge()}-year old ${alex.job}, and he has a ${alex.hasDriverLicence ? 'drivers licence': 'not has licence'}`);

// const mark = {
//     fullname: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBmi: function () {
//         return this.mass / (this.height**2)
//     }, 
//     bmi: function () {
//         return this.fullname+`(${this.calcBmi()}) is higher than ${john.fullname}'s(${john.calcBmi()})`
// }};

// const john = {
//     fullname: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBmi: function () {
//         return this.mass / (this.height**2)
//     }, 

//     bmi: function () {
//         return this.fullname+`(${this.calcBmi()}) is higher than ${mark.fullname}'s(${mark.calcBmi()})`
//     }
// };
// console.log(john.calcBmi());
// console.log(mark.calcBmi());
// console.log(`${john.calcBmi() > mark.calcBmi() ?  john.bmi() : mark.bmi()} `);

// for (let rep = 6; rep >=10; rep++) {
//     console.log(`lifting weights repetition ${rep}`);
    
// }

// const alex = [
//     "jonas",
//     "schmedtamn",
//     2037 - 1991,
//     "teacher",
//     ["michael", "peter", "steven"]
// ];

// for(let i = 0; i<5 ; i++) {
//     console.log(alex[i]);
// }

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i<years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages);

// for(let i = alex.length-1; i>=0; i--) {
//     console.log(alex[i]);
// }

// for (let rep = 1; rep <=10; rep++) {
//     console.log(`lifting weights repetition ${rep}`);
    
// }

// while (rep <=10) {

// }
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let empty = [];


const calcTip = function (tip) {
    if (tip > 50 && tip < 300) {
        return tip*0.15
    } else {
        return tip*0.20
    }
}

// const bills = [125, 555, 44];

let tips = [];
for (let i = 0; i < bills.length; i++) {
    
    tips.push(calcTip(bills[i]))
};

let total = [];
for (let i = 0; i < tips.length; i++) {
    
    total.push(tips[i]+bills[i])
};

console.log(tips);
console.log(total);
