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