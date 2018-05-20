
var _calcuGlobalObj = {
    totalNumber: '',
    numbers: [],
    number: '',
    Operators: [],
}

class Calculator
{
    static clear() {
        _calcuGlobalObj.totalNumber =''
        _calcuGlobalObj.numbers = []
        _calcuGlobalObj.number = ''
        _calcuGlobalObj.Operators = []

        Calculator.setNumber(0)
    }

    static setNumber(number) {
        document.getElementById('calculator__value').innerText = number
    }

    static setTotalNumber() {
        _calcuGlobalObj.totalNumber = _calcuGlobalObj.number
    }

    pushNumber(inputedNumber) {
        if (_calcuGlobalObj.totalNumber) {
            Calculator.clear()
        }
        if (_calcuGlobalObj.number.length < 9) {
            _calcuGlobalObj.number += inputedNumber
        }
        Calculator.setNumber(_calcuGlobalObj.number)
    }

    percentNumber() {
        if (_calcuGlobalObj.number) {
            _calcuGlobalObj.number *= 0.01           
        }
        Calculator.setNumber(_calcuGlobalObj.number)
        Calculator.setTotalNumber()        
    }
}

const clearInputed = () => {
    Calculator.clear()
}

const pushNumberInputed = () => {
    const calcu = new Calculator()
    calcu.pushNumber(event.target.innerText)
}

const percentNumberInputed = () => {
    const calcu = new Calculator()
    calcu.percentNumber()
}












