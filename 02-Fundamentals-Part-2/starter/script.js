 'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if(hasDriversLicense) 

console.log(`i can drive!`);



const foodChoice = (grapes, oranges) => {
    const juice = `Juice with ${grapes} grapes & ${oranges} oranges`
    return juice
}

const drink = foodChoice(2, 4)
console.log(drink)



const age = calcAge1(1998)

function calcAge1(birthYear) {
    return 2037 - birthYear
}

console.log(age)



const calcAge1 = function (birthYear) {
    return 2037 - birthYear
}

const age1 = calcAge1(1998)
console.log(age1)

const calcAge1 = (birthYear) => {
    return 2037 - birthYear
}

const age2 = calcAge1(1998)
console.log(age2)

const calcAge1 = birthYear => 2037 - birthYear
const age3 = calcAge1(1998)
console.log(age3)





const yearsUntilRetirment = (birthYear, firstNam1) => {
    const age5 = 2022 - birthYear
    const retirment = 65 - age5
    return `${firstNam1}, you are ${retirment} years away from retirment`
}

const remainingYears = yearsUntilRetirment(1998, `Callum`)
console.log(remainingYears)


function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
  }

  



const callum = {
    firstName: 'callum',
    lastName: 'hall',
    gender: 'male',
    birthYear: 1976,
    colors: ['red', 'blue', 'green'],
    friends: ['callum', 'josh', 'will'],
    hasDriversLicense: false,

    calcAge: function () {
        this.age = 2022 - this.birthYear
        return this
    },

    summary: function() {
        if (this.hasDriversLicense === true) {
        console.log(`${this.firstName} is a ${this.age} old student, and he has a driving licence` )
        } else {
        console.log(`${this.firstName} is a ${this.age} old student, and he has no driving licence` )
        }
    }
}





console.log(callum.calcAge())
console.log(callum['calcAge']())
console.log(callum.summary())

/* 
const wantToKnow = prompt('what are you wanting to know? pick either firstName, lastName, gender, age or colors')
console.log(callum[wantToKnow])

if (callum[wantToKnow]) {
    console.log(callum[wantToKnow])
} else {
    console.log(`please enter correct value`)
}



callum.location = 'macclesfield'
callum['snapchat'] = 'caldov'
console.log(callum)

console.log(callum.firstName + ' has ' + callum.friends.length + ' friends, and his best friend is called ' + (callum['friends'][1]))
console.log(`${callum.firstName} has ${callum.friends.length} friends, and his best friend is called ${callum['friends'][1]}`)



for(let sets = 10; sets <= 0; sets--) {
    console.log(`you are on set ${sets}`)
}



for (let sets = 1; sets <= 100; sets++) {
    console.log(`you are on set ${sets}`)
}


const types = [];


const callumArray = [
    'Callum',
    'Hall',
    2022 - 1998,
    'Recruitment',
    ['Josh', 'Paddy', 'Will']
];

for (let i = 0; i < callumArray.length; i++) {
    console.log(callumArray[i])

types[i] = typeof callumArray[i]

types.push(typeof callumArray[i])
}

console.log(types)

const years = [1991, 2002, 2022, 1998, 1560]
const ages = []

for (let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i])
}


console.log(ages)


const callumArray = [
    'Callum',
    'Hall',
    2022 - 1998,
    'Recruitment',
    ['Josh', 'Paddy', 'Will']
];

for (let i = 0; i < callumArray.length; i++) {
    if (typeof callumArray[i] !== 'string') continue;

    console.log(callumArray[i])
}




const callumArray = [
    'Callum',
    'Hall',
    2022 - 1998,
    'Recruitment',
    ['Josh', 'Paddy', 'Will']
];

for (let i = 0; i < callumArray.length; i++) {
    if (typeof callumArray[i] === 'number') break;

    console.log(callumArray[i])
}


const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const day = []

for (let i = 0; i < 6; i++) {
    console.log(`What day of the week is it? It is ${daysOfWeek[i]}`)

    day.push(daysOfWeek[i])

console.log(day)
}

for (set = 1; set <= 10; set++) {
    console.log(`you are on set ${set}`)
}

const callumArray = [
    'Callum',
    'Hall',
    2022 - 1998,
    'Recruitment',
    ['Josh', 'Paddy', 'Will']
];

for (let i = callumArray.length - 1; i >= 0; i--) {
    console.log(callumArray[i])
}


for(let sets = 10; sets <= 0; sets--) {
    console.log(`you are on set ${sets}`)
}


for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`starting exercise ${exercise}`)

    for (let rep = 1; rep < 6; rep++) {
        console.log(`lifting weights repetition ${rep}`)
    }
}


let exercise = 1;

while(exercise < 4) {
    console.log(`starting exercise ${exercise}`)
    exercise++
}

*/


let diceRoll = Math.trunc(Math.random() * 6 + 1)

while (diceRoll !== 6) {
    console.log(`you have rolled ${diceRoll}`)
    diceRoll = Math.trunc(Math.random() * 6 + 1)
    if (diceRoll === 6) {
        console.log(`congrats, you rolled a ${diceRoll}`)
    }
}
