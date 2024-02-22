function printOutput(num) {
    document.getElementById('screen').innerHTML = num;
}

function evaluateExpression(expression) {
    try {
        return Function('return ' + expression)();
    } catch (error) {
        return 'Error';
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
