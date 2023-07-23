// Calculate additions
function calcAdd(num1, num2) {return num1 + num2};

// Calculate Subtraction
function calcSub(num1, num2) {return num1 - num2};

// Calculate Multiplication
function calcMulti(num1, num2) {return num1 * num2};

// Calculate Division
function calcDivide(num1, num2) {return num1 / num2};

let getNum1;
let getNum2;
let theOperator;

function operate(n1, op, n2) {
    if(op == '+') {return calcAdd(n1,n2)};
    if(op == '-') {return calcSub(n1,n2)};
    if(op == '*') {return calcMulti(n1,n2)};
    if(op == '/') {return calcDivide(n1,n2)};
    return 'Error';
}

console.log(operate(98, '*', 100));