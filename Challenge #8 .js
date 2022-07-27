const printForecast = (arr) => {
    for (let i = 0; i < arr.length; i++)
    console.log(`it is day ${i + 1}: the temp is ${arr[i]}`)
    
}

printForecast([17, 21, 23, 17, 20, 21, 26, 21, 2, 2, 5, 6, 7])

