//Pseudo Code
//Add 0 standby blinking to display
//Add second mini-display to see progress
//Add visual input
//Add punctuation in result

// Calculate additions
function calcAdd(num1, num2) {result = +num1 + +num2; return result};

// Calculate Subtraction
function calcSub(num1, num2) {result = num1 - num2; return result};

// Calculate Multiplication
function calcMulti(num1, num2) {result = num1 * num2; return result};

// Calculate Division
function calcDivide(num1, num2) {if(num2 == 0) {return "lol, try again..."} else {result = num1 / num2; return result}};

// Calculate Percentage
function calcPerc(num1) {result = num1 / 100; return result};

// Calculate Factorial
function calcFactorial(num1) {if(num1 == 0) {result = 1; return result} else {let c = num1; for(i = num1; i > 1; i--) {c = c * (i-1);} result = c; return result}};

// Calculate Fibonacci Sequence
function calcFibonacci(num1) {if(num1 < 0) {result = "OOPS"; return result}; let seqFib = [0, 1]; let next = 0; for(i = 0; i < num1; i++) {next = seqFib[i] + seqFib[i+1]; seqFib.push(next);} result = seqFib[num1]; return result};

// Input holders
let theNum1 = '';
let theNum2 = '';
let theOperator;

let mem1 = "";
let mem2 = "";

let result ='';
let displayNum = '';
let miniDisplay;

let usedEqual = false;
let usedOperator = false;
let usedResult = false;

let route = 0;

//Operate point to function
function operate(n1, op, n2) {
    if(op == '+') {return calcAdd(n1,n2)};
    if(op == '-') {return calcSub(n1,n2)};
    if(op == '*') {return calcMulti(n1,n2)};
    if(op == '/') {return calcDivide(n1,n2)};
    return 'Error1';
}

function operate2(n1, op) {
    if(op == '!') {return calcFactorial(n1)};
    if(op == 'Fib') {return calcFibonacci(n1)};
    if(op == '%') {return calcPerc(n1)};
    return 'Error2';
}

// Calculator interface
const display = document.querySelector('.mainDisplay');

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

let getAdd = document.querySelector('.row5col4');
let getSub = document.querySelector('.row5col3');
let getMulti = document.querySelector('.row5col2');
let getDivide = document.querySelector('.row5col1');
let getFact = document.querySelector('.row4col1');
let getPerc = document.querySelector('.row3col1');
let getFib = document.querySelector('.row2col5');
let getClear = document.querySelector('.row2col1');
let getEquals = document.querySelector('.row5col5');

//Numbers
getNum0.addEventListener('click', () => {resetRoutes(); showDisplay("0")});
getNum1.addEventListener('click', () => {resetRoutes(); showDisplay("1")});
getNum2.addEventListener('click', () => {resetRoutes(); showDisplay("2")});
getNum3.addEventListener('click', () => {resetRoutes(); showDisplay("3")});
getNum4.addEventListener('click', () => {resetRoutes(); showDisplay("4")});
getNum5.addEventListener('click', () => {resetRoutes(); showDisplay("5")});
getNum6.addEventListener('click', () => {resetRoutes(); showDisplay("6")});
getNum7.addEventListener('click', () => {resetRoutes(); showDisplay("7")});
getNum8.addEventListener('click', () => {resetRoutes(); showDisplay("8")});
getNum9.addEventListener('click', () => {resetRoutes(); showDisplay("9")});

//Operators
getAdd.addEventListener('click', () => {calcRoutes(); operator('+'); theOperator = '+';});
getSub.addEventListener('click', () => {calcRoutes(); operator('-'); theOperator = '-';});
getMulti.addEventListener('click', () => {calcRoutes(); operator('*'); theOperator = '*';});
getDivide.addEventListener('click', () => {calcRoutes(); operator('/'); theOperator = '/';});
getFact.addEventListener('click', () => {calcRoutes(); operator('!'); theOperator = '!'});
getPerc.addEventListener('click', () => {calcRoutes(); operator('%'); theOperator = '%';});
getFib.addEventListener('click', () => {calcRoutes(); operator('Fib'); theOperator = 'Fib';});

getClear.addEventListener('click', () => {completeClearMemory(); display.textContent = 0});
getEquals.addEventListener('click', () => {route = 1; console.log('route 1'); if(theNum1 === "" && theNum2 === "" && result === "") {display.textContent = "0"; clearMemory()} else {if(result != '') {theNum1 = result}; theNum2 = displayNum; showEqual(); clearMemory(); useEqual(); useResult(); usedOperator = false;}});

//------------------------------------------------------------------

// Number Display
function showDisplay(num) {
    displayNum += num; display.textContent = displayNum;
};

//Operators function
function findShowOperator(op) {
    if(op == '+') {theOperator = '+'; display.textContent = theOperator}
    if(op == '-') {theOperator = '-'; display.textContent = theOperator}
    if(op == '*') {theOperator = '*'; display.textContent = "x"};
    if(op == '/') {theOperator = '/'; display.textContent = "÷"};
    if(op == '!' || op == '%' || op == 'Fib') {
        theOperator = op; display.textContent = operate2(theNum1, theOperator); clearMemory();}
};

//Operator used
function useOperator() {
    usedOperator = true;
}

//Equal used
function useEqual() {
    usedEqual = true;
}

// Result active
function useResult() {
    usedResult = true;
}

//Sequence
function calcSeq() {
    if(usedOperator === true) {showEqual()}
}

// Equals calculation
function showEqual() {
    displayNum = '';
    display.textContent = operate(theNum1, theOperator, theNum2);
}

//Find operator <----------------------------------------
function operator(n) {
    if(route == 9) {
        console.log("route 9");
        theNum1 = result;
        theNum2 = displayNum; showEqual();
    }
   
    if(route == 3){
        console.log("route 3");
        theNum1 = displayNum;
        displayNum = '';
        findShowOperator(n);
    }

    if(route == 6) {
        console.log("route 6");
        theNum2 = displayNum; showEqual();
    }

    if(route == 4) {
        console.log("route 1");
        theNum1 = result;
        displayNum = '';
        findShowOperator(n);
        route = 3;
    }
}

function clearMemory() {
    theNum1 = '';
    theNum2 = '';
    mem1 = '';
    mem2 = '';
    theOperator = "";
    displayNum = '';
}

function completeClearMemory() {
    theNum1 = '';
    theNum2 = '';
    theOperator;
    mem1 = "";
    mem2 = "";
    result ='';
    displayNum = '';
    miniDisplay;
    usedEqual = false;
    usedOperator = false;
    usedResult = false;
    route = 0;
}

function calcRoutes() {
    if(route == 6) {route = 9};
    if(route == 3 || route == 6) {route = 6};
    if(route == 0) {route = 3};
    if(route == 1) {route = 4};
    
}

function resetRoutes() {
    if(route == 1) {route = 0; result =''; theNum2 = ''};
}

// Result after equal
// Result after second operator
// Should be able to reset after Result wih new calculation