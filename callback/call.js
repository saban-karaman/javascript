const movements = [100, 300, -200, 500, -400, 225, 1000, -700];
// 1
// You deposited $xx
// You withdrew $xxx 

//  arrDeposits =
//  arrWithdraws =
// for each
//
function order(array) {
    let withdrew = 0;
    let deposited = 0;
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] < 0 ) {
            withdrew -= array[i];
        };
        if (array[i] > 0) {
            deposited += array[i]
        };
    
    };
    console.log(withdrew);
    console.log(deposited);
}

order(movements);






/******** */

// map initials
const str = 'Clarusway Online Career IT Training School';
let xx = "";
function swapCase(str){
    for(let i = 0; i<str.length; i++){
        if(str[i] === str[i].toLowerCase()){
            xx += str[i].toUpperCase();;
           
        }else {
            xx += str[i].toLowerCase();
            
        }
    }
   console.log(xx);
}



swapCase(str);








/***** */
// map

// const str = 'The Quick Brown Fox'; // tHe YeLLoW fOx 
// Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'
















// filter words longer than 6 letters
const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
  'Clarusway',
  'Future',
];

let yy = "";
function filters(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > 6) {
            yy += `${array[i]} `
        }
        
    }
    console.log(yy)
}

filters(words);
console.log(words.filter((word) => word.length > 6));

const cart = [
    {
      item: "🍫",
      price: 5,
      vat: 8,
    },
    {
      item: "🍌",
      price: 5,
      vat: 8,
    },
    {
      item: "🥐",
      price: 7,
      vat: 18,
    },
    {
      item: "🍰",
      price: 15,
      vat: 18,
    },
    {
      item: "🎂",
      price: 25,
      vat: 1,
    },
    {
      item: "🥧",
      price: 20,
      vat: 1,
    },
  ];


  let sum = 0; 

  for (const iterator of cart) {
      sum += iterator.price;
  };

  console.log(sum);

  sum = 0;
  cart.forEach(element => {
      sum += element.price;
  });

  console.log(sum);

  const result = cart.map((item) => item.price).reduce((acc, curr) => acc+curr);
  console.log(result);


  sum = 0;

  for (const iterator of cart) {
    sum += iterator.price;
};
