// Calculate additions
function calcAdd(num1, num2) {
    result = +num1 + +num2;
    return result};

// Calculate Subtraction
function calcSub(num1, num2) {return num1 - num2;};

// Calculate Multiplication
function calcMulti(num1, num2) {return num1 * num2};

// Calculate Division
function calcDivide(num1, num2) {if(num2 == 0) {return "lol, try again..."} else {return num1 / num2}};

// Calculate Percentage
function calcPerc(num1) {return num1 / 100};

// Calculate Factorial
function calcFactorial(num1) {if(num1 == 0) {return 1} else {let c = num1; for(i = num1; i > 1; i--) {c = c * (i-1);} return c;}};

// Calculate Fibonacci Sequence
function calcFibonacci(num1) {if(num1 < 0) return "OOPS"; let seqFib = [0, 1]; let next = 0; for(i = 0; i < num1; i++) {next = seqFib[i] + seqFib[i+1]; seqFib.push(next);} return seqFib[num1]};

// Input holders
let theNum1;
let theNum2;
let theOperator;

let mem1 = "";
let mem2 = "";

let result ='';

//Operate point to function
function operate(n1, op, n2) {
    if(op == '+') {return calcAdd(n1,n2)};
    if(op == '-') {return calcSub(n1,n2)};
    if(op == '*') {return calcMulti(n1,n2)};
    if(op == '/') {return calcDivide(n1,n2)};
    return 'Error';
}

function operate2(n1, op) {
    if(op == '!') {return calcFactorial(n1)};
    if(op == 'Fib') {return calcFibonacci(n1)};
    if(op == '%') {return calcPerc(n1)};
    return 'Error';
}

// Calculator interface
const displayNum = document.querySelector('.display');

let getNum0 = document.querySelector('.nr0');
let getNum1 = document.querySelector('.nr1');
let getNum2 = document.querySelector('.nr2');
let getNum3 = document.querySelector('.nr3');
let getNum4 = document.querySelector('.nr4');
let getNum5 = document.querySelector('.nr5');
let getNum6 = document.querySelector('.nr6');
let getNum7 = document.querySelector('.nr7');
let getNum8 = document.querySelector('.nr8');
let getNum9 = document.querySelector('.nr9');

let getEquals = document.querySelector('.row5col5');
let getAdd = document.querySelector('.row5col4');
let getSub = document.querySelector('.row5col3');
let getMulti = document.querySelector('.row5col2');
let getDivide = document.querySelector('.row5col1');
let getFact = document.querySelector('.row4col1');
let getPerc = document.querySelector('.row3col1');
let getFib = document.querySelector('.row2col5');
let getClear = document.querySelector('.row2col1');

// Number Display
function showDisplay(num) {mem1 += num; displayNum.textContent = mem1};

//Numbers
getNum0.addEventListener('click', () => {showDisplay("0")});
getNum1.addEventListener('click', () => {showDisplay("1")});
getNum2.addEventListener('click', () => {showDisplay("2")});
getNum3.addEventListener('click', () => {showDisplay("3")});
getNum4.addEventListener('click', () => {showDisplay("4")});
getNum5.addEventListener('click', () => {showDisplay("5")});
getNum6.addEventListener('click', () => {showDisplay("6")});
getNum7.addEventListener('click', () => {showDisplay("7")});
getNum8.addEventListener('click', () => {showDisplay("8")});
getNum9.addEventListener('click', () => {showDisplay("9")});

//Operators
getAdd.addEventListener('click', () => {showOperator('+')});
getSub.addEventListener('click', () => {showOperator('-')});
getMulti.addEventListener('click', () => {showOperator('*')});
getDivide.addEventListener('click', () => {showOperator('/')});
getFact.addEventListener('click', () => {showOperator('!')});
getPerc.addEventListener('click', () => {showOperator('%')});
getFib.addEventListener('click', () => {showOperator('Fib')});

//Operators function
function findOperator(op) {
    theOperator = op;
    if(op == '+' || op == '-') {displayNum.textContent = theOperator;}
    if(op == '*') {displayNum.textContent = "x"};
    if(op == '/') {displayNum.textContent = "÷"};
    if(op == '!' || op == '%' || op == 'Fib') {displayNum.textContent = operate2(theNum1, theOperator)}
    };

//Find operator
function showOperator(n) {
    findOperator(n); 
    if(result !== '') {
        theNum1 = result;
        theNum2 = mem1;
        mem1 = '';}

    else { 
        theNum1 = mem1;
        mem2 = mem1;
        mem1 ='';
    }}; 

//Clear all variables
getClear.addEventListener('click', () => {
    theNum1 = ''; 
    theNum2 = ''; 
    mem1 = ''; 
    mem2 = ''; 
    theOperator = "";
    result = '';
    displayNum.textContent = 0;
});

function showEqual() {
    theNum2 = mem1;
    mem1 = ''; 
    displayNum.textContent = operate(theNum1, theOperator, theNum2);
}

getEquals.addEventListener('click', () => {showEqual()});

//Pseudo Code
//Add first numbers to string then to array
//Add operator to array
//Add second numbers to string then array
//Add 0 standby blinking to display
//Add second mini-display to see progress
//Add visual input


// // Create Interface variables
// function createVariables() {
//     var accounts = [];
  
//     for (var i = 0; i <= 20; ++i) {
//         accounts[i] = "whatever";
//     }
  
//     return accounts;
// }

// let test1 = '1';
// let test2 = '';

// console.log(test1 === test2)

   