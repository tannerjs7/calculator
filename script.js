const numbers = document.querySelector('#numbers');
const operations = document.querySelector('#operations');
const current = document.querySelector('#current');

let displayValue = '';
let num1 = '';
let num2 = '';
let currentOp = '';

let number = document.createElement('button');
number.className = 'number';
for (let i = 0; i < 10; i++) {
  number.textContent = i;
  numbers.appendChild(number.cloneNode(true));
}

function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function clear() {
  num1 = '';
  num2 = '';
  currentOp = '';
  current.textContent = '';
}

function operate() {
  if (currentOp == '+') displayValue = add(num1, num2);
  if (currentOp == '-') displayValue = subtract(num1, num2);
  if (currentOp == '*') displayValue = multiply(num1, num2);
  if (currentOp == '/') displayValue = divide(num1, num2);
  num1 = displayValue;
  num2 = '';
  currentOp = '';
  current.textContent = displayValue;
}

function updateDisplay() {
  if (num1) displayValue = num1;
  if (currentOp) displayValue = num1 + ' ' + currentOp;
  if (num2) displayValue = num1 + ' ' + currentOp + ' ' + num2;
  current.textContent = displayValue;
}

let eachNumber = document.querySelectorAll('.number');
eachNumber.forEach(function(num) {
  num.addEventListener('click', function() {
    if (currentOp) num2 += num.textContent;
    else num1 += num.textContent;
    updateDisplay();
  });
});

let eachOp = document.querySelectorAll('.operation');
eachOp.forEach(function(op) {
  op.addEventListener('click', function() {
    if (num1 && !num2 && !currentOp) {
      currentOp = op.textContent;
      updateDisplay();
    }
  });
});

let equalButton = document.querySelector('#equal');
equalButton.addEventListener('click', function() {
  if (num1 && num2 && currentOp){
    operate();
    updateDisplay();
  }
});

let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', function() {
  clear();
});