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
let theOperator = '';

let mem1 = "";
let mem2 = "";

let result ='';
let displayNum = '';
let miniDisplay;

let route = 0;
let disableButton = 0;
let disableDot = 0;

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
let getNumDot = document.querySelector('.nr10');

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
getNum0.addEventListener('click', () => {addTransition(getNum0); resetRoutes(); disableDotButton(0); disableButtons(0); showDisplay("0")});
getNum1.addEventListener('click', () => {addTransition(getNum1); resetRoutes(); disableDotButton(0); disableButtons(0); showDisplay("1")});
getNum2.addEventListener('click', () => {addTransition(getNum2); resetRoutes(); disableDotButton(0); disableButtons(0); showDisplay("2")});
getNum3.addEventListener('click', () => {addTransition(getNum3); resetRoutes(); disableDotButton(0); disableButtons(0); showDisplay("3")});
getNum4.addEventListener('click', () => {addTransition(getNum4); resetRoutes(); disableDotButton(0); disableButtons(0); showDisplay("4")});
getNum5.addEventListener('click', () => {addTransition(getNum5); resetRoutes(); disableDotButton(0); disableButtons(0); showDisplay("5")});
getNum6.addEventListener('click', () => {addTransition(getNum6); resetRoutes(); disableDotButton(0); disableButtons(0); showDisplay("6")});
getNum7.addEventListener('click', () => {addTransition(getNum7); resetRoutes(); disableDotButton(0); disableButtons(0); showDisplay("7")});
getNum8.addEventListener('click', () => {addTransition(getNum8); resetRoutes(); disableDotButton(0); disableButtons(0); showDisplay("8")});
getNum9.addEventListener('click', () => {addTransition(getNum9); resetRoutes(); disableDotButton(0); disableButtons(0); showDisplay("9")});
getNumDot.addEventListener('click', funcDot);

//Operators
getAdd.addEventListener('click', funcAdd);
getSub.addEventListener('click', funcSub);
getMulti.addEventListener('click', funcMulti);
getDivide.addEventListener('click', funcDivide);

getFact.addEventListener('click', () => {addTransition(getFact); calcRoutes2(); theOperator = '!'; operator('!')});
getPerc.addEventListener('click', () => {addTransition(getPerc); calcRoutes2(); theOperator = '%'; operator('%');});
getFib.addEventListener('click', () => {addTransition(getFib); calcRoutes2(); theOperator = 'Fib'; operator('Fib');});

getClear.addEventListener('click', () => {addTransition(getClear); completeClearMemory(); display.textContent = 0});
getEquals.addEventListener('click', () => {addTransition(getEquals); calcEqual()});

//Operator functions
function funcAdd() {addTransition(getAdd); disableButtons(); calcRoutes(); operator('+'); theOperator = '+'; disableButtons(1)};
function funcSub() {addTransition(getSub); disableButtons(); calcRoutes(); operator('-'); theOperator = '-'; disableButtons(2)};
function funcMulti() {addTransition(getMulti); disableButtons(); calcRoutes(); operator('*'); theOperator = '*'; disableButtons(3)};
function funcDivide() {addTransition(getDivide); disableButtons(); calcRoutes(); operator('/'); theOperator = '/'; disableButtons(4)};
function funcDot() {addTransition(getNumDot); disableDotButton(1); resetRoutes(); disableButtons(0); showDisplay(".");disableButtons(1); disableButtons(2); disableButtons(3); disableButtons(4)};

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
};

function findShowOperator2(op) {
    if(op == '!' || op == '%' || op == 'Fib') {
       theOperator = op; display.textContent = operate2(theNum1, theOperator);}
}

//Equals
function calcEqual() {
    route = 1; console.log(`route 6, theNum1 = ${theNum1}, theNum2 = ${theNum2}`);
    if(theNum1 === "" && theNum2 === "" && result === "") {display.textContent = "0"; clearMemory()} 
    else {if(result != '') {theNum1 = result}; 
        theNum2 = displayNum; 
        showEqual(); 
        clearMemory();
    }
};

// Equals part calculation
function showEqual() {displayNum = ''; display.textContent = operate(theNum1, theOperator, theNum2);}

//Find operator
function operator(n) {
    if(route == 9) {
        theNum1 = result;
        theNum2 = displayNum; showEqual();
    }

    if(route == 6) {
        theNum2 = displayNum; showEqual();
    }

    if(route == 4) {
        theNum1 = result;
        displayNum = '';
        findShowOperator(n);
        route = 6;
    }

    if(route == 3){
        theNum1 = displayNum;
        displayNum = '';
        findShowOperator(n);
    }

    if(route == 2) {
        displayNum = '';
        findShowOperator2(n);
        route = 4;
    }
}

function clearMemory() {
    theNum1 = '';
    theNum2 = '';
    
    mem1 = '';
    mem2 = '';
    
    theOperator = "";
    displayNum = '';
    disableButtons(0);
}

function completeClearMemory() {
    theNum1 = '';
    theNum2 = '';
    
    mem1 = "";
    mem2 = "";
    
    theOperator = '';
    displayNum = '';
    
    result ='';
    miniDisplay;
    route = 0;
    disableButtons(0);
}

function calcRoutes() {
    if(route == 6) {route = 9};
    if(route == 3 || route == 6) {route = 6};
    if(route == 0) {route = 3};
    if(route == 1) {route = 4};
}

function calcRoutes2() {
    if(theNum1 !== "" && displayNum !== '') {theNum2 = displayNum; showEqual()}
    route = 2;
    theNum1 = displayNum;
    if(result !=='') {theNum1 = result;}
}
        
function resetRoutes() {
    if(route == 1) {route = 0; result =''; theNum2 = ''};
}

//Disable operator button after 1 press.
function disableButtons(n) {
    if(n == 1) {getAdd.removeEventListener("click", funcAdd)};
    if(n == 2) {getSub.removeEventListener("click", funcSub)};
    if(n == 3) {getMulti.removeEventListener("click", funcMulti)};
    if(n == 4) {getDivide.removeEventListener("click", funcDivide)};
    if(n == 0) {getAdd.addEventListener('click', funcAdd);
                getSub.addEventListener('click', funcSub);
                getMulti.addEventListener('click', funcMulti);
                getDivide.addEventListener('click', funcDivide);}
};

//Disable operator button after 1 press.
function disableDotButton(n) {
    if(n == 1) {getNumDot.removeEventListener("click", funcDot)}
    if(n == 0) {getNumDot.addEventListener('click', funcDot)};
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('clicked');
  };

  function addTransition(n) {
    n.classList.add('clicked');
  };

  const square = Array.from(document.querySelectorAll('.square'));
  square.forEach(square => square.addEventListener('transitionend', removeTransition));
  window.addEventListener('clicked', addTransition)

//Pseudo Code
//Add ability to only use ${number} ${=} equals ${number}
//Add 0 standby blinking to display
//Add second mini-display to see progress
//Add visual input
//Add punctuation in result
// Result after equal
// Result after second operator
// Should be able to reset after Result wih new calculation
