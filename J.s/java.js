const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('btn'));
const operatorKeys = ['+', '-', '*', '/'];
const decimalAdded = [];

buttons.map( button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerText;

        if (buttonText === 'C') {
            display.innerText = '0';
            decimalAdded[0] = false;
            decimalAdded[1] = false;
            return;
        }

        if (buttonText === '=') {
            const result = eval(display.innerText);
            display.innerText = result;
            decimalAdded[0] = false;
            decimalAdded[1] = false;
            return;
        }

        if (buttonText === '.') {
            if (!decimalAdded[0]) {
                display.innerText += buttonText;
                decimalAdded[0] = true;
                decimalAdded[1] = true;
            }
            return;
        }

        if (operatorKeys.includes(buttonText)) {
            if (decimalAdded[1]) {
                display.innerText = display.innerText.slice(0, -1);
                decimalAdded[1] = false;
            }
            display.innerText += buttonText;
            decimalAdded[0] = false;
            return;
        }

        if (display.innerText === '0') {
            display.innerText = buttonText;
        } else {
            display.innerText += buttonText;
        }
    });
});