
const markMass = 78
const markHeight = 1.69

const johnMass = 92
const johnHeight = 1.76

let markBMI = (markMass / markHeight ** 2)
let johnBMI = (johnMass / johnHeight ** 2)
console.log(markBMI)
console.log(johnBMI)

const markHigherBMI = (markBMI > johnBMI)
console.log(markHigherBMI)


if (markBMI > johnBMI) {
    console.log('Mark has a larger BMI at ' + markBMI)
} else {
        console.log('John has a larger BMI at ' + johnBMI)
    }



let a = 5

a-= 6

console.log(a)


const area = 123

console.log(area !== 1)
