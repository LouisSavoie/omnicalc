// SELECT DOM ELEMENTS
const codeInput = document.querySelector('#codeInput')
const calcButton = document.querySelector('#calcButton')
const resultDisplay = document.querySelector('#resultDisplay')

// CLICK EVENTS
calcButton.addEventListener('click', function() {
  // Calculate
  result = codeInput.value
  // Display Results
  resultDisplay.innerHTML = result
})