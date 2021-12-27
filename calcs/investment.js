// SELECT DOM ELEMENTS
const initialInput = document.querySelector('#initialInput')
const contributionsInput = document.querySelector('#contributionsInput')
// const frequencyInput = document.querySelector('#frequencyInput')
const interestInput = document.querySelector('#interestInput')
const lengthInput = document.querySelector('#lengthInput')
const percentInput = document.querySelector('#percentInput')
const labelInput = document.querySelector('#labelInput')
const calcButton = document.querySelector('#calcButton')
const resultDisplay = document.querySelector('#resultDisplay')
const percentDisplay = document.querySelector('#percentDisplay')
const resultsHistoryDisplay = document.querySelector('#resultsHistoryDisplay')
const clearHistoryButton = document.querySelector('#clearHistoryButton')

let log = []

// CLICK EVENTS
calcButton.addEventListener('click', function() {
  const adjustedInterest = +interestInput.value * .01
  // Calculate
  let result = +initialInput.value
  for (let i = +lengthInput.value; i > 0; i--) {
    result += +contributionsInput.value
    result += result * +adjustedInterest
  }
  result = Math.round((result + Number.EPSILON) * 100) / 100
  percent = Math.round(((result * (percentInput.value * .01)) + Number.EPSILON) * 100) / 100
  // Add Results to Log
  log.push({
    label: labelInput.value,
    initial: initialInput.value,
    contributions: contributionsInput.value,
    length: lengthInput.value,
    res: result,
    percent: percentInput.value,
    percentRes: percent
  })
  // Display Results
  resultDisplay.innerHTML = result
  percentDisplay.innerHTML = `${percentInput.value}% = ${percent}`
  resultsHistoryDisplay.innerHTML = ''
  log.forEach(function(value) {
    resultsHistoryDisplay.innerHTML += `<li class="list-group-item"><strong>${value.label}</strong> $${value.initial} + $${value.contributions} for ${value.length} years @ ${interestInput.value}% = <strong>$${value.res}</strong><br>${value.percent}% = ${value.percentRes}</li>`
  })
})

clearHistoryButton.addEventListener('click', function() {
  log = []
  resultDisplay.innerHTML = ''
  resultsHistoryDisplay.innerHTML = ''
})