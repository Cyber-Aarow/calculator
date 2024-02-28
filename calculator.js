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

function removeCommas(string){
  return string.replaceAll(',', '');
}

//Call correct function per operator choice
const operate = function(firstNumber, operator, secondNumber){
  let answer;
  if(operator === '+') answer = add(firstNumber, secondNumber);
  else if(operator === '-') answer = subtract(firstNumber, secondNumber);
  else if(operator === '*') answer = multiply(firstNumber, secondNumber);
  else if(operator === '/') answer = divide(firstNumber, secondNumber);
  else if(operator === '^') answer = power(firstNumber, secondNumber);
  return answer;
}

//Set up universal variables; set original number to 0
let displayNumber = document.querySelector('#displayNumber');
displayNumber.textContent = '0';
let firstNumber = 0;
let operator;
let secondNumber;
let operatorSelected = false;


//Misc buttons
let AC = document.querySelector('#AC');
let plusMinus = document.querySelector('#plusMinus');


AC.addEventListener("click", ()=> {
  displayNumber.textContent = '0';
  AC.textContent = 'AC';
});

plusMinus.addEventListener("click", ()=> {
  if(displayNumber.textContent.includes('-')){
    displayNumber.textContent = displayNumber.textContent.replace('-', '');
  }
  else{
    displayNumber.textContent = '-' + displayNumber.textContent;
  }
});


//Digit buttons
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


let digits = document.querySelectorAll(".digit");

//Clicking a digit button will change the number
for(let i = 0; i < digits.length; i++){
  digits[i].addEventListener("click", ()=> {
    let nextDisplayDigit = digits[i].value;

    //For easier shorthand
    let num = displayNumber.textContent;
    if(num === '0'||
    operatorSelected === true){
      displayNumber.textContent = nextDisplayDigit;
      operatorSelected = false;
      AC.textContent = 'C';


    }
    else if(removeCommas(num).length === 9){
      //Do nothing
    }
    else{
      //Handling commas
      if(num.length > 4){
        //Move all of the current commas to the right once
        for(let i = num.length - 1; i > 0; i--){
          if(num.charAt(i) === ','){
            let movingDigit = num.charAt(i + 1);
            num = num.substring(0, i) + movingDigit + ',' +
            num.substring((i + 2), (num.length));
          }
        }
      }
      
      //Add a new one
      if(removeCommas(num).length % 3 === 0){
        //console.log(removeCommas(num));
        num = num.charAt(0) + ',' +
        num.substring(1, (num.length));
      }
      
      //Add the new digit to the number
      displayNumber.textContent = num + nextDisplayDigit;
    }   
  });
}



//Operator buttons
let pwr = document.querySelector('#power');
let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let times = document.querySelector('#times');
let division = document.querySelector('#divide');
let equals = document.querySelector('#equals');

plus.value = '+';
minus.value = '-';
times.value = '*';
division.value = '/';
pwr.value = '^';

let notEquals = document.querySelectorAll('.notEquals');
for(let i = 0; i < notEquals.length; i++){
  notEquals[i].addEventListener("click", ()=> {
    firstNumber = Number(removeCommas(displayNumber.textContent));
    operator = notEquals[i].value;
    operatorSelected = true;
  });
}

equals.addEventListener("click", ()=> {
  secondNumber = Number(removeCommas(displayNumber.textContent));
      let solution = operate(firstNumber, operator, secondNumber);
      let solutionString = solution.toString();
      
      //If commas need to be re-added
      if(solution > 999){
        let solutionWithCommas = solutionString;
        let counter = 1;
        for(let i = solutionString.length - 1; i > 0; i--){
          if(counter % 3 === 0){
            solutionWithCommas = solutionWithCommas.substring(0, i) +
            ',' + solutionWithCommas.substring(i, solutionWithCommas.length);
          }
          counter++;
        }
        solutionString = solutionWithCommas;
      }
      displayNumber.textContent = solutionString;
      operatorSelected = true;
      if(displayNumber.textContent === '0') AC.textContent = 'AC';
});