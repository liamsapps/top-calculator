/********************************************************************************
 * Author: Liam Sirkett
 * Date: Feb.28/2025
 * Project: Calculator
 * Description: Create a browser based calculator app using Javascript.
 */

// create variable for each button, except for number buttons 1 - 9
const clear = document.querySelector("#clear");
const back = document.querySelector("#back");
const plusminus = document.querySelector("#plusminus");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const zero = document.querySelector("#zero");
const dot = document.querySelector("#dot");
const equal = document.querySelector("#equal");
const input = document.querySelector("#input"); 
// TODO - add each operation to new display on top of current display
// const output = document.querySelector("#calc_display"); 

// create variable to store all number buttons
const numberButtons = document.querySelectorAll(".numbers");

// disable input used as display
input.disabled = true;

// disable back button, will be enabled once numbers entered in display
back.disabled = true;

// using toPrecision()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision
function roundResult(a, op, b) {
    let length = 0;
    let tmpResult = 0;
    let left = "", right = "";
    let additionResult = 0;
    let subtractionResult = 0;
    let multiplicationResult = 0;
    let divisionResult = 0;
        
    switch (op) {
        case '+':
            // 1.calculate result
            tmpResult = +a + +b;
            
            // 2.round result to 3 significant digits
            // split into 2 portions (before & after decimal)
            [left, right] = tmpResult.toString().split(".");
            length = left.length + 3;
            
            // NEED # OF DECIMAL PLACES FOR toFixed() !!!!
            // NOTE: toPrecision() does NOT include leading zeroes with decimal !!!
            additionResult = tmpResult.toPrecision(length);
            
            // split into 2 portions to remove ending zeroes
            [left, right] = additionResult.toString().split(".");

            // check for trailing zeroes
            if (right.indexOf("0", right.length - 1) !== -1) {
                
                for (i = right.length - 1; i >= 0; i--) {
                    // remove trailing zeroes
                    if (right.indexOf("0", i) !== -1) {
                        right = right.slice(0, -1);
                    }                    
                    else {
                        break;
                    }
                    
                }
                // rebuild variable based on whether trailing zeroes were removed
                additionResult = (right !== "") ? left + "." + right : left;            
            } 

            return additionResult;
            
        case '-':
            // 1.calculate result            
            tmpResult = a -  b;
            
            // 2.round result to 3 significant digits
            // split into 2 portions (before & after decimal)
            [left, right] = tmpResult.toString().split(".");
            length = left.length + 3;
                        
            // NEED # OF DECIMAL PLACES FOR toFixed() !!!!
            // NOTE: toPrecision() does NOT include leading zeroes with decimal !!!
            subtractionResult = tmpResult.toPrecision(length);
            
            // split into 2 portions to remove ending zeroes
            [left, right] = subtractionResult.toString().split(".");

            // check for trailing zeroes
            if (right.indexOf("0", right.length - 1) !== -1) {
                
                for (i = right.length - 1; i >= 0; i--) {
                    // remove trailing zeroes
                    if (right.indexOf("0", i) !== -1) {
                        right = right.slice(0, -1);
                    }
                    else {
                        break;
                    }
                    
                }
                // rebuild variable based on whether trailing zeroes were removed
                subtractionResult = (right !== "") ? left + "." + right : left;
            } 
            
            return subtractionResult;

        case '*':
            // 1.calculate result
            tmpResult = a * b;
            
            // 2.round result to 3 significant digits
            // split into 2 portions (before & after decimal)
            [left, right] = tmpResult.toString().split(".");
            length = left.length + 3;
                        
            // NEED # OF DECIMAL PLACES FOR toFixed() !!!!
            // NOTE: toPrecision() does NOT include leading zeroes with decimal !!!
            multiplicationResult = tmpResult.toPrecision(length);
            
            // split into 2 portions to remove ending zeroes
            [left, right] = multiplicationResult.toString().split(".");

            // check for trailing zeroes
            if (right.indexOf("0", right.length - 1) !== -1) {
                
                for (i = right.length - 1; i >= 0; i--) {
                    // remove trailing zeroes
                    if (right.indexOf("0", i) !== -1) {
                        right = right.slice(0, -1);
                    }
                    else {
                        break;
                    }
                    
                }
                // rebuild variable based on whether trailing zeroes were removed
                multiplicationResult = (right !== "") ? left + "." + right : left;
            } 
            
            return multiplicationResult;

        case '/':
            // 1.calculate result
            tmpResult = a / b;
            
            // 2.round result to 3 significant digits
            // split into 2 portions (before & after decimal)
            [left, right] = tmpResult.toString().split(".");
            length = left.length + 3;
            
            // NEED # OF DECIMAL PLACES FOR toFixed() !!!!
            // NOTE: toPrecision() does NOT include leading zeroes with decimal !!!
            divisionResult = tmpResult.toPrecision(length);
            
            // split into 2 portions to remove ending zeroes
            [left, right] = divisionResult.toString().split(".");

            // check for trailing zeroes
            if (right.indexOf("0", right.length - 1) !== -1) {
                
                for (i = right.length - 1; i >= 0; i--) {
                    // remove trailing zeroes
                    if (right.indexOf("0", i) !== -1) {
                        right = right.slice(0, -1);
                    }
                    else {
                        break;
                    }
                    
                }
                // rebuild variable based on whether trailing zeroes were removed
                divisionResult = (right !== "") ? left + "." + right : left;
            } 

            return divisionResult;
    }   
}

