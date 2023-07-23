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

const getNum1 = document.querySelector('.row2col4');
const displayNum = document.querySelector('.display');
getNum1.addEventListener('click', () => {theNum1 = 1; displayNum.textContent = theNum1;});
