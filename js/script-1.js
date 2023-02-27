
// // const string = 'qWeRTzxCv dhfhj fj jjk';
// // const letters = string.split(' ');
// // let invertedString = '';

// // console.log(letters);
// // console.table(letters);

// // letters.splice(1, 1, 16, 55);
// // console.table(letters);

// // for (const letter of letters) {
// //   console.log(letter);
// // }
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for (let i=min; i<=max; i+=1) {
// numbers.push(i);
//   console.log(numbers);
// }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));

// function filterArray(numbers, value) {
//    // Change code below this line
//   const numbersBigger = [];
// for (let i=0; i<numbers.length; i+=1) {
//   if (numbers[i]>value){
//     numbersBigger.push(numbers[i]);
//   }
// }
// return numbersBigger

//   // Change code above this line
// }
// console.log(filterArray([1, 9, 3, 4, 5], 3));


// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   if (fruits.includes(fruit)) {
//     return "true";
//   }
//   return "false";
// }
// console.log()
// console.log(checkFruit('mandarin'));

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const arrayInclude = [];
// for (let i=0; i<array1.length && i<array2.length; i+=1) {
//   if (array1.includes(array2[i])) {
//     arrayInclude.push(array2[i])
//   }
// }
//   return arrayInclude;


// }
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// function includes(array, value) {
  // Change code below this line
// for (let i = 0; i < array.length; i++) {
//   if (array[i]===value) {
//     return "false";
//   }
//   return "true";
// }
//   // Change code above this line
// }
// console.log(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter'));
// console.log(includes([3, 2, 3, 4, 5], 3));
  
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

//   // // const cc = Object.values(colors.hex);
//   // console.log(cc);
// //   for (let i = 0; i < colors.length; i += 1) {
// //     hexColors.push(colors[i].hex);
// //     rgbColors.push(colors[i].rgb);
// //     // console.log(hexColors);
// //     // console.log(rgbColors);
// //   }

// //    console.log(hexColors);
// //     console.log(rgbColors);

//     const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//    let arr=[];
//   for (let product of products)  {

//       if (product[propName])
//       {
//         arr.push(product[propName]);
// }

//   }
//     return arr
//   // Change code above this line
// }
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("category"));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalPrice =0;
//   for (const product of products) {
//     if (product.name === productName) {
//        totalPrice = product.price * product.quantity;
//        console.log(totalPrice);
//   }
// }
// return totalPrice;
// // Change code above this line
// }
// console.log(calculateTotalPrice("Grip"));

// function makeTask(data) {
//   const completed = false;
//   const category = data.category || "General";
//   const priority = data.priority || "Normal";
//   const text = data.text;
//   // Change code below this line
//   let result = {
//     completed, text, category, priority
//   };
//   return result;
//   // Change code above this line
// }
// console.log(makeTask({}));
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// console.log(makeTask({ text: "Buy bread" }));

// Change code below this line
// function add(...args) {
//   console.log(args);
//   let summ = 0;
//  for (let i = 0; i < args.length; i += 1) {
//     summ += args[i];
//   }
//   return summ;
//   // Change code above this line
// }
// console.log(add(12, 4, 11, 48));

// Change code below this line
// function addOverNum(...args) {
//   let total = 0;

//   for (const arg of args) {
//     if(arg > arg[0]){
//        total += arg;
//     }
//      }

//   return total;
//   // Change code above this line
// }
// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значення першого аргументу
//   console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// function findMatches(firstNumber, ...args) {
//   const matches = []; // Don't change this line
//   console.log([firstNumber]);
//   console.log(...args);
//   console.log(args);
//   for (const number of firstNumber) {
//     for (let i = 0; i < args.length; i += 1) {
//    if(number === args[i]){
//       matches.push(number);
//      }
//     }
//       }
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(potionName);
//     console.log(potionIndex);
//     this.potions.splice(potionIndex, 1);
//     console.log(atTheOldToad.potions);

//     // Change code above this line
//   },
// };
// atTheOldToad.removePotion("Dragon breath");
// console.log(atTheOldToad.potions);
    
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) { 
    
//     if (potion.name === newPotion.name) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//     this.potions.push(newPotion);
//   }
// },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   // updatePotionName(oldName, newName) {
//   //   const potionIndex = this.potions.indexOf(oldName);

//   //   if (potionIndex === -1) {
//   //     return `Potion ${oldName} is not in inventory!`;
//   //   }

//   //   this.potions.splice(potionIndex, 1, newName);
//   // },
//     updatePotionName(oldName, newName) {
//      for (let i=0; i<this.potions.length; i+=1){
//       const potion = this.potions[i];
//     if (potion.name === oldName) {
//       this.potions.splice([i], 1);
//        }
//         return this.potions;
//     }
//   // return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));

// // Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);

// const numbers = [5, 10, 15, 20, 25];

// // Оголошення функції
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// // Анонімна стрілочна функція
// numbers.forEach((number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
};

numbers.forEach(logMessage);