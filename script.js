
let num1 = '';

let num2 = '';

let input = document.querySelector('input');

document.querySelector('#clear').addEventListener('click', function() {
    input.value = '';
    num1 = '';
    operator = '';
});

document.querySelector('#delete').addEventListener('click', function() {
    input.value = input.value.substring(0, input.value.length - 1);
});

document.querySelector('#one').addEventListener('click', function() {
    input.value += 1;
});

document.querySelector('#two').addEventListener('click', function() {
    input.value += 2;
});

document.querySelector('#three').addEventListener('click', function() {
    input.value += 3;
});

document.querySelector('#four').addEventListener('click', function() {
    input.value += 4;
});

document.querySelector('#five').addEventListener('click', function() {
    input.value += 5;
});

document.querySelector('#six').addEventListener('click', function() {
    input.value += 6;
});

document.querySelector('#seven').addEventListener('click', function() {
    input.value += 7;
});

document.querySelector('#eight').addEventListener('click', function() {
    input.value += 8;
});

document.querySelector('#nine').addEventListener('click', function() {
    input.value += 9;
});

document.querySelector('#zero').addEventListener('click', function() {
    input.value += 0;
});

document.querySelector('#decimal').addEventListener('click', function() {
    input.value += ".";
});

let operator;

document.querySelector('#plus').addEventListener('click', function() {
    operator = '+';
    value1();
});

document.querySelector('#minus').addEventListener('click', function() {
    operator = '-';
    value1();
});

document.querySelector('#multiply').addEventListener('click', function() {
    operator = '*';
    value1();
});

document.querySelector('#divide').addEventListener('click', function() {
    operator = '/';
    value1();
});


function value1() {
    if ((operator == '+') || (operator == '-') || (operator == '*') || (operator == '/')) {
        num1 = parseFloat(input.value);
        input.value = '';
    }
}


function value2() {
    if (Number.isFinite(num1) == true) {
        num2 = parseFloat(input.value);
    }
}

const operate = function(operator, num1, num2){
    
    switch(operator) {
        case '+':
        return Math.round((num1 + num2) * 100)/100;
                
                
        case '-':
        return Math.round((num1 - num2) * 100)/100;
                
                
        case '*':
        return Math.round((num1 * num2) * 100)/100;
                    
        case '/':
        return Math.round((num1 / num2) * 100)/100;
}
}
                    
    document.querySelector('#equal').addEventListener('click', function() {
value2();
operate(operator, num1, num2);
input.value = operate(operator, num1, num2);
});

document.body.addEventListener('keydown', function(e) {
    if (e.key == 1) {
        input.value += 1;
    } else if (e.key == 2) {
        input.value += 2;
    } else if (e.key == 3) {
        input.value += 3;
    } else if (e.key == 4) {
        input.value += 4; 
    } else if (e.key == 5) {
        input.value += 5;
    } else if (e.key == 6) {
        input.value += 6; 
    } else if (e.key == 7) {
        input.value += 7;
    } else if (e.key == 8) {
        input.value += 8;
    } else if (e.key == 9) {
        input.value += 9;
    } else if (e.key == 0) {
        input.value += 0;
    }else if (e.key == '.') {
        input.value += '.';
    } else if (e.key == "Backspace" || e.key == "Delete") {
        input.value = input.value.substring(0, input.value.length - 1);
    } else if (e.key == '+') {
        operator = '+';
        value1();
    } else if (e.key == '-') {
        operator = '-';
        value1();
    } else if (e.key == '*') {
        operator = '*';
        value1();
    } else if (e.key == '/') {
        operator = '/';
        value1();
    } else if (e.key == '=' || e.key == "Enter") {
        value2();
        operate(operator, num1, num2);
        input.value = operate(operator, num1, num2);
    } else if (e.key == 'c') {
        input.value = '';
        num1 = '';
        operator = '';
    }
});