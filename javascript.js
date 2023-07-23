// Calculate additions
function calcAdd(num1, num2) {return +num1 + +num2};

// Calculate Subtraction
function calcSub(num1, num2) {return num1 - num2;};

// Calculate Multiplication
function calcMulti(num1, num2) {return num1 * num2};

// Calculate Division
function calcDivide(num1, num2) {return num1 / num2};

// Calculate Fibonacci sequence
function fibonacci(num1) {
    if(num1 < 0) return "OOPS";

    let seqFib = [0, 1];
    let next = 0;

    for(i = 0; i < num1; i++) {
        next = seqFib[i] + seqFib[i+1]
        seqFib.push(next);
    }
    
    return seqFib[num1];
}

var theNum1;
var theNum2;
var theOperator;

function operate(n1, op, n2) {
    if(op == '+') {return calcAdd(n1,n2)};
    if(op == '-') {return calcSub(n1,n2)};
    if(op == '*') {return calcMulti(n1,n2)};
    if(op == '/') {return calcDivide(n1,n2)};
    return 'Error';
}

let mem1 = "";
let mem2 = "";

// Calculator interface
const displayNum = document.querySelector('.display');

////Can't get the loop to work...
// const getNum = [];
// for(i = 0; i <= 9; i++){
//     getNum[i] = document.querySelector(`.nr${i}`);
//     // getNum[i].addEventListener('click', () => {mem1 += `${i}`; displayNum.textContent = mem1;});
// }

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

//Numbers
getNum0.addEventListener('click', () => {mem1 += "0"; displayNum.textContent = mem1;});
getNum1.addEventListener('click', () => {mem1 += "1"; displayNum.textContent = mem1;});
getNum2.addEventListener('click', () => {mem1 += "2"; displayNum.textContent = mem1;});
getNum3.addEventListener('click', () => {mem1 += "3"; displayNum.textContent = mem1;});
getNum4.addEventListener('click', () => {mem1 += "4"; displayNum.textContent = mem1;});
getNum5.addEventListener('click', () => {mem1 += "5"; displayNum.textContent = mem1;});
getNum6.addEventListener('click', () => {mem1 += "6"; displayNum.textContent = mem1;});
getNum7.addEventListener('click', () => {mem1 += "7"; displayNum.textContent = mem1;});
getNum8.addEventListener('click', () => {mem1 += "8"; displayNum.textContent = mem1;});
getNum9.addEventListener('click', () => {mem1 += "9"; displayNum.textContent = mem1;});

//Operators
getAdd.addEventListener('click', () => {theNum1 = mem1; mem1 =""; theOperator = '+'; displayNum.textContent = theOperator;});
getSub.addEventListener('click', () => {theNum1 = mem1; mem1 =""; theOperator = '-'; displayNum.textContent = theOperator;});
getMulti.addEventListener('click', () => {theNum1 = mem1; mem1 =""; theOperator = '*'; displayNum.textContent = "x";});
getDivide.addEventListener('click', () => {theNum1 = mem1; mem1 =""; theOperator = '/'; displayNum.textContent = "÷";});
getFact.addEventListener('click', () => {theNum1 = mem1; mem1 =""; theOperator = '!'; displayNum.textContent = theOperator;});
getPerc.addEventListener('click', () => {{theOperator = '%'; displayNum.textContent = theOperator;}});
getFib.addEventListener('click', () => {{theOperator = 'Fib';}});

//Other
getClear.addEventListener('click', () => {mem1 = ""; mem2 = ""; theOperator = ""; displayNum.textContent = 0});
getEquals.addEventListener('click', () => {theNum2 = mem1; mem1 = ""; displayNum.textContent = operate(theNum1, theOperator, theNum2);});

//Pseudo Code
//Add first numbers to string then to array
//Add operator to array
//Add second numbers to string then array
//Add 0 standby blinking to display
//Add second mini-display to see progress

//Add if mem1 is undefined, use mem1 else use mem2

// Make the calculator work! 
// You’ll need to store the first number that is input into the calculator 
// when a user presses an operator, 
// and also save which operation has been chosen and then operate() 
// on them when the user presses the “=” key.