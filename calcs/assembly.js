// SELECT DOM ELEMENTS
const codeInput = document.querySelector('#codeInput')
const calcButton = document.querySelector('#calcButton')
const resultDisplay = document.querySelector('#resultDisplay')

// PROGRAM DATA
let program = []
let marks = {}

// REGISTERS
let regA = 0
let regB = 0
let regO = 0

// PARSING AND EXECUTION
function parseProgram(input) {
  let lines = input.toLowerCase().split('\n')
  lines = numberLines(lines)
  // console.log('post numberLines: ' + lines)
  lines.forEach((line) => {
    line = line.split(' ')
    // console.log('line post split: ' + line)
    line = parseArgs(line)
    // console.log('line post parseArgs: ' + line)
    program.push(line)
    if (line[1] == 'mark') {
      mark(line)
    }
  })
  // console.log('post parseArgs: ' + program)
}

function numberLines(lines) {
  let i = 1
  lines.forEach((line, index) => {
    lines[index] = `${index} ${line}`
    i++
  })
  return lines
}

function parseArgs(line) {
  if (line[1] == 'mark' || line[1] == 'jump') {
    line[0] = parseInt(line[0])
  } else if (line.length == 5) {
    line.forEach((arg, index) => {
      if (index != 1 && index != 4 && arg != 'a' && arg != 'b') {
        line[index] = parseInt(arg)
      }
    })
  } else {
    line.forEach((arg, index) => {
      if (index != 1 && index != 3 && arg != 'a' && arg != 'b') {
        line[index] = parseInt(arg)
      }
    })
  }
  return line
}

function runProgram(start) {
  programRange = program.slice(start)
  programRange.every((line) => {
    line = parseRegisters(line)
    // console.log('post parseRegisters line: ' + line)
    executeLine(line)
    if (line[1] == 'jump') {
      return false
    }
    return true
  })
}

function parseRegisters(line) {
  if (line.length == 5) {
    line.forEach((arg, index) => {
      if (index !== 1 && index !== 4) {
        if (arg == 'a') {
          line[index] = regA
        } else if (arg == 'b') {
          line[index] = regB
        }
      }
    })
  } else {
    line.forEach((arg, index) => {
      if (index !== 1 && index !== 3) {
        if (arg == 'a') {
          line[index] = regA
        } else if (arg == 'b') {
          line[index] = regB
        }
      }
    })
  }
  return line
}

function executeLine(line) {
  switch (line[1]) {
    case 'addi':
    case 'subi':
    case 'muli':
    case 'divi':
    case 'modi':
      math(line)
      break
    case 'copy':
      copy(line)
      break
    case 'send':
      send(line[2])
      break
    case 'jump':
      jump(line)
      break
    default:
      break
  }
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

function jump(args) {
  const jumpPointer = marks[args[2]]
  // console.log('jumpPointer: ' + jumpPointer)
  runProgram(jumpPointer + 1)
}

function send(arg) {
  regO = arg
  // console.log(`Send: A:${regA}, B:${regB}, O:${regO}`)
}

// ToDo: test, jump, tjmp, fjmp, rand

// CLICK EVENTS
calcButton.addEventListener('click', function() {
  parseProgram(codeInput.value)
  // console.log('Program' + JSON.stringify(program))
  runProgram(0)
  // Display Results
  resultDisplay.innerHTML = regO
  // Reset
  program = []
  marks = {}
  regA = 0
  regB = 0
  regO = 0
})