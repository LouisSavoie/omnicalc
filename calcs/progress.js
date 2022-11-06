// SELECT DOM ELEMENTS

// INPUTS
const goalLabelInput = document.querySelector('#goalLabelInput')
const goalQuantityInput = document.querySelector('#goalQuantityInput')
const goalQualityInput = document.querySelector('#goalQualityInput')
const contributionInput = document.querySelector('#contributionInput')
const updateTotalInput = document.querySelector('#updateTotalInput')

// BUTTONS
const setGoalButton = document.querySelector('#setGoalButton')
const contributionButton = document.querySelector('#contributionButton')
const updateTotalButton = document.querySelector('#updateTotalButton')
const resetButton = document.querySelector('#resetButton')

// LABELS
const goalLabel = document.querySelector('#goalLabel')

const totalDollarLabel = document.querySelector('#totalDollarLabel')
const totalQuantityLabel = document.querySelector('#totalQuantityLabel')
const totalQualityLabel = document.querySelector('#totalQualityLabel')

const startDollarLabel = document.querySelector('#startDollarLabel')

const endDollarLabel = document.querySelector('#endDollarLabel')
const endQuantityLabel = document.querySelector('#endQuantityLabel')

// GRAPHICS
const progressBar = document.querySelector('#progressBar')
const progressBarBG = document.querySelector('#progressBarBG')

// DATA
let newData = {
    quantity: 0,
    quality: '',
    total: 0,
    label: ''
}

let data = {
    quantity: 0,
    quality: '',
    total: 0,
    label: ''
}

// FUNCTIONS

// LOCAL STORAGE AND DATA
function getLocalStorage() {
    if (localStorage.getItem('progress') === null) {
        localStorage.progress = JSON.stringify(data)
    } else {
        data = JSON.parse(localStorage.getItem('progress'))
    }
}
  
function saveLocalStorage() {
    localStorage.progress = JSON.stringify(data)
}

function resetData() {
    data = newData
    saveLocalStorage()
}

// LOAD AND UPDATE
function load() {
    getLocalStorage()
    render()
}

function update() {
    saveLocalStorage()
    render()
}

// RENDERING
function render() {
    resetInputs()
    renderBar()
    renderLabels()
}

function resetInputs() {
    goalQuantityInput.value = ''
    goalQualityInput.value = ''
    goalLabelInput.value = ''
    contributionInput.value = ''
    updateTotalInput.value = ''
}

function renderBar() {
    let percent = data.quantity === 0 ? 0 : parseInt((data.total / data.quantity) * 100)
    if (percent > 100) {  
        progressBar.style.setProperty( 'width', '100%')
    } else {
        progressBar.style.setProperty( 'width', `${percent}%`)
    }
    if (percent < 15) {
        progressBarBG.innerText = `${percent}%`
        progressBar.innerText = ''
    } else {
        progressBarBG.innerText = ''
        progressBar.innerText = `${percent}%`
    }
}

function renderLabels() {
    goalLabel.innerText = `${data.label}`
    totalQuantityLabel.innerText = `${data.total}`
    endQuantityLabel.innerText = `${data.quantity}`
    if (data.quality === '$') {
        totalDollarLabel.innerText = '$'
        startDollarLabel.innerText = '$'
        endDollarLabel.innerText = '$'
        totalQualityLabel.innerText = ''
    } else {
        totalQualityLabel.innerText = `${data.quality}`
        totalDollarLabel.innerText = ''
        startDollarLabel.innerText = ''
        endDollarLabel.innerText = ''
    }
}

// EVENT LISTENERS

// BUTTON EVENTS
setGoalButton.addEventListener('click', function() {
    data.quantity = goalQuantityInput.value
    data.quality = goalQualityInput.value
    data.label = goalLabelInput.value
    update()
})

contributionButton.addEventListener('click', function() {
    data.total += parseInt(contributionInput.value)
    update()
})

updateTotalButton.addEventListener('click', function() {
    data.total = parseInt(updateTotalInput.value)
    update()
})

resetButton.addEventListener('click', function() {
    resetData()
    update()
})

load()
