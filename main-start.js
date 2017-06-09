// ---------------------------
// Arithmetics
// ---------------------------
// Create variables and functions necessary to add, subtract, multiply, and divide two numbers together.
// You are going to need to select the DOM elements, listen for events, and run some code based on that event being triggered.



//////////////////////////////////////////////////////////////////////////////////////////
// 1. Add the two numbers from input fields 'num-one' and 'num-two'
// Cache the DOM by setting a variable and selecting the element of choice.
var numOne = document.querySelector('.num-one');
var numTwo = document.querySelector('.num-two');
var addSum = document.querySelector('.add-sum');

numOne.addEventListener('input', add);
// set up an event listener for numTwo and trigger add. 

function add() {
  var one = parseFloat(numOne.value);
  // get the value out of the numTwo input field

  // display the result in the display DOM element
}



//////////////////////////////////////////////////////////////////////////////////////////
// 2. Subtract the two numbers from input fields 'sub-one' and 'sub-two'
// Cache the DOM here

// Set up event listeners that listen for the input change, and trigger subtract when triggered

function subtract() {
}



//////////////////////////////////////////////////////////////////////////////////////////
// 3. Multiply the two numbers from input fields 'mult-one' and 'mult-two'
// Cache the DOM here

// Set up event listeners that listen for the input change, and trigger multiply when triggered

// Create Function here



//////////////////////////////////////////////////////////////////////////////////////////
// 4. Divide the two numbers from input fields 'div-one' and 'div-two'
// Cache the DOM here

// Set up event listeners that listen for the input change, and trigger multiply when triggered

// Create Function here



//////////////////////////////////////////////////////////////////////////////////////////
// 5. [ Bonus ]
// Create the program that can accept the two numbers, as well as the operator desired.
// Hint - You will need to create the HTML markup for these inputs
//////////////////////////////////////////////////////////////////////////////////////////