
const billValue = 430

const tip20 = billValue * 0.20
const tip15 = billValue * 0.15

const totalTip = billValue >= 50 && billValue <= 300 ? (tip15) : (tip20)


console.log(`the bill was ${billValue}, the tip was ${totalTip} and the total value was ${billValue + totalTip}.`)