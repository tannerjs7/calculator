const numbers = document.querySelector('#numbers');
const operations = document.querySelector('#operations');

function add(a, b) {
  return a + b;
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

let number = document.createElement('button');
number.className = 'number';
for (let i = 0; i < 10; i++) {
  number.textContent = i;
  numbers.appendChild(number.cloneNode(true));
}