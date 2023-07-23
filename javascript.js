// Calculate additions
function calcAdd(num1, num2) {return num1 + num2};

// Calculate Subtraction
function calcSub(num1, num2) {return num1 - num2};

// Calculate Multiplication
function calcMulti(num1, num2) {return num1 * num2};

// Calculate Division
function calcDivide(num1, num2) {return num1 / num2};

let theNum1;
let theNum2;
let theOperator;

function operate(n1, op, n2) {
    if(op == '+') {return calcAdd(n1,n2)};
    if(op == '-') {return calcSub(n1,n2)};
    if(op == '*') {return calcMulti(n1,n2)};
    if(op == '/') {return calcDivide(n1,n2)};
    return 'Error';
}

// Calculator interface
const displayNum = document.querySelector('.display');

let getNum1 = document.querySelector('.row2col4');
getNum1.addEventListener('click', () => {theNum1 = 1; displayNum.textContent = theNum1;});

let getAdd = document.querySelector('.row5col4');
getAdd.addEventListener('click', () => {theOperator = '+'; displayNum.textContent = theOperator;});

let getNum2 = document.querySelector('.row3col4');
getNum2.addEventListener('click', () => {theNum2 = 2; displayNum.textContent = theNum2;});

let getEquals = document.querySelector('.row5col5');
getEquals.addEventListener('click', () => {getEquals = '='; operate(theNum1, theOperator, theNum2);});


//Pseudo Code
//Add first numbers to string then to array
//Add operator to array
//Add second numbers to string then array
//Add 0 standby blinking to display