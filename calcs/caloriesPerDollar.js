// SELECT DOM ELEMENTS
const priceInput = document.querySelector('#priceInput');
const caloriesInput = document.querySelector('#caloriesInput');
const servingsInput = document.querySelector('#servingsInput');
const taxCheckbox = document.querySelector('#taxCheckbox');
const calcButton = document.querySelector('#calcButton');
const resultDisplay = document.querySelector('#resultDisplay')
const resultsHistoryDisplay = document.querySelector('#resultsHistoryDisplay')

const log = []

// CLICK EVENTS
calcButton.addEventListener('click', function() {
  // Adjust Price if Tax
  let ifTaxPrice = 0
  if (taxCheckbox.checked == true) {
    ifTaxPrice = Math.round(((priceInput.value * 1.06) + Number.EPSILON) * 100) / 100
  } else {
    ifTaxPrice = priceInput.value
  }
  // Calculate
  let result = Math.floor((caloriesInput.value * servingsInput.value) / ifTaxPrice)
  // Add Results to Log
  log.push({ cals:caloriesInput.value, servs: servingsInput.value, price: ifTaxPrice, res: result })
  // Display Results
  resultDisplay.innerHTML = result
  resultsHistoryDisplay.innerHTML = ''
  log.forEach(function(value) {
    resultsHistoryDisplay.innerHTML += `<li class="list-group-item">(${value.cals}*${value.servs})/${value.price} = <strong>${value.res}</strong></li>`
  })
})