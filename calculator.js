//Basic math operator functions
const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current)
};

const divide = function(x, y){
  return x / y;
}

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
  let final_product = 1;
  for(let i = 2; i <= x; i++){
    final_product *= i;
  }
  return final_product;
};

//Call correct function per operator choice
const operate = function(firstNumber, operator, secondNumber){
  let answer;
  if(operator === '+') answer = add(firstNumber, secondNumber);
  else if(operator === '-') answer = subtract(firstNumber, secondNumber);
  else if(operator === '*') answer = multiply(firstNumber, secondNumber);
  else if(operator === '/') answer = divide(firstNumber, secondNumber);
  return answer;
}


let displayNumber = document.querySelector('#displayNumber');
let firstNumber;
let operator;
let secondNumber;

//All the digit buttons
let nextDisplayDigit;

let zero = document.querySelector('#zero');
let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');
let decimal = document.querySelector('#decimal');

let digits = document.querySelectorAll(".digit");

zero.value = '0';
one.value = '1';
two.value = '2';
three.value = '3';
four.value = '4';
five.value = '5';
six.value = '6';
seven.value = '7';
eight.value = '8';
nine.value = '9';
decimal.value = '.';