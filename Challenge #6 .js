const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi = (this.mass / this.height ** 2) 
        return this.bmi 
    }
}

console.log(mark.calcBMI())



const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.bmi = math.floor()(this.mass / this.height ** 2)
        return this.bmi 
}

}

console.log(john.calcBMI())

if (john.bmi < mark.bmi) {
    console.log(`${mark.firstName} has a higher bmi of ${mark.bmi} compared to John's which is ${john.bmi}`)
} else {
    console.log(`${john.firstName} has a higher bmi of ${john.bmi} compared to John's which is ${mark.bmi}`)
}