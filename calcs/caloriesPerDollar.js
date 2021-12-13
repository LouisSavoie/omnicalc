// SELECT DOM ELEMENTS
const priceInput = document.querySelector('#priceInput');
const caloriesInput = document.querySelector('#caloriesInput');
const servingsInput = document.querySelector('#servingsInput');
const taxCheckbox = document.querySelector('#taxCheckbox');
const calcButton = document.querySelector('#calcButton');
const resultDisplay = document.querySelector('#resultDisplay')

// CLICK EVENTS
calcButton.addEventListener('click', function() {
  if (taxCheckbox.checked == true) {
    resultDisplay.innerHTML = Math.floor((caloriesInput.value * servingsInput.value) / (priceInput.value * 1.06))
  } else {
    resultDisplay.innerHTML = Math.floor((caloriesInput.value * servingsInput.value) / priceInput.value)
  }
})