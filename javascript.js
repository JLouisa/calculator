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

//Calculate to the Power Square
function calcPowerSquared(num1) {result = Math.pow(num1, 2); return result};

// Calculate to the Power
function calcPower(num1, num2) {result = Math.pow(num1, num2); return result};

// Calculate Root
function calcRoot(num1) {result = Math.pow(num1, 0.5); return result};

// Input holders
let theNum1 = '';
let theNum2 = '';
let theOperator = '';

let mem1 = "";
let mem2 = "";
let mem3 = "";

let result ='';
let displayNum = '';
let miniDisplayNum = '';
let miniDisplayFinal = '';

let route = 0;
let disableButton = 0;
let disableDot = 0;

let usedEqual = false;
let usedOperator = false;

//Operate point to function
function operate(n1, op, n2) {
    if(op == '+') {return calcAdd(n1,n2)};
    if(op == '-') {return calcSub(n1,n2)};
    if(op == '*') {return calcMulti(n1,n2)};
    if(op == '/') {return calcDivide(n1,n2)};
    if(op == '^') {return calcPower(n1,n2)};
    return 'Error1';
}

function operate2(n1, op) {
    if(op == '!') {return calcFactorial(n1)};
    if(op == 'Fib') {return calcFibonacci(n1)};
    if(op == '%') {return calcPerc(n1)};
    if(op == '^2') {return calcPowerSquared(n1)};
    if(op == '√') {return calcRoot(n1)};
    return 'Error2';
}

// Calculator interface
const display = document.querySelector('.mainDisplay');
const miniDisplay = document.querySelector('.miniDisplay');
const useBackSpace = document.querySelector('.row1col2');

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
let getPi = document.querySelector('.row5col5');
let getNumDot = document.querySelector('.nr10');

let getAdd = document.querySelector('.row5col4');
let getSub = document.querySelector('.row5col3');
let getMulti = document.querySelector('.row5col2');
let getDivide = document.querySelector('.row5col1');
let getFact = document.querySelector('.row4col1');
let getPerc = document.querySelector('.row3col1');
let getFib = document.querySelector('.row2col5');
let getPowerSquared = document.querySelector('.row1col3');
let getPower = document.querySelector('.row1col4');
let getRoot = document.querySelector('.row1col5');
let getClear = document.querySelector('.row2col1');
let getEquals = document.querySelector('.equal');

//Get Clicked Input
getNum0.addEventListener('click', funcNum0);
getNum1.addEventListener('click', funcNum1);
getNum2.addEventListener('click', funcNum2);
getNum3.addEventListener('click', funcNum3);
getNum4.addEventListener('click', funcNum4);
getNum5.addEventListener('click', funcNum5);
getNum6.addEventListener('click', funcNum6);
getNum7.addEventListener('click', funcNum7);
getNum8.addEventListener('click', funcNum8);
getNum9.addEventListener('click', funcNum9);

getNumDot.addEventListener('click', funcDot);
getPi.addEventListener('click', funcPi);

//Operators
getAdd.addEventListener('click', funcAdd);
getSub.addEventListener('click', funcSub);
getMulti.addEventListener('click', funcMulti);
getDivide.addEventListener('click', funcDivide);
getPower.addEventListener('click', funcPower);

getFact.addEventListener('click', funcFact);
getPerc.addEventListener('click', funcPerc);
getFib.addEventListener('click', funcFib);
getPowerSquared.addEventListener('click', funcPowerSquared);
getRoot.addEventListener('click', funcRoot);
getEquals.addEventListener('click', funcEquals);

useBackSpace.addEventListener('click', funcBackspace);
getClear.addEventListener('click', funcClear);

