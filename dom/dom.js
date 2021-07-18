//document.getElementNy...
// const myDom = document.getElementById("dom");
// console.log(myDom);

// const instructor = document.getElementById("info");
// console.log(instructor);

// const ins = document.getElementById("instructor");
// console.log(ins);


// const withClassname = document.getElementsByClassName("class-info");
// console.log(withClassname[0]);

// const cw = document.getElementsByTagName("h3");
// console.log(cw);

// console.log(document.querySelectorAll(".class-info"));

// console.log(document.querySelector("#instructor"));

// console.log(document.querySelectorAll("h3"));

// console.log(document.querySelector("#info h1"));

////////////////////////////////////////////
// const brands = document.querySelector("#brands")
// // console.log(brands);
// brands.innerHTML += brands "<li>NioyaTech</li>";
// const copyRight = document.querySelector("#copy-right");
// // console.log(copyRight);
// copyRight.innerHTML = "&copy; 2021 clarusway.com";

const lessonList = [
    { id: 1, name: 'HTML' },
    { id: 1, name: 'CSS' },
    { id: 1, name: 'JS' },
    { id: 1, name: 'REACT' },
  ];

// const lessons = document.getElementById("lessons");
// // for (item of lessonList) {
// //     lessons.innerHTML += item.name + "<br>"
// // };
// const lessonElm = document.getElementById("lessons");
// lessonList.forEach((element) => {
//     lessonElm.innerHTML += `<li class = "lesson-item">${element.name}</li>`;
// });
////////////////////////////////////////////
// const mdn = document.querySelector("#mdn");

// const mdnHref = mdn.getAttribute("href");
// console.log(mdnHref);

// mdn.setAttribute("href", "https://www.w3schools.com/html/default.asp");

// mdn.innerHTML = "w3scools";
// const insElm = document.querySelector("#instructor li");

// insElm.forEach((item) => {
//     console.log(item.innerText.includes("FrontEnd"))
// });

// const jsPrg = document.querySelector("#brands");

// jsPrg.style.color = "green";
// jsPrg.style.backgroundColor = "red";

// const cwBanner = document.getElementById("cw-banner");

// console.log(cwBanner.classList);
// cwBanner.classList.add("imp");
// cwBanner.classList.remove("banner");

const cwQuote = document.querySelector("#quote-div");

cwElm = document.createElement("h2");
cwElm.innerText = "Clarusway";
cwQuote.appendChild(cwElm);