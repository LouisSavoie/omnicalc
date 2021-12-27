// SELECT DOM ELEMENTS
const investmentInput = document.querySelector('#investmentInput')
const timeFrameInput = document.querySelector('#timeFrameInput')
const returnInput = document.querySelector('#returnInput')
const labelInput = document.querySelector('#labelInput')
const calcButton = document.querySelector('#calcButton')
const resultDisplay = document.querySelector('#resultDisplay')
const resultsHistoryDisplay = document.querySelector('#resultsHistoryDisplay')
const clearHistoryButton = document.querySelector('#clearHistoryButton')

let log = []

// CLICK EVENTS
calcButton.addEventListener('click', function() {
  // Calculate
  let i = 0
  let returned = 0
  while (returned < +investmentInput.value) {
    returned += +returnInput.value
    i++
  }
  // Add Results to Log
  log.push({ label: labelInput.value, investment: investmentInput.value, timeFrame: timeFrameInput.value.slice(0, -1), return: returnInput.value, res: i + ' ' + timeFrameInput.value })
  // Display Results
  resultDisplay.innerHTML = i + ' ' + timeFrameInput.value
  resultsHistoryDisplay.innerHTML = ''
  log.forEach(function(value) {
    resultsHistoryDisplay.innerHTML += `<li class="list-group-item"><strong>${value.label}</strong> ${value.investment} @ ${value.return}/${value.timeFrame} = <strong>${value.res}</strong></li>`
  })
})

clearHistoryButton.addEventListener('click', function() {
  log = []
  resultDisplay.innerHTML = ''
  resultsHistoryDisplay.innerHTML = ''
})