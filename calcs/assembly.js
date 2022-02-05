// SELECT DOM ELEMENTS
const codeInput = document.querySelector('#codeInput')
const calcButton = document.querySelector('#calcButton')
const resultDisplay = document.querySelector('#resultDisplay')

let lines = []
let marks = {}

// REGISTERS
let regA = 0
let regB = 0
let regO = 0

// PROCESS ARGS
function processArgs(args) {
  if (args[1] == 'mark') {
    args[0] = parseInt(args[0])
  } else if (args.length == 5) {
    args.forEach((arg, index) => {
      if (index !== 1 && index !== 4) {
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
    args.forEach((arg, index) => {
      if (index !== 1 && index !== 3) {
        if (arg == 'a') {
          args[index] = regA
        } else if (arg == 'b') {
          args[index] = regB
        } else {
          args[index] = parseInt(arg)
        }
      }
    })
  }
  return args
}

// INSTRUCTIONS
function math(args) {
  switch (args[1]) {
    case 'addi':
      val = args[2] + args[3]
      break
    case 'subi':
      val = args[2] - args[3]
      break
    case 'muli':
      val = args[2] * args[3]
      break
    case 'divi':
      val = args[2] / args[3]
      break
    case 'modi':
      val = args[2] % args[3]
      break
    default:
      break
  }
  args[4] == 'a' ? regA = val : regB = val
  // console.log(`Math: A:${regA}, B:${regB}, O:${regO}`)
}

function copy(args) {
  args[3] == 'a' ? regA = args[2] : regB = args[2]
  // console.log(`Copy: A:${regA}, B:${regB}, O:${regO}`)
}

function mark(args) {
  marks[args[2]] = args[0]
  // console.log('marks: ' + JSON.stringify(marks))
}

function send(arg) {
  regO = arg
  // console.log(`Send: A:${regA}, B:${regB}, O:${regO}`)
}

// ToDo: test, jump, tjmp, fjmp, rand

// CLICK EVENTS
calcButton.addEventListener('click', function() {
  lines = codeInput.value.split('\n')
  // console.log('lines: ' + lines)
  let i = 1
  lines.forEach(line => {
    line = `${i} ${line}`
    i++
    const args = processArgs(line.split(' '))
    // console.log('args: ' + args)
    switch (args[1]) {
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
      case 'mark':
        mark(args)
        break
      case 'send':
        send(args[2])
        break
      default:
        break
    }
  })
  // Display Results
  resultDisplay.innerHTML = regO
  // Reset
  marks = {}
  regA = 0
  regB = 0
  regO = 0
})