let addition = function(a, b) {
    // result length greater than 3 and includes a dot '.'
    if ((+a + +b).toString().length > 3 && (+a + +b).toString().includes(".")) {
        return roundResult(a, "+", b);
    } 
    else {
        return  +a + +b;
    }
};

let subtraction = function(a, b) {
    // result length greater than 3 and includes a dot '.'
    if ((a - b).toString().length > 3 && (a - b).toString().includes(".")) {
        return roundResult(a, "-", b);
    } 
    else {
        return  a - b;
    }
};

let multiplication = function(a, b) {
    // result length greater than 3 and includes a dot '.'
    if ((a * b).toString().length > 3 && (a * b).toString().includes(".")) {
        return roundResult(a, "*", b);
    } 
    else {
        return  a * b;
    }
};

let division = function(a, b) {
    // result length greater than 3 and includes a dot '.'
    if ((a / b).toString().length > 3 && (a / b).toString().includes(".")) {
        return roundResult(a, "/", b);
    } 
    else {
        return  a / b;
    }
};

let operate = function(op, num1, num2) {
    switch (op) {
        case '+':
            return addition(num1, num2);
        case '-':
            return subtraction(num1, num2);
        case '*':
            return multiplication(num1, num2);
        case '/':
            return division(num1, num2);
    }
};

// declare operation variables
let num1 = "", op = "", num2 = "", result = "";

// declare click counters
let plusClick = 0, minusClick = 0, multiplyClick = 0, divideClick = 0, equalClick = 0;

// add event listeners for buttons 1 - 9
for (let button of numberButtons) {
    button.addEventListener("click", function (e) {
        // button id mapping to number
        const numbers = { "one" : "1", "two" : "2", "three" : "3", "four" : "4", "five" : "5",
                          "six" : "6", "seven": "7", "eight" : "8", "nine" : "9", };
        
        let increment = numbers[e.target.id];

        // equal has been pressed, but user wants to start new operation
        if (op === '' && num1 !== "" && equalClick === 1) { 
            // reset num1
            num1 = "";
            equalClick = 0;
        }
                
        if (op === '') {
            // if number starts with zero, must be followed by a dot 
            // otherwise, replace zero with number (== increment)
            if (num1[0] === "0" && num1[1] !== ".") {
                num1 = num1.substr(1);
            }

            // ensure number length less than 10 (current input.maxLength)
            (num1.length < input.maxLength) ? num1 += `${increment}` : num1;
            input.value = num1;

            // disable back button if display is empty
            checkBackButton(num1);
        }
        else {
            // if number starts with zero, must be followed by a dot 
            // otherwise, replace zero with number (== increment)
            if (num2[0] === "0" && num2[1] !== ".") {
                num2 = num2.substr(1);
            }

            // ensure number length less than 10 (current input.maxLength)
            (num2.length < input.maxLength) ? num2 += `${increment}` : num2;
            input.value = num2;

            // disable back button if display is empty
            checkBackButton(num2);
        }
      });
}

