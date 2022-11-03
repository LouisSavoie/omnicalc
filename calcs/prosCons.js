// SELECT DOM ELEMENTS
const prosForm = document.querySelector('#pros-form')
const prosInput = document.querySelector('#pros-input')
const prosButton = document.querySelector('#pros-button')
const prosList = document.querySelector('#pros')
const prosCounter = document.querySelector('#pros-counter')
const consForm = document.querySelector('#cons-form')
const consInput = document.querySelector('#cons-input')
const consButton = document.querySelector('#cons-button')
const consList = document.querySelector('#cons')
const consCounter = document.querySelector('#cons-counter')

// DATA
let pros = {}
let cons = {}

// FUNCTIONS

// EVENTS
prosForm.addEventListener('submit', function(event) {
  pros[prosInput.value.toLowerCase()] = `<li class="list-group-item">${prosInput.value}</li>`
  let prosHTML = ''
  for ([key, pro] of Object.entries(pros)) {
    prosHTML += pro
  }
  prosList.innerHTML = prosHTML
  prosCounter.innerText = Object.keys(pros).length
  prosInput.value = ''
  event.preventDefault()
})

consForm.addEventListener('submit', function(event) {
  cons[consInput.value.toLowerCase()] = `<li class="list-group-item">${consInput.value}</li>`
  let consHTML = ''
  for ([key, con] of Object.entries(cons)) {
    consHTML += con
  }
  consList.innerHTML = consHTML
  consCounter.innerText = Object.keys(cons).length
  consInput.value = ''
  event.preventDefault()
})
