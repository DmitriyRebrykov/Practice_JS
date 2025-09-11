const number1 = document.getElementById('num1');
const number2 = document.getElementById('num2');
const resultElement = document.getElementById('result');

const sumbitBtn = document.getElementById('submit');

const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
let operation = '+';

plusBtn.onclick = function(){
    operation = '+';
}

minusBtn.onclick = function(){
    operation = '-';
}

function printResult(result){
    if (result > 0) {
        resultElement.style.color = 'green'
    } else {
        resultElement.style.color = 'red'
    }
    resultElement.textContent = result
}

function computeNumbersWithAction(input1, input2, actionSymbol){
    const num1 = Number(input1.value);
    const num2 = Number(input2.value);
    // if (actionSymbol == '+') {
    //     return num1 + num2;
    // } else {
    //     return num1 - num2;
    // }
    return actionSymbol == '+' ? num1 + num2 : num1 - num2
}

sumbitBtn.onclick = function(){
    const result = computeNumbersWithAction(number1, number2, operation);
    printResult(result);
}