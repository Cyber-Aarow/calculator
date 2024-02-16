const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
  final_sum = 0;
	array.forEach((value) => final_sum = add(final_sum, value));
  return final_sum;
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current)
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