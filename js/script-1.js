
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
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
];
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
const getTotalFriendCount = users => users.reduce((total, user) => {
   total.push(...user.friends);
  return total;
},
[]).length;
console.log(getTotalFriendCount(users));
