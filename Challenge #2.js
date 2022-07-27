const teamOne = 'Dolphins'
const teamTwo = 'Koalas'


const getResult = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3
}


const dolphinsResult = getResult(99, 99, 99)
const koalasResult = getResult(97, 104, 99)
let over100koalas = koalasResult >= 100
let over100dolphins = dolphinsResult >= 100


if (dolphinsResult > koalasResult && over100dolphins === true) {
    console.log(`${teamOne} wins!!!!`)
} else if (dolphinsResult == koalasResult && koalasResult >= 100 && dolphinsResult >= 100) {
    console.log(`${teamOne} and ${teamTwo} have DRAWN! REMATCH`)
} else if (koalasResult > dolphinsResult && over100koalas === true) {
    console.log(`${teamTwo} wins!!!!`)
} else {
    console.log(`you have not scored over 100, no one wins`)
}




