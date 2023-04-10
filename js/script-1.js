
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

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage);

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
// //     for (const potion of this.potions) {
// //     if (potion.name === newPotion.name) {
// //       return `Error! Potion ${newPotion.name} is already in your inventory!`;
// //     }
// //     }
// //     this.potions.push(newPotion);
// // },
// //     removePotion(potionName) {
// //      for (let i=0; i<this.potions.length; i+=1) {
// //     const potion = this.potions[i];
// //     if (potion.name === potionName) {
// //        this.potions.splice(i, 1);
// //          }
// //      }
// //     return `Potion ${potionName} is not in inventory!`;
// //   },
// //    updatePotionName(oldName, newName) {
// //      for (let i=0; i<this.potions.length; i+=1) {
// //      if (this.potions[i].name===oldName) {
// //       this.potions[i].name=newName;
// //       return;
// //     }
// //   }
// //   // Change code above this line
// // }
// // };
// // atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion');
// // console.log(atTheOldToad.potions);

// // const isRecipientAvailable = Math.random() > 0.5;
// // console.log(isRecipientAvailable)
 
// // const students = [
// //   { name: "Манго", courses: ["математика", "фізика"] },
// //   { name: "Полі", courses: ["інформатика", "математика"] },
// //   { name: "Ківі", courses: ["фізика", "біологія"] },
// // ];

// // const allCourses = students.flatMap(student => student.courses);
// // console.log(allCourses);

// // const uniqueCourses = allCourses.filter(
// //   (course, index, array) => array.indexOf(course) === index
// // );
// // console.log(uniqueCourses);

// // const LOW_SCORE = 50;
// // const HIGH_SCORE = 80;
// // const students = [
// //   { name: "Манго", score: 83 },
// //   { name: "Полі", score: 59 },
// //   { name: "Аякс", score: 37 },
// //   { name: "Ківі", score: 94 },
// //   { name: "Х'юстон", score: 64 },
// // ];

// // const best = students.filter(student => student.score >= HIGH_SCORE);
// // console.log(best); // Масив об'єктів з іменами Манго і Ківі

// // const worst = students.filter(student => student.score < LOW_SCORE);
// // console.log(worst); // Масив з одним об'єктом Аякс

// // // В колбек-функції зручно деструктуризувати властивості об'єкта
// // const average = students.filter(
// //   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// // );
// // console.log(average); // Масив об'єктів з іменами Полі і Х'юстон

// // const tweets = [
// //   { id: "000", likes: 5, tags: ["js", "nodejs"] },
// //   { id: "001", likes: 2, tags: ["html", "css"] },
// //   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
// //   { id: "003", likes: 8, tags: ["css", "react"] },
// //   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// // ];

// // // Пройдемо по всіх елементах колекції і додамо значення властивості tags
// // // до акумулятора, початкове значення якого вкажемо порожнім масивом [].
// // // На кожній ітерації пушимо в акумулятор усі елементи tweet.tags і повертаємо його.
// // const tags = tweets.reduce((allTags, tweet) => {
// //   allTags.push(...tweet.tags);

// //   return allTags;
// // }, []);

// // console.log(tags);

// // // Мабуть, збирання тегів - не одиночна операція, тому напишемо функцію
// // // для збирання тегів з колекції
// // const getTags = tweets =>
// //   tweets.reduce((allTags, tweet) => {
// //     allTags.push(...tweet.tags);

// //     return allTags;
// //   }, []);

// // console.log(getTags(tweets));

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// // Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// // Це стандартна практика, якщо callback-функція досить велика.

// // Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// // то створюємо її і записуємо їй значення 0.
// // В іншому випадку збільшуємо значення на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);


// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
// ];

// // const inAscendingScoreOrder = students.sort(
// //   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// // );

// // const inDescendingScoreOrder = students.sort(
// //   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// // );

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

// // console.log(inAscendingScoreOrder);
// // console.log(inDescendingScoreOrder);
// console.log(inAlphabeticalOrder);


// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onOrderError) {
//     if(this.pizzas.includes(pizzaName)){
//       return onSuccess(pizzaName);
//       }
//      return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   }
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }
//   orderedItems.forEach(function (number) {
//     console.log('number', number);
//     totalPrice += element;
// });
  // Change code above this line

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log()

// const numbers = [5, 10, 15, 20, 25];

// // // numbers.forEach(function (number) {

// // //   console.log('number', number);
// // // });

// const add = (a, b) => a + b;
// let total = 0;
// numbers.forEach(item => total = a + b)
// console.log(total);

// // // function logItems(items) {
// // //   for (let i = 0; i < items.length; i += 1) {
// // //     console.log(`${i + 1} - ${items[i]}`);
// // //   }
// // // }

// // const logItems = items => items.forEach((item, idx) => console.log(`${idx + 1}- ${item}`))

// // logItems(['Mango', 'Poly', 'Ajax']);
// // logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
// orderedItems.forEach(element => {
//   totalPrice += element
// });
//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }
  

//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }
//   numbers.forEach(element => {
//     if (element > value) {
//       filteredNumbers.push(element);
//     }
//   });
//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 38));

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
// firstArray.forEach(element => {
//       if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// console.log();

// function changeEven(numbers, value) {
//   // Change code below this
//   const newNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (!(numbers[i] % 2)) {
//       // newNumbers[i] = numbers[i] + value;
//       newNumbers.push(numbers[i] + value);
//     }
//   }
//       return newNumbers;
//   // Change code above this line
// }

// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// // const planetsLengths = planets.map(planet => planetsLengths.push(planet.length));
// // const planetsLengths = planets.map(planet => planets.length());
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// // Change code below this line
// const getUsersWithFriend = (users, friendName) => users.filter(user => user.friendName===friendName);
// // Change code above this line
// console.log(getUsersWithFriend(users, 'Briana Decker'));

// const getUserWithEmail = (users, email) => users.find(user => users.email === email);
// // Change code above this line
// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));


// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(value => !(value%2));
// const eachElementInFirstIsOdd = firstArray.every((value) => value%2 === false);
// const eachElementInSecondIsEven = secondArray.every((value) => value%2 === true);
// const eachElementInSecondIsOdd = secondArray.every((value) => value%2 === false);

// const eachElementInThirdIsEven = thirdArray.every((value) => value%2 === true);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 === false);
// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);
// console.log(eachElementInSecondIsOdd);

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line
// const totalPlaytimePerGame = players.reduce((acc, player) => {
//   return acc + (player.playtime*player.gamesPlayed);
// }, 0);
// const totalAveragePlaytimePerGame = totalPlaytimePerGame / players.length;

// console.log(totalAveragePlaytimePerGame);
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];
// // const getTotalFriendCount = users => users.reduce((total, user) => [...total, ...user.friends], []);
// let array = users.flatMap(user => user.friends);
// let array = users.flatMap(user => user.friends);

// console.log(array.length);
// // array.reduce((total, user) => (acc, user) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// console.log(getTotalFriendCount(users));

// // Change code below this line
// const tagsStats = allTags.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});
// Change code above this line
// console.log(getTotalFriendCount(users));

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// console.log(allTags);

// acc = [], tweet.tags = ['js', 'nodejs'] return [...[], ...['js', 'nodejs']]
// acc = ['js', 'nodejs'] tweet.tags ['html', 'css']
// return  [...['js', 'nodejs'], ...['html', 'css']]
//  ['js', 'nodejs', 'html', 'css']

/*
 * Ведём статистику тегов
 */
// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);

//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }

//   acc[tag] = 1;

//   return acc;
// }, {});

