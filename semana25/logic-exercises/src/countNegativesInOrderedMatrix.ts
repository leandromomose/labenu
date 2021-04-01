type Matrix = number[][]

export const countNegativesInOrderedMatrix = (matrix: Matrix): number => {
    const [row, column] = [matrix.length, matrix[0].length]

    let negatives = 0
    let i = row - 1
    let j = 0

    while(j < column && i >= 0){
        if(matrix[i][j] < 0){
            negatives += column - j
            i--
        } else {
            j++
        }
    }

    return negatives
}

// console.log(countNegativesInOrderedMatrix([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))