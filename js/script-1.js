function calculateTotal(number) {
 // Change code below this line
  let sum = number;
  let num = 0;
  for (let i = 0; i < number || num < 0; i++) {
  sum = sum + num;
  num = number - 1;
  }
  console.log(sum);
  return sum;
  
  // Change code above this line
}
calculateTotal(7);
  // console.log(calculateTotal(21));