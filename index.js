//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using thee filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
function filterIt(x) {
  return x % 5 == 0;
}
function filterDiv(x) {
  return x % 2 === 0;
}
console.log(numbers.filter(filterIt)); //numbers.filter(filterDiv))
console.log(numbers.filter(filterDiv));
/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
function mapIt(x) {
  return x * 2;
}
function mapMult(y) {
  return y * y;
}
console.log(numbers.map(mapIt)); //.map(mapMult));
console.log(numbers.map(mapMult));
/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
function filterIt2(x) {
  return x >= 20;
}

function mapIt2(z) {
  return z ** 2;
}
function filterIt3(y) {
  return y % 5 === 0;
}
function mapIt3(n) {
  return n ** 3;
}

console.log(numbers.filter(filterIt2).map(mapIt2));
console.log(numbers.filter(filterIt3).map(mapIt3));
