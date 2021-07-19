let johnMass = 92;
let johnHeight = 1.95;
let markMass = 78;
let markHeight = 1.69;
let markBmi = markMass/(markHeight**2);
let johnBmi = johnMass/(johnHeight**2);

console.log(Math.round(johnMass/(johnHeight**2)), (markMass/(markHeight**2)), "✈");

if (markBmi > johnBmi) {
    console.log("Mark's BMI bigger tham Jhon", markBmi);
} else {
    console.log("John's BMI bigger tham Mark", johnBmi);
}

const birthyear = 1991;
if (birthyear <= 2000) {
    let century = 20;
}else{
    let century = 21;
}

const money = 0;
if (money == 0) {
    console.log("dont spend")
} else {
    console.log("should get a job")
}

let x = document.querySelector("#xx");
console.log(x);

function ch(nam){
    if (nam.checked) {
        document.getElementById("yy").style.color = "red";
        document.getElementById("yy").style.textDecoration = "underline";

}else{
    document.getElementById("yy").style.color = "black";
    document.getElementById("yy").style.textDecoration = "none";

}
}
let dolp = [96, 108, 89];
let kol = [88, 91, 110];
let akol = 0;
let adolp = 0;

for (let i = 0; i < dolp.length; i++) {
  adolp += dolp[i];    
}

for (let i = 0; i < kol.length; i++) {
    akol += kol[i];    
  }

adolp = adolp/(dolp.length)
;
akol = akol/(kol.length);

if (adolp > akol) {
    console.log("dolphin wins")
} else if (akol < adolp){
    console.log("koala wins")
}else {
    console.log("draw");
}

const day = "wednesday";
switch (day) {
    case "monday":
        console.log("plan course");
        console.log("go to coding meetup");
        break;
    case "tuesday":
        console.log("prepare")
        break;
    case "wednesday":
    case "thursday":
        console.log("sleeping");
        break;
    case "friday":
        console.log("enjoy");
    default:
        console.log("not valid day")
        break;
}


const ages = 23;
const drink = ages >= 18 ? 'wine 🍷':'water 💧';
console.log(drink);



let bil = 430;

console.log(`The bill was ${bil}, the tip was ${50 <= bil && bil<=300 ? bil*0.15:bil*0.2} total value ${bil+(50 <= bil && bil<=300 ? bil*0.15:bil*0.2)}`)