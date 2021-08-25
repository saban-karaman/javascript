console.log(' > Clarusway');
const countries = document.querySelector('.countries');
countries.style.opacity = 1;





// setInterval

function countSeconds( limit ) {
 let current = 0;
 const intId = setInterval(() => {
     if (current == limit) {
         clearInterval(intId);
         return;
     }
     current++;
     console.log(`${current} seconds passed.`);
 }, 1000);


}

// countSeconds(4);


// setTimeout
let current = 0;
function countSeconds2(limit) {
  // recursive
  if (current > limit) {
    console.log('counter finished.');
  } else {
    if (current != 0) {
      console.log(`${current} seconds passed.`);
    }
    current++;
    setTimeout(countSeconds2, 1000, limit);
  }
}
// countSeconds2(3);

// new Promise(function (resolve, reject) {
//     const isSuccesful = true;
//     if (isSuccesful) {
//         resolve("task completed ")
//     }
//     reject("failed");
// }).then((sonuc) =>{
//     console.log(sonuc);
//     return 'devam ediyor';
// })
// .then(comsole.log)
// .catch((err) => console.log(err));

const renderCountry = (data, className = '') => {
    const countriesSection = document.querySelector('.countries');
    const html = `
    <div class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span><i class="fas fa-lg fa-landmark"></i></span>${
          data.capital
        }</p>
        <p class="country__row"><span><i class="fas fa-lg fa-users"></i></span>${(
          +data.population / 1_000_000
        ).toFixed(1)}M People</p>
        <p class="country__row"><span><i class="fas fa-lg fa-comments"></i></span>${
          data.languages[0].name
        }</p>
        <p class="country__row"><span><i class="fas fa-lg fa-money-bill-wave"></i></span>${
          data.currencies[0].name
        }</p>
      </div>
    </div>`;
  
    // / ${data.nativeName}
    countriesSection.insertAdjacentHTML('beforeend', html);
    countriesSection.style.opacity = 1;
  };
  
  fetch('https://restcountries.eu/rest/v2/name/turkey')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderCountry(data[0]);
    });
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (data) {
  //     console.log(data[0]);
  //   });
  
  const getCountryData = (countryName) => {
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
      .then((response) => {
        console.log(response);
        if (!response.ok) throw new Error('something went wrong!');
        return response.json();
      })
      .then((countryData) => {
        console.log(countryData[0]);
        renderCountry(countryData[0]);
      })
      .then((neighbors) => {})
      .catch((error)=>console.log(error.message));
  };
  
  getCountryData('italy');
  getCountryData('Usa');