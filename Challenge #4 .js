const calcAverage = (game1, game2, game3) => {
    const average = (game1 + game2+ game3) / 3
    return average
}
const averageScoreDolphins = (calcAverage(85, 54, 41))
const averageScoreKoalas = (calcAverage(23, 34, 27))

console.log(averageScoreDolphins)
console.log(averageScoreKoalas)

const checkWinner = (averageScoreDolphins, averageScoreKoalas ) => {

    if (averageScoreDolphins > averageScoreKoalas && (averageScoreDolphins >= 2 * averageScoreKoalas)) {
        console.log(`Dolphins wins with ${averageScoreDolphins} points, compared to Koalas ${averageScoreKoalas} points`)
    } else if (averageScoreDolphins < averageScoreKoalas && (averageScoreKoalas >= 2 * averageScoreDolphins)) {
        console.log(`Koalas wins with ${averageScoreKoalas} points, compared to Dolphins ${averageScoreDolphins} points`)
    } else {
        console.log(`no body wins as Dolphins scored ${averageScoreDolphins} and Koalas scored ${averageScoreKoalas} which shows no team has scored over double the other`)
    }
}



console.log(checkWinner(averageScoreDolphins, averageScoreKoalas))

