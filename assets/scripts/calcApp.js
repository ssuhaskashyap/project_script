const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
  currentResult = currentResult + Number(userInput.value);
  outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);