//Number Functions
function funcNum0() {addTransition(getNum0); resetRoutes(); disableDotButton(0); disableButtons(0); showDisplay("0"); showMiniDisplay(0)}
function funcNum1() {addTransition(getNum1); resetRoutes(); disableDotButton(0); disableButtons(0); showDisplay("1"); showMiniDisplay(1)}
function funcNum2() {addTransition(getNum2); resetRoutes(); disableDotButton(0); disableButtons(0); showDisplay("2"); showMiniDisplay(2)}
function funcNum3() {addTransition(getNum3); resetRoutes(); disableDotButton(0); disableButtons(0); showDisplay("3"); showMiniDisplay(3)}
function funcNum4() {addTransition(getNum4); resetRoutes(); disableDotButton(0); disableButtons(0); showDisplay("4"); showMiniDisplay(4)}
function funcNum5() {addTransition(getNum5); resetRoutes(); disableDotButton(0); disableButtons(0); showDisplay("5"); showMiniDisplay(5)}
function funcNum6() {addTransition(getNum6); resetRoutes(); disableDotButton(0); disableButtons(0); showDisplay("6"); showMiniDisplay(6)}
function funcNum7() {addTransition(getNum7); resetRoutes(); disableDotButton(0); disableButtons(0); showDisplay("7"); showMiniDisplay(7)}
function funcNum8() {addTransition(getNum8); resetRoutes(); disableDotButton(0); disableButtons(0); showDisplay("8"); showMiniDisplay(8)}
function funcNum9() {addTransition(getNum9); resetRoutes(); disableDotButton(0); disableButtons(0); showDisplay("9"); showMiniDisplay(9)}

//Operator functions
function funcAdd() {addTransition(getAdd); disableButtons(); calcRoutes(); operator('+'); theOperator = '+'; disableButtons(1); showMiniDisplay(' + '); disableDotButton(0); disablePi(0)};
function funcSub() {addTransition(getSub); disableButtons(); calcRoutes(); operator('-'); theOperator = '-'; disableButtons(2); showMiniDisplay(' - '); disableDotButton(0); disablePi(0)};
function funcMulti() {addTransition(getMulti); disableButtons(); calcRoutes(); operator('*'); theOperator = '*'; disableButtons(3); showMiniDisplay(' x '); disableDotButton(0); disablePi(0)};
function funcDivide() {addTransition(getDivide); disableButtons(); calcRoutes(); operator('/'); theOperator = '/'; disableButtons(4); showMiniDisplay(' : '); disableDotButton(0); disablePi(0)};
function funcPower() {addTransition(getPower); disableButtons(); calcRoutes(); operator('^'); theOperator = '^'; disableButtons(5); showMiniDisplay(' ^ '); disableDotButton(0); disablePi(0)};

function funcFact() {addTransition(getFact); calcRoutes2(); theOperator = '!'; operator('!'); showMiniDisplay(' ! ')};
function funcPerc() {addTransition(getPerc); calcRoutes2(); theOperator = '%'; operator('%'); showMiniDisplay(' % ')};
function funcFib() {addTransition(getFib); calcRoutes2(); theOperator = 'Fib'; operator('Fib'); showMiniDisplay(' Fib ')};
function funcPowerSquared() {addTransition(getPowerSquared); calcRoutes2(); theOperator = '^2'; operator('^2'); showMiniDisplay(' ^ 2 ')};
function funcRoot() {addTransition(getRoot); calcRoutes2(); theOperator = '√'; operator('√'); showMiniDisplay(' √')};
function funcEquals() {calcEquals(); };

function funcDot() {addTransition(getNumDot); disableDotButton(1); resetRoutes(); disableButtons(0); disableButtons(6); showDisplay(".");disableButtons(5); disableButtons(1); disableButtons(2); disableButtons(3); disableButtons(4); showMiniDisplay('.'); disablePi(1)};
function funcPi() {addTransition(getPi); disableDotButton(1); disablePi(1); resetRoutes(); disableButtons(0); showDisplay(`${Math.PI}`); showMiniDisplay('π')};

function funcBackspace() {addTransition(useBackSpace); backSpaceRemove()};
function funcClear() {addTransition(getClear); completeClearMemory()};

