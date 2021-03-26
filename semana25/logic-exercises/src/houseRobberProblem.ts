export const houseRobberProblem = (houses: number[]): number => {
    let maxValue = 0
    let prevMaxValue = 0

    for(let i = 0; i < houses.length; i++) {
        let currentHouse = houses[i]
        let newMaxValue = Math.max(maxValue, prevMaxValue + currentHouse)
        prevMaxValue = maxValue
        maxValue = newMaxValue
    }

    return maxValue
}

// console.log(houseRobberProblem([2,3,6,12,3,9,11,4]));