zero.addEventListener("click", (e) => {  
    // equal has been pressed, but user wants to start new operation
    if (op === '' && num1 !== "" && equalClick === 1) { 
        // reset num1
        num1 = "";
        equalClick = 0;
    }
    
    if (op === '') {
        if (num1 === "") {
            num1 = "0";
        }
        // allow multiple zeroes if after non-zero number 
        else if (num1[0] !== "0") {
            (num1.length < input.maxLength) ? num1 += "0": num1;
        }
        // allow multiple zeroes if after a dot 
        else if (num1[0] === "0" && num1[1] === ".") {
            (num1.length < input.maxLength) ? num1 += "0": num1;
        }
        
        input.value = num1;

        // disable back button if display is empty
        checkBackButton(num1);
    }
    else {
        if (num2 === "") {
            num2 = "0";
        }
        // allow multiple zeroes if after non-zero number 
        else if (num2[0] !== "0") {
            (num2.length < input.maxLength) ? num2 += "0": num2;
        }
        // allow multiple zeroes if after a dot 
        else if (num2[0] === "0" && num2[1] === ".") {
            (num2.length < input.maxLength) ? num2 += "0": num2;
        }

        input.value = num2;

        // disable back button if display is empty
        checkBackButton(num2);
    }
});

dot.addEventListener("click", (e) => {
    // equal has been pressed, but user wants to start new operation
    if (op === '' && num1 !== "" && equalClick === 1) { 
        // reset num1
        num1 = "";
        equalClick = 0;
    }
    
    if (op === '') {
        // ensure 0 precedes a dot and only 1 dot allowed per number
        if (num1 === "") {
            num1 += "0";
        }

        if (!num1.toString().includes(".")) {
            num1 += ".";
        }      

        input.value = num1;

        // enable back button since display not empty
        checkBackButton(num1);
        // disable dot button if one already present
        checkForDot(num1);
        
    }
    else {
        // ensure 0 precedes a dot and only 1 dot allowed per number
        if (num2 === "") {
            num2 += "0";
        }

        if (!num2.toString().includes(".")) {
            num2 += ".";
        }      
        
        input.value = num2;

        // enable back button since display not empty
        checkBackButton(num2);
        // disable dot button if one already present
        checkForDot(num2);
        
    }
});

back.addEventListener("click", (e) => {
    if (op === '') {
        if (num1.toString().length > 0) {
            num1 = num1.toString().slice(0, -1);
        }

        // for negative numbers, ensure display not left with single minus '-'
        if (num1 === "-") {
            num1 = "";
        }
        
        input.value = num1;

        // disable back button if display is empty
        checkBackButton(num1);
        // enable dot button if not in display
        checkForDot(num1);
    }
    else {
        if (num2.toString().length > 0) {
            num2 = num2.toString().slice(0, -1);
        }
        
        // for negative numbers, ensure display not left with single minus '-'
        if (num2 === "-") {
            num2 = "";
        }

        input.value = num2;

        // disable back button if display is empty
        checkBackButton(num2);
        // enable dot button if not in display
        checkForDot(num2);
    }
});

clear.addEventListener("click", () => {
    op = "", num1 = "", num2 = "", result = "", input.value = "";
    plusClick = 0, minusClick = 0, multiplyClick = 0, divideClick = 0, equalClick = 0;

    // disable back button 
    checkBackButton(num2);
    // enable dot button 
    checkForDot(num2);
});