// Keyboard Shortcuts
document.addEventListener('keydown', (ev => {
    if(ev.code === "Digit0" || ev.code === "Numpad0") {funcNum0()};
    if(!ev.shiftKey && ev.code === "Digit1" || ev.code === "Numpad1") {funcNum1()};
    if(ev.code === "Digit2" || ev.code === "Numpad2") {funcNum2()};
    if(ev.code === "Digit3" || ev.code === "Numpad3") {funcNum3()};
    if(ev.code === "Digit4" || ev.code === "Numpad4") {funcNum4()};
    if(!ev.shiftKey && ev.code === "Digit5" || ev.code === "Numpad5") {funcNum5()};
    if(!ev.shiftKey && ev.code === "Digit6" || ev.code === "Numpad6") {funcNum6()};
    if(ev.code === "Digit7" || ev.code === "Numpad7") {funcNum7()};
    if(!ev.shiftKey && ev.code === "Digit8" || ev.code === "Numpad8") {funcNum8()};
    if(ev.code === "Digit9" || ev.code === "Numpad9") {funcNum9()};
    if(ev.code === "NumpadAdd" || ev.shiftKey && ev.code === "Equal") {funcAdd()}
    if(ev.code === "NumpadSubtract" || ev.code === "Minus") {funcSub()}
    if(ev.code === "NumpadMultiply" || ev.shiftKey && ev.code === "Digit8") {funcMulti()}
    if(ev.code === "NumpadDivide" || ev.shiftKey && ev.code === "Slash") {funcDivide()}
    if(!ev.shiftKey && ev.code === "Equal" || ev.code === "NumpadEnter") {funcEquals()}
    if(ev.code === "Period" || ev.code === "NumpadDecimal") {funcDot()}
    if(ev.code === "KeyF") {funcFib()}
    if(ev.code === "KeyR") {funcRoot()}
    if(ev.code === "KeyS") {funcPowerSquared()}
    if(ev.code === "KeyP") {funcPi()}
    if(ev.code === "Backspace" || ev.code === "Delete") {funcBackspace()};
    if(ev.code === "Escape" || ev.code === "KeyC") {funcClear()};
    if(ev.shiftKey && ev.code === "Digit5") {funcPerc()}
    if(ev.shiftKey && ev.code === "Digit1") {funcFact()}
    if(ev.shiftKey && ev.code === "Digit6") {funcPower()}
}))

// Number Display
function showDisplay(num) {
    if(displayNum.length > 20) {return} 
    else {displayNum += num; display.textContent = displayNum}
};

// Mini Display
function showMiniDisplay(d) {
    if(miniDisplayNum.length > 35) {return};
    if(usedEqual === true) {miniDisplayNum = `${result}${d}`; miniDisplayFinal = miniDisplayNum; miniDisplay.textContent = miniDisplayFinal}
    else{miniDisplayNum += `${d}`; miniDisplay.textContent = miniDisplayNum};
    if(d === ' + ' || d == ' - ' || d == ' x ' || d == ' : ' || d == ' ^ ' || usedEqual == true) {
        miniDisplayFinal = miniDisplayNum.slice()};
    usedEqual = false;
};

//Backspace display
function backSpaceRemove() {
    miniDisplayNum = miniDisplayNum.slice(0,-1);
    
    if(miniDisplayNum == "") {miniDisplay.textContent = 0}
    if(miniDisplayNum == "" && miniDisplayFinal!== "") {miniDisplay.textContent = miniDisplayFinal}
    else if(miniDisplayNum !== "") {miniDisplay.textContent = miniDisplayNum}
    

    displayNum = displayNum.slice(0,-1); display.textContent = displayNum
    if(displayNum == "") {display.textContent = 0}
    
};

//Operators function
function findShowOperator(op) {
    if(op == '+') {theOperator = '+'; display.textContent = theOperator};
    if(op == '-') {theOperator = '-'; display.textContent = theOperator};
    if(op == '*') {theOperator = '*'; display.textContent = "x"};
    if(op == '/') {theOperator = '/'; display.textContent = ":"};
    if(op == '^') {theOperator = '^'; display.textContent = "^"};
    mem1 = op;
};

