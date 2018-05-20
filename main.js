
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

        Calculator.setInputedNumber(0)
    }

    static setInputedNumber(number) {
        document.getElementById('calculator__value').innerText = number
    }

    static setTotalNumber() {
        _calcuGlobalObj.totalNumber = _calcuGlobalObj.number
    }

    static setNumber(number) {
        _calcuGlobalObj.number = number
    }

    pushNumber(inputedNumber) {
        if (_calcuGlobalObj.totalNumber) {
            Calculator.clear()
        }
        if (_calcuGlobalObj.number.length < 9) {
            _calcuGlobalObj.number += inputedNumber
        }
        Calculator.setInputedNumber(_calcuGlobalObj.number)
    }

    percentNumber() {
        if (_calcuGlobalObj.number) {
            _calcuGlobalObj.number *= 0.01
            Calculator.setInputedNumber(_calcuGlobalObj.number)
            Calculator.setTotalNumber()
        }        
    }

    changeSign() {
        if (_calcuGlobalObj.number) {
            if (_calcuGlobalObj.number.indexOf('-') == 0) {
                _calcuGlobalObj.number = _calcuGlobalObj.number.replace('-', '')    
            }else {
                _calcuGlobalObj.number = `-${_calcuGlobalObj.number}`
            }

            Calculator.setInputedNumber(_calcuGlobalObj.number)
            Calculator.setNumber(_calcuGlobalObj.number)
        }
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

const changeSignInputed = () => {
    const calcu = new Calculator()
    calcu.changeSign()
}












