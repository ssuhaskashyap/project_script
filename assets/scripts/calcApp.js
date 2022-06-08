const defaultResult = 0;
let currentResult = defaultResult;

function userInputNumber() {
  return parseInt(userInput.value);
}

function add() {
  const enteredNumber = userInputNumber();
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
