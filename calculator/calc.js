function printOutput(num) {
    document.getElementById('screen').innerHTML = num;
}

let flag=true;
var number = document.getElementsByClassName('buttons');
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        if (this.id == 'clear') {
            printOutput('');
        } else if (this.id == 'backspace') {
            var output = document.getElementById('screen').innerHTML;
            output = output.slice(0, -1);
            printOutput(output);
        } else if (this.id == '=') {
            var output = document.getElementById('screen').innerHTML;
            var result = eval(output);
            flag=false;
            printOutput(result);
           
        } 
        else {
            var output = document.getElementById('screen').innerHTML;
            // let operator=document.getElementsByClassName('operator').innerHTML;
            
            if (isNaN(this.innerHTML) && isNaN(output.substring(output.length-1))) {
                output = output.substring(0,output.length-1);
            }

            if(!isNaN(this.innerHTML) && !flag){
                output='';
                flag=true;

            }
                output += this.innerHTML;
            
            printOutput(output);
        }
    });
}
