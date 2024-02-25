//Basic math operator functions
const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const multiply = function(x, y) {
  return x * y;
};

const divide = function(x, y){
  return x / y;
};

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
    if(displayNumber.textContent === '0'||
    operatorSelected === true){
      displayNumber.textContent = nextDisplayDigit;
      operatorSelected = false;
    }
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
let division = document.querySelector('#divide');
let equals = document.querySelector('#equals');

plus.value = '+';
minus.value = '-';
times.value = '*';
division.value = '/';

let notEquals = document.querySelectorAll('.notEquals');
for(let i = 0; i < notEquals.length; i++){
  notEquals[i].addEventListener("click", ()=> {
    firstNumber = Number(displayNumber.textContent);
    operator = notEquals[i].value;
    operatorSelected = true;
  });
}

equals.addEventListener("click", ()=> {
  secondNumber = Number(displayNumber.textContent);
      let solution = operate(firstNumber, operator, secondNumber);
      displayNumber.textContent = solution.toString();
      operatorSelected = true;
});