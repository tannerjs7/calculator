const numbers = document.querySelector('#numbers');
const operations = document.querySelector('#operations');
const current = document.querySelector('#current');

// let displayValue = '';
// let num1 = '';
// let num2 = '';
// let currentOp = '';
let displayValue, num1, num2, currentOp;
displayValue = num1 = num2 = currentOp = '';

let number = document.createElement('button');
number.className = 'number';
for (let i = 0; i < 10; i++) {
  number.textContent = i;
  numbers.appendChild(number.cloneNode(true));
}

let eachOp = document.querySelectorAll('.operation');
eachOp.forEach(function(op) {
  op.addEventListener('click', function() {
    if (op.id != 'equal') {
      if (num1 && num2) operate();
      if (num1 && !num2 && !currentOp && num1 != 'ERROR') {
        currentOp = op.textContent;
        updateDisplay();
      }
    }
  });
});

let equalButton = document.querySelector('#equal');
equalButton.addEventListener('click', function() {
  if (num1 && num2 && currentOp){
    operate();
  }
});

let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', function() {
  clear();
});

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
  if (b == 0) return 'ERROR';
  return a / b;
}

function clear() {
  num1 = num2 = currentOp = current.textContent = '';
}

function operate() {
  if (currentOp == '+') displayValue = add(num1, num2);
  if (currentOp == '-') displayValue = subtract(num1, num2);
  if (currentOp == '*') displayValue = multiply(num1, num2);
  if (currentOp == '/') displayValue = divide(num1, num2);
  num1 = current.displayValue = displayValue;
  num2 = currentOp = '';
  updateDisplay();
}

function updateDisplay() {
  if (num2) displayValue = num1 + ' ' + currentOp + ' ' + num2;
  else if (currentOp) displayValue = num1 + ' ' + currentOp;
  else if (num1) displayValue = num1;
  current.textContent = displayValue;
}

let eachNumber = document.querySelectorAll('.number');
eachNumber.forEach(function(num) {
  num.addEventListener('click', function() {
    if (num1 == 'ERROR') num1 = '';
    if (currentOp) num2 += num.textContent;
    else num1 += num.textContent;
    updateDisplay();
  });
});