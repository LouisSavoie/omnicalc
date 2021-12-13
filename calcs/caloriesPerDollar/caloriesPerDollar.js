// SELECT DOM ELEMENTS
const priceInput = document.querySelector('#priceInput');
const caloriesInput = document.querySelector('#caloriesInput');
const calcButton = document.querySelector('#calcButton');
const resultDisplay = document.querySelector('#resultDisplay')

// CLICK EVENTS
calcButton.addEventListener('click', function() {
  resultDisplay.innerHTML = (caloriesInput.value / priceInput.value)
})