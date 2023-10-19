let result = document.getElementById('result');

function addToResult(value) {
    if (result.innerText === '0') {
        result.innerText = value;
    } else {
        result.innerText += value;
    }
}

function calculate() {
    try {
        result.innerText = eval(result.innerText);
    } catch (error) {
        result.innerText = 'Error';
    }
}

function clearResult() {
    result.innerText = '0';
}