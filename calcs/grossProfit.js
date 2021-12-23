// SELECT DOM ELEMENTS
const costInput = document.querySelector('#costInput')
const salesInput = document.querySelector('#salesInput')
const calcButton = document.querySelector('#calcButton')
const resultDisplay = document.querySelector('#resultDisplay')
const resultsHistoryDisplay = document.querySelector('#resultsHistoryDisplay')
const clearHistoryButton = document.querySelector('#clearHistoryButton')
const labelInput = document.querySelector('#labelInput')

let log = []

// CLICK EVENTS
calcButton.addEventListener('click', function() {
  // Calculate
  let grossValue = Math.round(((salesInput.value - costInput.value) + Number.EPSILON) * 100) / 100
  let grossPercent = Math.round(((grossValue / salesInput.value) + Number.EPSILON) * 100) / 100
  let adjustedPercent = grossPercent * 100
  let result = `$${grossValue} / ${adjustedPercent}%`
  // Add Results to Log
  log.push({ label: labelInput.value + ' =', res: result })
  // Display Results
  resultDisplay.innerHTML = result
  resultsHistoryDisplay.innerHTML = ''
  log.forEach(function(value) {
    resultsHistoryDisplay.innerHTML += `<li class="list-group-item"><strong>${value.label} ${value.res}</strong></li>`
  })
})

clearHistoryButton.addEventListener('click', function() {
  log = []
  resultDisplay.innerHTML = ''
  resultsHistoryDisplay.innerHTML = ''
})