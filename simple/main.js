
var _currentGlobalNumber = '0'
var _previousGlobalNumber = '0'

function changeResult(number) {
    document.getElementById('inputed').innerText = number
}

function clearResult(){
    document.getElementById('inputed').innerText = ''
}

function pushNumber() {
    const num = event.target.innerText
    changeResult(num)
    _currentGlobalNumber = num
}

function clearNumber() {
    clearResult()
    _currentGlobalNumber = '0'
    _previousGlobalNumber = '0'
}

function addNumber() {
    _previousGlobalNumber = document.getElementById('inputed').innerText
}

function caluclateNumber() {
    const calucNum = eval(`${_currentGlobalNumber} + ${_previousGlobalNumber}`)
    changeResult(calucNum)
    _currentGlobalNumber = '0'
    _previousGlobalNumber = '0'
}