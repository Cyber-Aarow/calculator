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
  else if(operator === '^') answer = power(firstNumber, secondNumber);
  return answer;
}

function removeCommas(string){
  return string.replaceAll(',', '');
}

function displayPosition(string){
  displayNumber.parentElement.style.justifyContent = string;
}

function displayAutoShrink(){
  while(displayNumber.offsetWidth > displayWidth){
    displayNumber.style.fontSize = displayNumberSize + 'px';
    displayNumberSize -= 1;
  }
}

function displayReset(){
  displayNumber.style.fontSize = '30px';
  displayPosition('end');
  displayNumberSize = 30;
}

function clock(){
  const today = new Date();
  const hoursRaw = today.getHours();
  const minutesRaw = today.getMinutes();

  //Hours are base 12
  let hours = hoursRaw > 12 ? hoursRaw - 12 : hoursRaw;
  if(hours === 0) hours = 12;
  //Single-digit minutes start with 0
  const minutes = minutesRaw < 10 ? '0' + minutesRaw : minutesRaw;

  const time = hours + ':' + minutes;

  document.querySelector('#clock').innerHTML = time;
  setTimeout(clock, 1000);
}

clock();

//Set up universal variables; set original number to 0
let displayNumber = document.querySelector('#displayNumber');
displayNumber.textContent = '0';
let firstNumber = 0;
let operator = 'none';
let secondNumber = 0;
let operatorSelected = false;
let num;
//For shrinking text
let displayNumberSize = parseInt(getComputedStyle(displayNumber).getPropertyValue('font-size'));
const displayWidth = parseInt(getComputedStyle(displayNumber.parentElement).getPropertyValue('width'));



//Misc buttons
let AC = document.querySelector('#AC');
let plusMinus = document.querySelector('#plusMinus');


AC.addEventListener("click", ()=> {
  document.querySelector('#audio').play();
  displayNumber.textContent = '0';
  num = '';
  AC.textContent = 'AC';
  firstNumber = 0;
  displayReset();
});

plusMinus.addEventListener("click", ()=> {
  document.querySelector('#audio').play();
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



//Clicking a digit button will change the number
let digits = document.querySelectorAll(".digit");
for(let i = 0; i < digits.length; i++){
  digits[i].addEventListener("click", ()=> {
    document.querySelector('#audio').play();
    let nextDisplayDigit = digits[i].value;

    //For easier shorthand
    num = displayNumber.textContent;
    if(num === '0'||
    operatorSelected === true){
      displayReset();
      displayNumber.textContent = nextDisplayDigit;
      operatorSelected = false;
      AC.textContent = 'C';
    }
    else if(firstNumber > 0 && removeCommas(num).length === 9){
      //Limit reached; do nothing
    }
    else if(firstNumber < 0 && removeCommas(num).length === 10){
      //Limit reached; do nothing
    }
    else{
      //Handling commas
      if(num.length > 4){
        //Move all of the current commas to the right once
        for(let i = num.length - 1; i > 0; i--){
          if(num.charAt(i) === ','){
            let movingDigit = num.charAt(i + 1);
            num = num.substring(0, i) + movingDigit + ',' +
            num.substring((i + 2), num.length);
          }
        }
        if(Number(removeCommas(num)) > 9999 || Number(removeCommas(num)) < -9999){
          displayPosition('center');
        }
      } 
      
      //Add a new comma
      if(firstNumber.toString().length % 3 === 0){
        if(firstNumber > 0){
          num = num.charAt(0) + ',' +
          num.substring(1, num.length);
        }
        else{
          num = num.substring(0, 2) + ',' +
          num.substring(2, num.length);
        }
      }
      
      //Add the new digit to the number
      displayNumber.textContent = num + nextDisplayDigit;
      firstNumber = removeCommas(displayNumber.textContent);
      displayAutoShrink();
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
    document.querySelector('#audio').play();
    firstNumber = Number(removeCommas(displayNumber.textContent));
    operator = notEquals[i].value;
    operatorSelected = true;
  });
}

equals.addEventListener("click", ()=> {
  document.querySelector('#audio').play();
  secondNumber = Number(removeCommas(displayNumber.textContent));
  if(operator === 'none'){
    operatorSelected = true;
  }
  else{    
    let solution = operate(firstNumber, operator, secondNumber);
      let solutionString = solution.toString();
      
      //If commas need to be re-added
      if(solution > 999 || solution < -999){
        let solutionWithCommas = solutionString;
        let counter = 1;
        for(let i = solutionString.length - 1; i > 0; i--){
          if(counter % 3 === 0 && solutionString.charAt(i - 1) != '-'){
            solutionWithCommas = solutionWithCommas.substring(0, i) +
            ',' + solutionWithCommas.substring(i, solutionWithCommas.length);
          }
          counter++;
        }
        solutionString = solutionWithCommas;
      }
      displayNumber.textContent = solutionString;
      displayAutoShrink();
      if(solution > 9999 || solution < -9999) displayPosition('center');
      operatorSelected = true;
      if(displayNumber.textContent === '0') AC.textContent = 'AC';
  }
});