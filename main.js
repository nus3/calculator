
var _calcuGlobalObj = {
    totalNumber: '',
    number: '',
    inputedObj: {
        numbers: [],
        operators: [],
    }
}

class Calculator
{
    static clear() {
        _calcuGlobalObj.totalNumber =''
        _calcuGlobalObj.number = ''
        _calcuGlobalObj.inputedObj.numbers = []
        _calcuGlobalObj.inputedObj.operators = []

        Calculator.setInputedNumber(0)
    }

    static setInputedNumber(number) {
        number = String(number)
        if (number.length >= 10) {
            Calculator.clear()
            number = 'error'
        }

        if (number == 'null') {
            document.getElementById('calculator__value').innerText = ''
        }else {
            document.getElementById('calculator__value').innerText = number
        }
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
            if (inputedNumber == 0 && !_calcuGlobalObj.number) {

            }else {
                _calcuGlobalObj.number += inputedNumber
                Calculator.setInputedNumber(_calcuGlobalObj.number)
            }
        }
    }

    percentNumber() {
        if (_calcuGlobalObj.number) {
            _calcuGlobalObj.number *= 0.01
            _calcuGlobalObj.number = _calcuGlobalObj.number.toFixed(5)
            Calculator.setInputedNumber(_calcuGlobalObj.number)
            Calculator.setTotalNumber()
        }        
    }

    changeSign() {
        if (_calcuGlobalObj.number) {
            const number = String(_calcuGlobalObj.number)
            if (number.indexOf('-') == 0) {
                _calcuGlobalObj.number = _calcuGlobalObj.number.replace('-', '')    
            }else {
                _calcuGlobalObj.number = `-${_calcuGlobalObj.number}`
            }

            Calculator.setInputedNumber(_calcuGlobalObj.number)
            Calculator.setNumber(_calcuGlobalObj.number)
        }
    }

    addDecimalPoint() {
        if (!_calcuGlobalObj.number) {
            Calculator.setNumber('0')
        }

        const number = String(_calcuGlobalObj.number)
        if (number.indexOf('.') >= 0) {
            
        }else {
            _calcuGlobalObj.number = `${_calcuGlobalObj.number}.`
        }
        Calculator.setInputedNumber(_calcuGlobalObj.number)
        Calculator.setNumber(_calcuGlobalObj.number)
    }

    addNumber(operator) {
        if (_calcuGlobalObj.inputedObj.numbers) {
            this.calculateNumber()
        }

        if (_calcuGlobalObj.number) {
            _calcuGlobalObj.inputedObj.numbers.push(_calcuGlobalObj.number)
            _calcuGlobalObj.number = ''
            _calcuGlobalObj.inputedObj.operators.push(operator)
        }
    }

    calculateNumber() {
        if (_calcuGlobalObj.inputedObj.numbers[0]) {
            let formula = ''
            _calcuGlobalObj.inputedObj.numbers.forEach((num, i) => {
                formula += `${num} ${_calcuGlobalObj.inputedObj.operators[i]}`
            })

            if (_calcuGlobalObj.number) {
                formula += _calcuGlobalObj.number
            }

            _calcuGlobalObj.inputedObj.numbers = []
            _calcuGlobalObj.inputedObj.operators = []
            Calculator.setNumber(eval(formula).toFixed(5))
            Calculator.setInputedNumber(eval(formula).toFixed(5))
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

const addDecimalPointInputed = () => {
    const calcu = new Calculator()
    calcu.addDecimalPoint()
}

const addNumberInputed = () => {
    let operator = ''
    if (event.target.innerText == '÷') {
        operator = '/'
    }else if(event.target.innerText == '×') {
        operator = '*'
    }else {
        operator = event.target.innerText
    }

    const calcu = new Calculator()
    calcu.addNumber(operator)
}

const calculateNumberInputed = () => {
    const calcu = new Calculator()
    calcu.calculateNumber()
}



