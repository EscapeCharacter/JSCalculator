// ---------------------------
// Arithmetics
// ---------------------------
// Create variables and functions necessary to add, subtract, multiply, and divide two numbers together.
// You are going to need to select the DOM elements,
// listen for events, and run some code based on that event being triggered.

// 1. Add the two numbers from input fields 'num-one' and 'num-two'
var numOne = document.querySelector('.num-one');
var numTwo = document.querySelector('.num-two');
var addSum = document.querySelector('.add-sum');

numOne.addEventListener('input', add);
numTwo.addEventListener('input', add);

function add() {
  var one = parseFloat(numOne.value) || 0;
  var two = parseFloat(numTwo.value) || 0;
  addSum.innerHTML = one + two;
}

// 2. Subtract the two numbers from input fields 'sub-one' and 'sub-two'
var subOne = document.querySelector('.sub-one');
var subTwo = document.querySelector('.sub-two');
var subSum = document.querySelector('.sub-sum');

subOne.addEventListener('input', subtract);
subTwo.addEventListener('input', subtract);

function subtract() {
  var one = parseFloat(subOne.value) || 0;
  var two = parseFloat(subTwo.value) || 0;
  subSum.innerHTML = one - two;
}

// 3. Multiply the two numbers from input fields 'mult-one' and 'mult-two'
var multOne = document.querySelector('.mult-one');
var multTwo = document.querySelector('.mult-two');
var multSum = document.querySelector('.mult-sum');

multOne.addEventListener('input', multiply);
multTwo.addEventListener('input', multiply);

function multiply() {
  var one = parseFloat(multOne.value) || 0;
  var two = parseFloat(multTwo.value) || 0;
  multSum.innerHTML = one * two;
}


// 4. Divide the two numbers from input fields 'div-one' and 'div-two'
var divOne = document.querySelector('.div-one');
var divTwo = document.querySelector('.div-two');
var divSum = document.querySelector('.div-sum');

divOne.addEventListener('input', divide);
divTwo.addEventListener('input', divide);

function divide() {
  var one = parseFloat(divOne.value) || 0;
  var two = parseFloat(divTwo.value) || 0;
  divSum.innerHTML = one / two;
}

// 5. [ Bonus ]
// Create the program that can accept the two numbers, as well as the operator desired.
// Hint - You will need to create the HTML markup for these inputs

var choiceOne = document.querySelector('.choice-one');
var choiceTwo = document.querySelector('.choice-two');
var choiceSum = document.querySelector('.choice-sum');
var choiceOp = document.querySelector('.operator');

choiceOne.addEventListener('input', calculate);
choiceTwo.addEventListener('input', calculate);
choiceOp.addEventListener('input', calculate);


function calculate() {
  var one = parseFloat(choiceOne.value) || 0;
  var two = parseFloat(choiceTwo.value) || 0;
  var three = choiceOp.value;

  if(three == '+'){
  choiceSum.innerHTML = (one + two);
  }
  if(three == '-'){
  choiceSum.innerHTML = (one - two);
  }
  if(three == '*'){
  choiceSum.innerHTML = (one * two);
  }
  if(three == '/'){
  choiceSum.innerHTML = (one / two);
  }
}

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

// ---------------------------
// Display Images
// ---------------------------
// Create variables and functions necessary to display the 
// corresponding image when the button is clicked

// var buttons = document.querySelectorAll('button');
// buttons.forEach(function(button) {
//   button.addEventListener('click', imgLink);
// });

// function imgLink(e) {
//   e.preventDefault();
//   var picID = this.dataset.img;
//   var pic = document.querySelector(picID);
//   if (pic.classList.contains('isHidden')) {
//     pic.classList.remove('isHidden');
//   } else {
//     pic.classList.add('isHidden');
//   }
// }

////////////////////////////////////////////////////////////////////////////////////