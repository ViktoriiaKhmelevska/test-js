
// const string = 'qWeRTzxCv dhfhj fj jjk';
// const letters = string.split(' ');
// let invertedString = '';

// console.log(letters);
// console.table(letters);

// letters.splice(1, 1, 16, 55);
// console.table(letters);

// for (const letter of letters) {
//   console.log(letter);
// }
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
for (let i=min; i<=max; i+=1) {
numbers.push(i);
  console.log(numbers);
}
  // Change code above this line
  return numbers;
}
console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(14, 17));


