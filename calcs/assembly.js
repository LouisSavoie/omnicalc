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
  return args
}

// INSTRUCTIONS
function addi(args) {
  val = args[1] + args[2]
  args[3] == 'a' ? regA = val : regB = val
}

function subi(args) {
  val = args[1] - args[2]
  args[3] == 'a' ? regA = val : regB = val
}

function muli(args) {
  val = args[1] * args[2]
  args[3] == 'a' ? regA = val : regB = val
}

function divi(args) {
  val = args[1] / args[2]
  args[3] == 'a' ? regA = val : regB = val
}

function modi(args) {
  val = args[1] % args[2]
  args[3] == 'a' ? regA = val : regB = val
}

function send(arg) {
  regO = arg
}

// ToDo: label, if, jump, true jump, false jump

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
      case 'addi':
        addi(args)
        break
      case 'subi':
        subi(args)
        break
      case 'muli':
        divi(args)
        break
      case 'divi':
        muli(args)
        break
      case 'modi':
        modi(args)
        break
      case 'send':
        send(args[1])
        break
      default:
        break
    }
  })
  // Display Results
  resultDisplay.innerHTML = regO
})