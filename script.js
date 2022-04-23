const add = function(num1, num2) {
    return num1 + num2;
};
console.log(add(2, 4));

const subtract = function(num1, num2) {
    return num1 - num2;
};
console.log(subtract(9, 4));

const multiply = function(num1, num2) {
    return num1 * num2;
};
console.log(multiply(3, 3));

const divide = function(num1, num2){
    return num1 / num2;
};
console.log(divide(6, 4));

const operate = function(operator, num1, num2){
    let output = 0;
        switch(operator) {
            case '+':
            output = num1 + num2;
            break;
            
            case '-':
            output = num1 - num2;
            break;

            case '*':
            output = num1 * num2;
            break;

            case '/':
            output = a / b
    
        }
        return output;
    }
console.log(operate("*", 9, 8));

let input = document.querySelector('input');

let number1 = 0;

document.querySelector('#clear').addEventListener('click', function() {
    input.value = " ";
    number1 = 0;
});

document.querySelector('#one').addEventListener('click', function() {
    input.value += 1;
    number1 += '1';
});

document.querySelector('#two').addEventListener('click', function() {
    input.value += 2;
    number1 += '2';
});

document.querySelector('#three').addEventListener('click', function() {
    input.value += 3;
    number1 += '3';
});

document.querySelector('#four').addEventListener('click', function() {
    input.value += 4;
    number1 += '4'
});

document.querySelector('#five').addEventListener('click', function() {
    input.value += 5;
    number1 += '5';
});

document.querySelector('#six').addEventListener('click', function() {
    input.value += 6;
    number1 += '6';
});

document.querySelector('#seven').addEventListener('click', function() {
    input.value += 7;
    number1 += '7';
});

document.querySelector('#eight').addEventListener('click', function() {
    input.value += 8;
    number1 += '8';
});

document.querySelector('#nine').addEventListener('click', function() {
    input.value += 9;
    number1 += '9';
});

document.querySelector('#zero').addEventListener('click', function() {
    input.value += 0;
    number1 += '0';
});

document.querySelector('#decimal').addEventListener('click', function() {
    input.value += ".";
    number1 += '.';
});

document.querySelector('#percent').addEventListener('click', function() {
    input.value += "%";
    number1 += '%';
});

