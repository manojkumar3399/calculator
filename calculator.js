function backspace() {
    var erase =
        document.getElementById('display').value;
        document.getElementById('display').value =
        erase.substring(0,erase.length - 1)
}

function cal(value) {
    document.getElementById('display').value += value

}

function clearDisplay() {

    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);

    }
    catch (Error) {

        document.getElementById('display').value = 'Error'
    }
}





