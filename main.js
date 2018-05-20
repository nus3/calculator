
var _calcuGlobalObj = {
    totalNumber: '',
    numbers: [],
    number: '',
    Operators: [],
}

class Calculator
{
    pushNumber(inputedNumber) {
        if (_calcuGlobalObj.number.length < 9) {
            _calcuGlobalObj.number += inputedNumber
        }
        document.getElementById('calculator__value').innerText = _calcuGlobalObj.number
    }

    static clear() {
        _calcuGlobalObj.totalNumber =''
        _calcuGlobalObj.numbers = []
        _calcuGlobalObj.number = ''
        _calcuGlobalObj.Operators = []

        document.getElementById('calculator__value').innerText = 0
    }
}

const clearInputed = () => {
    Calculator.clear()
}

const pushNumberInputed = () => {
    const calcu = new Calculator()
    calcu.pushNumber(event.target.innerText)
}