plusminus.addEventListener("click", (e) => {
    if (op === "") {
        if (num1 === "") {
            alert("To use the '+ / -' button, you must first enter a number.")
        }
        else {
            if (num1 > 0) {
                num1 = -Math.abs(num1);
            }
            else {
                num1 = Math.abs(num1);
            }
            input.value = num1;
        }
    }
    else {
        if (num2 === "") {
            alert("To use the '+ / -' button, you must first enter a number.")
        }
        else {
            if (num2 > 0) {
                num2 = -Math.abs(num2);
            }
            else {
                num2 = Math.abs(num2);
            }
            input.value = num2;
        }
    }
});

function checkBackButton(num) {
    
    if (num === "") {
        back.disabled = true;
    }
    else {
        back.disabled = false;
    }
}

function checkForDot(num) {
    
    if (num.toString().includes(".")) {
        dot.disabled = true;
    }
    else {
        dot.disabled = false;
    }
}

function checkDivideByZero(num2) {

    if (num2 === "0" || num2 === "") {
        return true;
    }
    else {
        return false;
    }
}

function calculate() {
    
    equalClick = 0;

    if (num1 === "" || op === "" || num2 === "") {
        if (num1 === "" && op === "" && num2 === "") {
            alert(`To use this calculator, you must provide a number, an operator and a number before hitting equal.\n\neg. '3 + 5' or '9 / 3 or '7 - 2' or '8 + 4'`);
            // num1 = "", op = "", num2 = "", result = "";
            input.value = "";
            
        }
        else if (num1 === "" && op !== "" && num2 === "") {
            alert(`You cannot click an operator (+, -, * OR /) before entering a number`);
            // num1 = "", op = "", num2 = "", result = "";
            op = "";
            input.value = "";
        }
        else if (op === "" && num2 === "") {
            alert(`You have provided the first number ‘${num1}’ of an operation, but you must also supply an operator (+, -, * OR /) and a second number.\n\neg. '${num1} + 5' or '${num1} / 3 or '${num1} - 2' or '${num1} + 4'`);
            op = "", num2 = "", result = "";
            
            // disable back button
            checkBackButton(num1);
            // enable dot button
            checkForDot(num1);
        }
        else if (num2 === "") {
            alert(`You have provided the first number ‘${num1}’ and the operator ‘${op}’ for an operation, but you must also supply a second number.\n\neg. '${num1} ${op} 9'`);
            num2 = "", result = "";
            
            // disable back button
            checkBackButton(num2);
            // enable dot button
            checkForDot(num2);
        }  
    }
    else {
        if (op === "/" && checkDivideByZero(num2)) {    
            alert("Can't divide by zero!!!");
            num1 = "";
            input.value = "";
            num1 = "", op = "", num2 = "", result = "";
        }
        else {
            result = operate(op, num1, num2);
            num1 = result;
            input.value = result;        
            equalClick = 1;
            op = "", num2 = "", result = "";
            // if num1 set to empty, cannot reuse result !!!
            // op = "", num1 = "", num2 = "", result = "";
        }
        plusClick = 0, minusClick = 0, multiplyClick = 0, divideClick = 0;   
        
        // disable back button
        checkBackButton(num2);
        // enable dot button
        checkForDot(num2);
    }   
}

function updateResult() {
    
    if (num2 !== "" && checkDivideByZero(num2)) {    
        alert("Can't divide by zero!!!");
        op = "", num1 = "", num2 = "", result = "";
        plusClick = 0, minusClick = 0, multiplyClick = 0, divideClick = 0, equalClick = 0;
        input.value = "";
    }
    else {
        result = operate(op, num1, num2); 
        input.value = result;
        num1 = result;
        num2 = "", result = "";
    }
    
    // disable back button
    checkBackButton(num2);
    // enable dot button
    checkForDot(num2);
}

