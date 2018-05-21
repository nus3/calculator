
var _inputGlobalNumber = ''
var _inputedGlobalNumber = ''


function pushNumber() {
    document.getElementById('inputed').innerText = ''

    const num = event.target.innerText
    document.getElementById('inputed').innerText = num
    _inputGlobalNumber = num
}

function clearNumber() {
    document.getElementById('inputed').innerText = '0'
    _inputGlobalNumber = ''
    _inputedGlobalNumber = ''
}

function addNumber() {
    _inputedGlobalNumber = document.getElementById('inputed').innerText
}

function caluclateNumber() {
    const calucNum = eval(`${_inputGlobalNumber} + ${_inputedGlobalNumber}`)
    document.getElementById('inputed').innerText = calucNum
    _inputGlobalNumber = ''
    _inputedGlobalNumber = ''
}