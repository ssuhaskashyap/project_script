const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function userInputNumber() {
  return parseInt(userInput.value);
}
function operationLog(operator, prevResult, inputNumber) {
  const calcDescription = `${prevResult} ${operator} ${inputNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = userInputNumber();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  operationLog('+', initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = userInputNumber();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  operationLog('-', initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = userInputNumber();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  operationLog('*', initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = userInputNumber();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  operationLog('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

