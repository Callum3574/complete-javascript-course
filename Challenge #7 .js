const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

const tips = []
const totals = []


for (i = 0; i < bill.length; i++) {

const calcTip = (bill) => {
    if (bill >= 300 || bill <= 50) {
        return bill * 0.20
    } else if (bill < 300 || bill > 50) {
        return bill * 0.15
    }
}
tips.push(calcTip(bill[i]))
totals.push(calcTip(bill[i]) + bill[i])

console.log(`the total tip is: ${tips[i]}`)
console.log(`the total is: ${totals[i]}`)
}

let sum = 0
const calcAverage = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum / arr.length  ;  
}

console.log(calcAverage(tips))