// const tagsStats = allTags.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});
// console.log(tagsStats);
// const getTotalFriendCount = users => users.reduce((total, user) => {
//    total.push(...user.friends);
//   return total;
// },
// []).length;
// console.log(getTotalFriendCount(users));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 838,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 851,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 775,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 794 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 867 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
//   firstBook.author.localeCompare(secondBook.author));

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
//   secondBook.author.localeCompare(firstBook.author));

// const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);

// const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);



// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const inAscendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = [...students].sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// const sortByDescendingFriendCount = users => {
//   return [...users].sort((firstUser, secondUser) => firstUser.friends.length - secondUser.friends.length);
// };

// console.log(sortByDescendingFriendCount(users));


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names =[...books].sort((firstUser, secondUser) =>
//   firstUser.author.localeCompare(secondUser.author))
//   .filter(book => book.rating > )
//   .map(book => book.author);
   
// const getNamesSortedByFriendCount = users =>
// [...users].sort((firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length)
//     .map(user => user.name);
// console.log(getNamesSortedByFriendCount(users));
  
// const getTotalBalanceByGender = (users, gender) =>
// users.filter(user => user.gender === gender)
//   .reduce((acc, user) => acc + user.balance, 0);

//   console.log(getTotalBalanceByGender(users, 'male'));

// class Storage {
//   constructor(items) {
//      this.items = items;
//   }
//   getItems() {
//     return this.items
//   }

//   addItem(newItem) {
//     return this.items.push(newItem)
//   }

//   removeItem(itemToRemove) {
//  this.items = this.items.filter(item => (item !== itemToRemove));

//     // const id = this.items.findIndex(item => item === itemToRemove);
//     // return this.items.splice(id, 1)
//   }
// }


// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class Car {
//   // Change code below this line

//   static MAX_PRICE = 50000;
  
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if(newPrice < Car.MAX_PRICE) {
//      this.#price = newPrice;
//     }
       
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
// static checkPrice (price) {
//   if(price > Car.#MAX_PRICE){
//     return "Error! Price exceeds the maximum";
//   }
//  return "Success! Price is within acceptable limits";
// }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// Додаткове завдання
// Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За замовчуванням значення властивості on повинно бути false.

// class Toggle {
//   constructor({isOpen: boolean}) {
//     this.isOpen = boolean;
//     this.on = false;
//   }
// }

// const firstToggle = new Toggle({ isOpen: true });
// console.log(firstToggle.isOpen);
// console.group('firstToggle');
// console.log(firstToggle.on);
// console.log(firstToggle.toggle);
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');

// console.log("This is the outer level");
// console.group();
// console.log("Level 2");
// console.group();
// console.log("Level 3");
// console.warn("More of level 3");
// console.groupEnd();
// console.log("Back to level 2");
// console.groupEnd();
// console.log("Back to the outer level");

// Homework:

const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

// Task 1

// Отримати масив імен усіх користувачів (поле name).

const getUserNames = users => users.map(users => users.name);

// console.log(getUserNames(users))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// Task 2

// Отримати масив об'єктів користувачей по кольору очей (поле eyeColor).
const getUsersWithEyeColor = (users, color) => users.filter(users => users.eyeColor === color);
    
// console.log(getUsersWithEyeColor(users, 'blue')); // [об'є'кт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

// Task 3

// Отримати загальну суму баланса (поле balance) усіх користувачів.
const calculateTotalBalance = users => users.reduce((sum, user) => sum + user.balance, 0);
// console.log(calculateTotalBalance(users)); // 20916

// Task 4

// Отримати масив імен користувачів по полю (поле gender)
const getUsersWithGender = (users, genderType) => users.filter(users => users.gender === genderType).map(users => users.name);

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


const arr = [1, -3, -5, -2];

// Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.
// console.log([1, 3, 5, 2].map(elem => elem * elem));

//  Дан массив с числами. Найдите сумму этих чисел
function summary(arr) {
  let sum = 0;
  arr.forEach(element => {
    sum += element;
  });
return sum;
}
// console.log(summary(arr));

// Дан массив с числами.Проверьте то, что все элементы в массиве больше нуля
const everyPozitive = arr => {
  const res = arr.every(arr => arr > 0);
  console.log(res);
  if (res) {
    return "ALL element positive"
  }
 return "ERROR. NOT ALL element positive"
}
// console.log(everyPozitive(arr));

//  Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы
const notEveryPozitive = arr => arr.some(arr => arr < 0) ? "Є відємні" : "Всі додатні";
// console.log(notEveryPozitive(arr));

// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
// const negative = arr => arr.filter(elem => elem < 0).length;
// console.log(negative(arr));
// console.log(arr.filter(elem => elem < 0).length);

// document.getElementById("demo").innerHTML = myFunction();

// const d = new Date();
// alert(d);

const d = new Date();
// const year = d.getFullYear();
// console.log(year);
const nYear = d.setFullYear(2020);
// console.log(nYear);

// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case '+':
//       return (value1 + value2);
//       break;
//     case '-':
//       return (value1 - value2);
//       break;
//     case '*':
//       return (value1 * value2);
//       break;
//     case '/':
//   return (value1 / value2);
//       break;
//     default:
//       console.log("Sorry, incorrect operation");
//   }
// }
// console.log(basicOp('+', 4, 7));

// function stringToArray(string){
//   return string.split(' ');
	// code code code
  // }
// console.log(stringToArray("Robin Singh"));

// function findNeedle(haystack) {
//   for(let elem in haystack)
//     if (haystack[elem] === "needle") {
//     return `found the needle at position ${[--elem]}`
//     }
//   return
// }
// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));
// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return (distanceToPump < (fuelLeft * mpg))
// }
// console.log(zeroFuel(45, 25, 2));


// function century(year) {
//   return Math.ceil(year / 100);
// }
// console.log(century(1705));

// function solution(str) {
//   const newStr = str.split(``).reverse().join(``)
//     console.log(newStr)
//     // .reverse.join;
//   return newStr;
// }
// console.log(solution('world'));

// function countSheeps(arrayOfSheep){
// let num=0;
//   for (let i = 0; i < arrayOfSheep.length; i+=1){
//   if (arrayOfSheep[i]) {
//     num += 1;
//   }
// }
// return num
// }
// console.log(countSheeps([true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]))

//   const date = new Date();

// console.log(date);
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(date.toString());
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"
// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);

//   setTimeout(() => {
//     // Change value of isSuccess variable to simulate request status
//     const isSuccess = true;

//     if (isSuccess) {
//       onSuccess("success value");
//     } else {
//       onError("error");
//     }
//   }, 2000);
// };

// const onFetchSuccess = user => {
//   console.log(user);
// };

// const onFetchError = error => {
//   console.error(error);
// };

// fetchUserFromServer("Mango", onFetchSuccess, onFetchError);


// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = true;

//       if (isSuccess) {
//         resolve("success value");
//       } else {
//         reject("error");
//       }
//     }, 2000);
//   });
// };

// fetchUserFromServer("Mango")
//   .then(user => console.log(user))
//   .catch(error => console.error(error));

//   const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);

// Promise.all([promiseA, promiseB])
//   .then(value => console.log(value)) //["promiseA value", "promiseB value"]
//   .catch(error => console.log(error));


//   // Fulfilled promise
// new Promise(resolve => resolve("success value")).then(value =>
//   console.log(value)
// );

// Promise.resolve("success value").then(value => console.log(value));

// // Rejected promise
// new Promise((resolve, reject) => reject("error")).catch(error =>
//   console.error(error)
// );

// Promise.reject("error").catch(error => console.error(error));

const makeGreeting = guestName => {
  if (guestName === "" || guestName === undefined) {
    return {
      success: false,
      message: "Guest name must not be empty",
    };
  }

  return {
    success: true,
    message: `Welcome ${guestName}`,
  };
};

const result = makeGreeting("Mango");

if (result.success) {
  console.log(result.message);
} else {
  console.error(result.message);
}