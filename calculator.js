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