const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from the input field
function userInputNumber() {
  return parseInt(userInput.value);
}

// Displays the operation that the calculator performed
function displayOperation(operator, prevResult, inputNumber) {
  const calcDescription = `${prevResult} ${operator} ${inputNumber}`;
  outputResult(currentResult, calcDescription); // From the vendor.js file
}

// Stores the logs from every operation
function storeLog(inpNum, operand, origRes, endRes) {
  const logEntry = {
    number: inpNum,
    operation: operand,
    origResult: origRes,
    endResult: endRes
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calcResult(calculationType) {
  if (calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE' ||
    !enteredNumber
  ) {
    return;
  }
  const enteredNumber = userInputNumber();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (calculationType === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }
  displayOperation(mathOperator, initialResult, enteredNumber);
  storeLog(enteredNumber, calculationType, initialResult, currentResult);
}

function add() {
  calcResult('ADD');
}

function subtract() {
  calcResult('SUBTRACT');
}

function multiply() {
  calcResult('MULTIPLY');
}

function divide() {
  calcResult('DIVIDE')
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