function findShowOperator2(op) {
    if(op == '!' || op == '%' || op == 'Fib' || op == '√' || op == '^2') {
       theOperator = op; display.textContent = operate2(theNum1, theOperator)};
       mem1 = op;
}

//Equals
function calcEquals() {
    if(displayNum == '' && theNum1 === "" && theNum2 === "" && result === "") {disableButtons(6)}
    if(result === Math.PI && result === Math.PI) {disableButtons(6)}
    else if(route === 1) {
        addTransition(getEquals);
        theNum1 = result; theOperator = mem1; if(theNum2 == "") {theNum2 = mem3};
        display.textContent = operate(theNum1, theOperator, theNum2);
        miniDisplayNum = `${result} | `; 
        miniDisplay.textContent = miniDisplayNum}
    else {route = 1; if(displayNum !== '' && theNum1 == '' && theNum2 == '') {disablePi(0);
                    addTransition(getEquals);  
                    result = displayNum; displayNum = ''; 
                    display.textContent = result}
                    else if(result != '') {addTransition(getEquals); theNum1 = result; theNum2 = displayNum; mem3 = theNum2; showEqual(); clearMemory()}
                    else {addTransition(getEquals); theNum2 = displayNum; mem2 = theNum2; showEqual()};
    
    usedEqual = true;
    showMiniDisplay(' | ');}
};

// Equals part calculation
function showEqual() {displayNum = ''; display.textContent = operate(theNum1, theOperator, theNum2)}

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
        // miniDisplay.textContent = miniDisplayFinal
        // miniDisplayNum == "";
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
    
    theOperator = "";
    displayNum = '';
    miniDisplayNum = '';
    disableButtons(0);
    disableDotButton(0)
}

function completeClearMemory() {
    theNum1 = '';
    theNum2 = '';
    
    mem1 = "";
    mem2 = "";
    mem3 = "";
    
    theOperator = '';
    displayNum = '';
    miniDisplayNum = '';
    miniDisplayFinal = '';

    display.textContent = 0;
    miniDisplay.textContent = 0;

    result ='';
    route = 0;
    disableButtons(0);
    disableDotButton(0)
    disablePi(0);
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

//Disable operator button after 1 press
function disableButtons(n) {
    if(n == 1) {getAdd.removeEventListener("click", funcAdd)};
    if(n == 2) {getSub.removeEventListener("click", funcSub)};
    if(n == 3) {getMulti.removeEventListener("click", funcMulti)};
    if(n == 4) {getDivide.removeEventListener("click", funcDivide)};
    if(n == 5) {getPower.removeEventListener("click", funcPower)};
    if(n == 6) {getEquals.removeEventListener("click", funcEquals)};
    if(n == 2) {getFact.removeEventListener("click", funcFact);
                getPerc.removeEventListener("click", funcPerc);
                getFib.removeEventListener("click", funcFib);
                getPowerSquared.removeEventListener("click", funcPowerSquared);
                getRoot.removeEventListener("click", funcRoot)};
    if(n == 0) {getAdd.addEventListener('click', funcAdd);
                getSub.addEventListener('click', funcSub);
                getMulti.addEventListener('click', funcMulti);
                getDivide.addEventListener('click', funcDivide);
                getPower.addEventListener('click', funcPower);
                getEquals.addEventListener('click', funcEquals);
                getFact.addEventListener("click", funcFact);
                getPerc.addEventListener("click", funcPerc);
                getFib.addEventListener("click", funcFib);
                getPowerSquared.addEventListener("click", funcPowerSquared);
                getRoot.addEventListener("click", funcRoot);
                };
}

//Disable operator button after 1 press
function disableDotButton(n) {
    if(n == 1) {getNumDot.removeEventListener("click", funcDot)};
    if(n == 0) {getNumDot.addEventListener('click', funcDot)}; 
}
//Disable Pi button
function disablePi(n) {
    if(n == 1) {getPi.removeEventListener("click", funcPi)};
    if(n == 0) {getPi.addEventListener('click', funcPi)};
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
    //Add 0 standby blinking to display
    //Add punctuation in result
    //Backspace