divide.addEventListener("click", (e) => {
    
    // enable dot button if not in display
    checkForDot(num2);

    // ensure a math operator hasn't been clicked before a number has been clicked
    if (num1 === "") {
        op = "/";
        calculate();
    }
    // ensure operations can proceed without having to click the equal button
    else if (op !== "" && op !== "/") {
        // account for math operation switch
        // every time a math operator is clicked, a calculation takes place
        // NEED a value for num2 to ensure proper result of previous operation
        // if no num2 value, skip calculation
        if (num2 !== "") {
            updateResult(op, num1, num2);
        }
        
        input.value = num1;
        op = "/";
    }
    else {
        op = "/";
        divideClick++;
     
        if (divideClick > 1 || multiplyClick >= 1 || minusClick >= 1 || plusClick >= 1) {
            // prevent division of empty string 
            if (num2 === "") {
                num2 = "1";
                updateResult(op, num1, num2);
            }
            else {                
                updateResult(op, num1, num2);
                input.value = num1;            
            }
        }
    }     
});

plus.addEventListener("click", (e) => {
    
    // enable dot button if not in display
    checkForDot(num2);

    // ensure a math operator hasn't been clicked before a number has been clicked
    if (num1 === "") {
        op = "+";
        calculate();
    }
    // ensure operations can proceed without having to click the equal button
    else if (op !== "" && op !== "+") {
        // account for math operation switch
        // every time a math operator is clicked, a calculation takes place
        // NEED a value for num2 to ensure proper result of previous operation
        // if no num2 value, skip calculation
        if (num2 !== "") {
            updateResult(op, num1, num2);
        }
                
        input.value = num1;
        op = "+";
    }
    else {
        op = "+";
        plusClick++;
     
        if (divideClick >= 1 || multiplyClick >= 1 || minusClick >= 1 || plusClick > 1) {
            updateResult(op, num1, num2); 
            input.value = num1;
        }
    }
});

multiply.addEventListener("click", (e) => {
   
    // enable dot button if not in display
    checkForDot(num2);

    // ensure a math operator hasn't been clicked before a number has been clicked
    if (num1 === "") {
        op = "*";
        calculate();
    }
    // ensure operations can proceed without having to click the equal button
    else if (op !== "" && op !== "*") {
        // account for math operation switch
        // every time a math operator is clicked, a calculation takes place
        // NEED a value for num2 to ensure proper result of previous operation
        // if no num2 value, skip calculation
        if (num2 !== "") {
            updateResult(op, num1, num2);
        }
        
        input.value = num1;
        op = "*";
    }
    else {
        op = "*";
        multiplyClick++;

        if (divideClick >= 1 || multiplyClick > 1 || minusClick >= 1 || plusClick >= 1) {
            // prevent multiplication of empty string 
            if (num2 === "") {
                num2 = "1";
                updateResult(op, num1, num2);
            }
            else {
                updateResult(op, num1, num2);
                input.value = num1;
            }
        }
    }    
});

minus.addEventListener("click", (e) => {

    // enable dot button if not in display
    checkForDot(num2);

    // ensure a math operator hasn't been clicked before a number has been clicked
    if (num1 === "") {
        op = "-";
        calculate();
    }
    // ensure operations can proceed without having to click the equal button
    else if (op !== "" && op !== "-") {
        // account for math operation switch
        // every time a math operator is clicked, a calculation takes place
        // NEED a value for num2 to ensure proper result of previous operation
        // if no num2 value, skip calculation
        if (num2 !== "") {
            updateResult(op, num1, num2);
        }
                
        input.value = num1;
        op = "-";
    }
    else {
        op = "-";
        minusClick++;

        if (divideClick >= 1 || multiplyClick >= 1 || minusClick > 1 || plusClick >= 1) {
            updateResult(op, num1, num2);
            input.value = num1;
        }
    }
});

equal.addEventListener("click", calculate);



