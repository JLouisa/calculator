// Calculate additions
function calcAdd(num1, num2) {return num1 + num2};

// Calculate Subtraction
function calcSub(num1, num2) {return num1 - num2};

// Calculate Multiplication
function calcMulti(num1, num2) {return num1 * num2};

// Calculate Division
function calcDivide(num1, num2) {return num1 / num2};

let theNum1 = [];
let theNum2;
let theOperator;

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

//Can't get the loop to work...
// const getNum = [];
// for(i = 0; i <= 9; i++){
//     getNum[i] = document.querySelector(`.nr${i}`);
//     // getNum[i].addEventListener('click', () => {mem1 += `${i}`; displayNum.textContent = mem1;});
// }

let getNum1 = document.querySelector('.nr1');
getNum1.addEventListener('click', () => {mem1 += "1"; displayNum.textContent = mem1;});
let getNum2 = document.querySelector('.nr2');
getNum2.addEventListener('click', () => {mem1 += "2"; displayNum.textContent = mem1;});
let getNum3 = document.querySelector('.nr3');
getNum3.addEventListener('click', () => {mem1 += "3"; displayNum.textContent = mem1;});
let getNum4 = document.querySelector('.nr4');
getNum4.addEventListener('click', () => {mem1 += "4"; displayNum.textContent = mem1;});
let getNum5 = document.querySelector('.nr5');
getNum5.addEventListener('click', () => {mem1 += "5"; displayNum.textContent = mem1;});
let getNum6 = document.querySelector('.nr6');
getNum6.addEventListener('click', () => {mem1 += "6"; displayNum.textContent = mem1;});
let getNum7 = document.querySelector('.nr7');
getNum7.addEventListener('click', () => {mem1 += "7"; displayNum.textContent = mem1;});
let getNum8 = document.querySelector('.nr8');
getNum8.addEventListener('click', () => {mem1 += "8"; displayNum.textContent = mem1;});
let getNum9 = document.querySelector('.nr9');
getNum9.addEventListener('click', () => {mem1 += "9"; displayNum.textContent = mem1;});
let getNum0 = document.querySelector('.nr0');
getNum0.addEventListener('click', () => {mem1 += "0"; displayNum.textContent = mem1;});

let getEquals = document.querySelector('.row5col5');
getEquals.addEventListener('click', () => {getEquals = '='; operate(theNum1, theOperator, theNum2);});

let getAdd = document.querySelector('.row5col4');
getAdd.addEventListener('click', () => {theOperator = '+'; displayNum.textContent = theOperator;});

let getSub = document.querySelector('.row5col3');
getSub.addEventListener('click', () => {{theOperator = '-'; displayNum.textContent = theOperator;}});

let getMulti = document.querySelector('.row5col2');
getMulti.addEventListener('click', () => {{theOperator = '*'; displayNum.textContent = "x";}});

let getDivide = document.querySelector('.row5col1');
getDivide.addEventListener('click', () => {{theOperator = '/'; displayNum.textContent = "÷";}});

let getFact = document.querySelector('.row4col1');
getFact.addEventListener('click', () => {{theOperator = '!'; displayNum.textContent = theOperator;}});

let getPerc = document.querySelector('.row3col1');
getPerc.addEventListener('click', () => {{theOperator = '%'; displayNum.textContent = theOperator;}});

let getClear = document.querySelector('.row2col1');
getClear.addEventListener('click', () => {mem1 = ""; mem2 = ""; displayNum.textContent = 0});


//Pseudo Code
//Add first numbers to string then to array
//Add operator to array
//Add second numbers to string then array
//Add 0 standby blinking to display
//Add second mini-display to see progress

//Add if mem1 is undefined, use mem1 else use mem2