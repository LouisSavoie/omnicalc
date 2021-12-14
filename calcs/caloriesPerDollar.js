// SELECT DOM ELEMENTS
const priceInput = document.querySelector('#priceInput')
const caloriesInput = document.querySelector('#caloriesInput')
const servingsInput = document.querySelector('#servingsInput')
const taxCheckbox = document.querySelector('#taxCheckbox')
const calcButton = document.querySelector('#calcButton')
const resultDisplay = document.querySelector('#resultDisplay')
const resultsHistoryDisplay = document.querySelector('#resultsHistoryDisplay')
const clearHistoryButton = document.querySelector('#clearHistoryButton')
const labelInput = document.querySelector('#labelInput')

let log = []

// CLICK EVENTS
calcButton.addEventListener('click', function() {
  // Adjust Price if Tax
  let adjustedPrice
  taxCheckbox.checked == true ? adjustedPrice = Math.round(((priceInput.value * 1.06) + Number.EPSILON) * 100) / 100 : adjustedPrice = priceInput.value
  // Adjust Servings if blank
  let adjustedServings
  servingsInput.value == '' ? adjustedServings = 1 : adjustedServings = servingsInput.value
  // Calculate
  let result = Math.floor((caloriesInput.value * adjustedServings) / adjustedPrice)
  // Add Results to Log
  log.push({ label: labelInput.value, cals:caloriesInput.value, servs: adjustedServings, price: adjustedPrice, res: result })
  // Display Results
  resultDisplay.innerHTML = result
  resultsHistoryDisplay.innerHTML = ''
  log.forEach(function(value) {
    resultsHistoryDisplay.innerHTML += `<li class="list-group-item"><strong>${value.label}</strong> (${value.cals}*${value.servs})/${value.price} = <strong>${value.res}</strong></li>`
  })
})

clearHistoryButton.addEventListener('click', function() {
  log = []
  resultDisplay.innerHTML = ''
  resultsHistoryDisplay.innerHTML = ''
})