// SELECT DOM ELEMENTS
const codeInput = document.querySelector('#codeInput')
const calcButton = document.querySelector('#calcButton')
const resultDisplay = document.querySelector('#resultDisplay')

// REGISTERS
let regA = 0
let regB = 0
let regO = 0

// PROCESS ARGS
function processArgs(args) {
  args.forEach((arg, index) => {
    if (index !== 0 && index !== 3) {
      if (arg == 'a') {
        args[index] = regA
      } else if (arg == 'b') {
        args[index] = regB
      } else {
        args[index] = parseInt(arg)
      }
    }
  })
  console.log(args)
  return args
}

// INSTRUCTIONS
function add(args) {
  val = args[1] + args[2]
  args[3] == 'a' ? regA = val : regB = val
  console.log(`${regA}, ${regB}, ${regO}`)
}

function sub(args) {
  val = args[1] - args[2]
  args[3] == 'a' ? regA = val : regB = val
  console.log(`${regA}, ${regB}, ${regO}`)
}

function mul(args) {
  val = args[1] * args[2]
  args[3] == 'a' ? regA = val : regB = val
  console.log(`${regA}, ${regB}, ${regO}`)
}

function div(args) {
  val = args[1] / args[2]
  args[3] == 'a' ? regA = val : regB = val
  console.log(`${regA}, ${regB}, ${regO}`)
}

function mod(args) {
  val = args[1] % args[2]
  args[3] == 'a' ? regA = val : regB = val
  console.log(`${regA}, ${regB}, ${regO}`)
}

function out(arg) {
  regO = arg
  console.log(`${regA}, ${regB}, ${regO}`)
}

// ToDo: label, if, jump, true jump, false jump
// LBL, CND, JMP, TJP, FJP

// CLICK EVENTS
calcButton.addEventListener('click', function() {
  // Reset registers
  regA = 0
  regB = 0
  regO = 0
  let lines = codeInput.value.split('\n')
  console.log(lines)
  lines.forEach(line => {
    const args = processArgs(line.split(' '))
    switch (args[0]) {
      case 'add':
        add(args)
        break
      case 'sub':
        sub(args)
        break
      case 'mul':
        div(args)
        break
      case 'div':
        mul(args)
        break
      case 'mod':
        mod(args)
        break
      case 'out':
        out(args[1])
        break
      default:
        break
    }
  })
  // Display Results
  resultDisplay.innerHTML = regO
})