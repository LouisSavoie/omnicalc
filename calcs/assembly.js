// SELECT DOM ELEMENTS
const codeInput = document.querySelector('#codeInput')
const calcButton = document.querySelector('#calcButton')
const resultDisplay = document.querySelector('#resultDisplay')

// REGISTERS
let regA = 0
let regB = 0
let regO = 0

// MNEMONICS
function add(fst, snd, reg) {
  val = fst + snd
  reg == 'a' ? regA = val : regB = val
  console.log(`${regA}, ${regB}, ${regO}`)
}

function out(vr) {
  if (vr == 'a') {
    regO = regA
  } else if (vr == 'b') {
    regO = regB
  } else {
    regO = vr
  }
  console.log(`${regA}, ${regB}, ${regO}`)
}

// CLICK EVENTS
calcButton.addEventListener('click', function() {
  // Reset registers
  regA = 0
  regB = 0
  regO = 0
  let lines = codeInput.value.split('\n')
  console.log(lines)
  lines.forEach(line => {
    const parts = line.split(' ')
    switch (parts[0]) {
      case 'add':
        add(parts[1], parts[2], parts[3])
        break
      case 'out':
        out(parts[1])
        break
      default:
        break
    }
  })
  // Display Results
  resultDisplay.innerHTML = regO
})