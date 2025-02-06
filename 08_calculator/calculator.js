const add = function(...args) {
  return args.reduce((prevVal, currVal) => currVal + prevVal, 0);
};

const subtract = function(...args) {
	return args.reduce((prevVal, currVal) => prevVal - currVal);
};

const sum = function(arr) {
  if(arr.length >= 1){
	  return arr.reduce((prevVal, currVal) => prevVal + currVal);
  }
  return 0;
};

const multiply = function(arr) {
  if(arr.length >= 1){
    return arr.reduce((prevVal, currVal) => prevVal * currVal);
  }
  return 0;
};

const power = function(...args) {
  return args.reduce((prevVal, currVal) => Math.pow(prevVal, currVal));
};

const factorial = function(startNum) {
  let arr = [];
  if(startNum >= 1){
    for(let i = startNum; i >= 1; i--){
      arr.push(i);
    }
    return arr.reduce((prevVal, currVal) => prevVal * currVal);
  }
	return 1; //Because products of 0 are associated with 1
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
