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

//Set up universal variables; set original number to 0
let displayNumber = document.querySelector('#displayNumber');
displayNumber.textContent = '0';
let firstNumber = 0;
let operator;
let secondNumber;
let operatorSelected = false;



//Add values to all the digit buttons
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

//Clicking a digit button will change the number
let digits = document.querySelectorAll(".digit");

for(let i = 0; i < digits.length; i++){
  digits[i].addEventListener("click", ()=> {
    let nextDisplayDigit = digits[i].value;
    if(displayNumber.textContent === '0' ||
    operatorSelected === true) displayNumber.textContent = nextDisplayDigit;
    else{
      //if(displayNumber.textContent.length % 3 === 0)
      displayNumber.textContent = displayNumber.textContent + nextDisplayDigit;
    }   
  });
}




//Operator buttons
let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let times = document.querySelector('#times');
let div = document.querySelector('#div');
let equals = document.querySelector('#equals');

plus.value = '+';
minus.value = '-';
times.value = '*';
div.value = '/';
equals.value = '=';

let operators = document.querySelectorAll('.operator');
for(let i = 0; i < operators.length; i++){
  if(operators[i].value != '='){
    operators[i].addEventListener("click", ()=> {
      firstNumber = Number(displayNumber);
      operator = operators[i].value;
    });
  }
  else{
    operators[i].addEventListener("click", ()=> {
      secondNumber = Number(displayNumber);
      displayNumber = operate(firstNumber, operator, secondNumber);
    });
  }
}
