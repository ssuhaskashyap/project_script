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

function add() {
  const enteredNumber = userInputNumber();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  displayOperation('+', initialResult, enteredNumber);
  storeLog(enteredNumber, 'ADD', initialResult, currentResult);
}

function subtract() {
  const enteredNumber = userInputNumber();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  displayOperation('-', initialResult, enteredNumber);
  storeLog(enteredNumber, 'SUBTRACT', initialResult, currentResult);
}

function multiply() {
  const enteredNumber = userInputNumber();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  displayOperation('*', initialResult, enteredNumber);
  storeLog(enteredNumber, 'MULTIPLY', initialResult, currentResult);
}

function divide() {
  const enteredNumber = userInputNumber();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  displayOperation('/', initialResult, enteredNumber);
  storeLog(enteredNumber, 'DIVIDE', initialResult, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

