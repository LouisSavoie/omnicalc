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
  if (args.length == 4) {
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
  } else {
    if (args[1] == 'a') {
      args[1] = regA
    } else if (args[1] == 'b') {
      args[1] = regB
    } else {
      args[1] = parseInt(args[1])
    }
  }
  return args
}

// INSTRUCTIONS
function math(args) {
  switch (args[0]) {
    case 'addi':
      val = args[1] + args[2]
      break
    case 'subi':
      val = args[1] - args[2]
      break
    case 'muli':
      val = args[1] * args[2]
      break
    case 'divi':
      val = args[1] / args[2]
      break
    case 'modi':
      val = args[1] % args[2]
      break
    default:
      break
  }
  args[3] == 'a' ? regA = val : regB = val
  console.log(`Math: A:${regA}, B:${regB}, O:${regO}`)
}

function copy(args) {
  args[2] == 'a' ? regA = args[1] : regB = args[1]
  // console.log(`Copy: A:${regA}, B:${regB}, O:${regO}`)
}

function send(arg) {
  regO = arg
  console.log(`Send: A:${regA}, B:${regB}, O:${regO}`)
}

// ToDo: mark, test, jump, tjmp, fjmp, copy, rand

// CLICK EVENTS
calcButton.addEventListener('click', function() {
  // Reset registers
  regA = 0
  regB = 0
  regO = 0
  let lines = codeInput.value.split('\n')
  // console.log(lines)
  lines.forEach(line => {
    const args = processArgs(line.split(' '))
    console.log(args)
    switch (args[0]) {
      case 'addi':
      case 'subi':
      case 'muli':
      case 'divi':
      case 'modi':
        math(args)
        break
      case 'copy':
        copy(args)
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