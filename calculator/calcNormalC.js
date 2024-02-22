function printOutput(num) {
    document.getElementById('screen').innerHTML = num;
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

// function evaluateExpression(expression) {
//     try {
//         let numbers = [];
//         let operators = [];
//         let currentNumber = '';

//         for (let i = 0; i < expression.length; i++) {
//             let char = expression[i];
//             if (!isNaN(char) || char === '.') {
//                 currentNumber += char;
//                 console.log(currentNumber,"curr If");
//             } else if (isOperator(char)) {
//                 numbers.push(Number(currentNumber));
//                 currentNumber = '';
//                while(operators.length >0 && precedence(operators[operators.length - 1]) >=precedence(char)){
	//                 let operator=operators.pop();
    //                 let b=numbers.pop();
    //                 let a=numbers.pop();
    //                  numbers.push(applyOperator(operator, b, a));
//             
//               }

//                 console.log(currentNumber,"curr elseIf");
//                 console.log(currentNumber,"curr elseIf");
//             }
//         }
//         console.log(currentNumber,"curr outside elseIF");
//         numbers.push(Number(currentNumber));

//         let result = numbers[0];
//         for (let i = 0; i < operators.length; i++) {
//             result = applyOperator(operators[i], numbers[i + 1], result);
//         }

//         return result;
//     } catch (error) {
//         return error;
//     }
// }

function evaluateExpression(expression) {
    try {
        let numbers = [];
        let operators = [];
        let currentNumber = '';
        for (let i = 0; i < expression.length; i++) {
            let char = expression[i];
            if (!isNaN(char) || char === '.') {
                currentNumber += char;
            } else if (isOperator(char)) {
                numbers.push(Number(currentNumber));
                currentNumber = '';

                while (operators.length > 0 && precedence(operators[operators.length - 1]) >= precedence(char)) {
                    let operator = operators.pop();
                    let b = numbers.pop();
                    let a = numbers.pop();
                    numbers.push(applyOperator(operator, b, a));
                }
                console.log(char,'char');
                operators.push(char);
            }
        }
        numbers.push(Number(currentNumber));

        while (operators.length > 0) {
            let operator = operators.pop();
            let b = numbers.pop();
            let a = numbers.pop();
            numbers.push(applyOperator(operator, b, a));
        }

        return numbers[0];
    } catch (error) {
        return error;
    }
}

function precedence(operator) {
    switch (operator) {
        case '+':
        case '-':
            return 1;
        case '*':
        case '/':
            return 2;
        default:
            return 0;
    }
}



function applyOperator(operator, b, a) {
    console.log("answer",operator, b, a);
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) throw 'Division by zero';
            return a / b;
    }
}

var number = document.getElementsByClassName('buttons');
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        var output = document.getElementById('screen').innerHTML;
        if (this.id == 'clear') {
            printOutput('');
        } else if (this.id == 'backspace') {
            output = output.slice(0, -1);
            printOutput(output);
        } else if (this.id == '=') {
            var result = evaluateExpression(output);
            printOutput(result);
        } else {
            output += this.innerHTML;
            printOutput(output);
        }
    });
}
