
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

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Change code below this line
  let totalPrice =0;
  for (const product of products) {
    if (product.name === productName) {
       totalPrice = product.price * product.quantity;
       console.log(totalPrice);
  }
}
return totalPrice;
// Change code above this line
}
console.log(calculateTotalPrice("Grip"));
