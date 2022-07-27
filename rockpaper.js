
/*
const playerChoice = 'rock'
const computerChoice = 'rock'

switch(playerChoice, computerChoice) {
    case playerChoice === 'rock' && computerChoice === 'rock':
    console.log(`draw`)
    break;
    case playerChoice === 'scissors' && computerChoice === 'scissors':
    console.log(`draw`)
    break;
    case playerChoice === 'paper' && computerChoice === 'paper':
    console.log(`draw`)
    break;
    case playerChoice === 'paper' && computerChoice === 'rock':
    console.log(`paper wins`)
    break;
    case playerChoice === 'paper' && computerChoice === 'scissors':
    console.log(`scissors wins`)
    break;
    case playerChoice === 'scissors' && computerChoice === 'rock':
    console.log(`rock wins`)
    break;
    default:
    console.log(`enter correct option`)
}

*/





const randomNumber = (Math.trunc(Math.random() * 3))

const generator = () => {
if (randomNumber == 0) {
    return 'scissors'
} else if (randomNumber == 1) {
    return 'rock'
} else if (randomNumber == 2) {
    return 'paper'
}
}

const playerChoice = prompt(`enter your choice; rock, paper or scissors`)
const computerChoice = generator(randomNumber)


if (playerChoice == 'scissors' && computerChoice == 'scissors') {
    console.log(`draw`)
} else if (playerChoice == 'paper' && computerChoice == 'paper') {
    console.log(`draw`)
} else if (playerChoice == 'rock' && computerChoice == 'rock') {
    console.log(`draw`)
} else if (playerChoice == 'scissors' && computerChoice == 'paper') {
    console.log(`scissors wins`)
} else if (playerChoice == 'scissors' && computerChoice == 'rock') {
    console.log(`rock wins`)
} else if (playerChoice == 'paper' && computerChoice == 'rock') {
    console.log(`paper wins`)
} else if (computerChoice == 'paper' && playerChoice == 'paper') {
    console.log(`draw`)
} else if (computerChoice == 'rock' && playerChoice == 'rock') {
    console.log(`draw`)
} else if (computerChoice == 'scissors' && playerChoice == 'paper') {
    console.log(`scissors wins`)
} else if (computerChoice == 'scissors' && playerChoice == 'rock') {
    console.log(`rock wins`)
} else if (computerChoice == 'paper' && playerChoice == 'rock') {
    console.log(`paper wins`)
} else if (computerChoice == 'paper' && playerChoice == 'rock') {
    console.log(`paper wins`)
} else {
    console.log(`please enter correct option`)
}


for (let i = 0; i <= 1000; i++) {
    console.log(i)
} 

function checkEquality(a, b) {
    if (typeof(a) === 'string' && typeof(b) === 'string') {
          return true
      } else if (typeof(a) === 'number' && typeof(b) === 'number') {
          return true
      } else if (typeof(a) === 'undefined' && typeof(b) === 'undefined') {
          return true 
      } else if (typeof(a) === NaN && typeof(b) === NaN) {
          return false
      } else if (typeof(a) === 'null' && typeof(b) === 'null') {
        return true
      } else if (typeof(a) === 'true' && typeof(b) === 'true') {
        return true
      } else if (typeof(a) === 'false' && typeof(b) === 'false') {
        return true
    } else {
        return false
    }
}

/*