// SELECT DOM ELEMENTS
const initialInput = document.querySelector('#initialInput')
// const additionalInput = document.querySelector('#additionalInput')
// const frequencyInput = document.querySelector('#frequencyInput')
const interestInput = document.querySelector('#interestInput')
const lengthInput = document.querySelector('#lengthInput')
// const percentInput = document.querySelector('#percentInput')
const labelInput = document.querySelector('#labelInput')
const calcButton = document.querySelector('#calcButton')
const resultDisplay = document.querySelector('#resultDisplay')
const resultsHistoryDisplay = document.querySelector('#resultsHistoryDisplay')
const clearHistoryButton = document.querySelector('#clearHistoryButton')

let log = []

// CLICK EVENTS
calcButton.addEventListener('click', function() {
  const adjustedInterest = interestInput.value * .01
  // Calculate
  // P principal * (1 + (r interest rate / n number of times interest compounds per t)) * (n * t time) = A amount
  let result = Math.round(((initialInput.value * (1 + (adjustedInterest / 1)) ** (1 * lengthInput.value)) + Number.EPSILON) * 100) / 100
  // Add Results to Log
  log.push({ label: labelInput.value, initial:initialInput.value, length: lengthInput.value, res: result })
  // Display Results
  resultDisplay.innerHTML = result
  resultsHistoryDisplay.innerHTML = ''
  log.forEach(function(value) {
    resultsHistoryDisplay.innerHTML += `<li class="list-group-item"><strong>${value.label}</strong> $${value.initial} for ${value.length} years @ ${interestInput.value}% = <strong>$${value.res}</strong></li>`
  })
})

clearHistoryButton.addEventListener('click', function() {
  log = []
  resultDisplay.innerHTML = ''
  resultsHistoryDisplay.innerHTML = ''
})