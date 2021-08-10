class TicTacToe {
    constructor() {
        this.matrix = [[null,null,null,],
                       [null,null,null,],
                       [null,null,null,]]
        this.currentPlayer = 'x'  
        this.winner = null      
    }

    getCurrentPlayerSymbol() {
        //should return x or o
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        //should properly update class state (change current player, update marks storage etc.)
        this.currentPlayer = (this.currentPlayer === 'x') ? 'o' : 'x';
        this.matrix[rowIndex][columnIndex] = this.currentPlayer;
        return 
    }

    isFinished() {
        //should return true if game is finished (e.g. there is a winner or it is a draw)
        return (this.winner !== null || this.isDraw() === true) ? true : false
    }

    getWinner() {
        //should return winner symbol (x or o) or null if there is no winner yet
        if (
            this.matrix[0][0] == this.currentPlayer && this.matrix[0][1] == this.currentPlayer && this.matrix[0][2] == this.currentPlayer
            || this.matrix[1][0] == this.currentPlayer && this.matrix[1][1] == this.currentPlayer && this.matrix[1][2] == this.currentPlayer
            || this.matrix[2][0] == this.currentPlayer && this.matrix[2][1] == this.currentPlayer && this.matrix[2][2] == this.currentPlayer
            || this.matrix[0][0] == this.currentPlayer && this.matrix[1][1] == this.currentPlayer && this.matrix[2][2] == this.currentPlayer
            || this.matrix[2][0] == this.currentPlayer && this.matrix[1][1] == this.currentPlayer && this.matrix[0][2] == this.currentPlayer
            || this.matrix[0][0] == this.currentPlayer && this.matrix[1][0] == this.currentPlayer && this.matrix[2][0] == this.currentPlayer
            || this.matrix[0][1] == this.currentPlayer && this.matrix[1][1] == this.currentPlayer && this.matrix[2][1] == this.currentPlayer
            || this.matrix[0][2] == this.currentPlayer && this.matrix[1][2] == this.currentPlayer && this.matrix[2][2] == this.currentPlayer
        ) {
            this.winner = this.currentPlayer;
            return this.winner;
        }
        else {return null};
    }

    noMoreTurns() {
        //should return true if there is no more fields to place a x or o
        return (this.matrix.filter(item => item.some((mark) => mark === null)).length !== 0) ? false : true
    }

    isDraw() {
        //should return true if there is no more turns and no winner
        return (this.noMoreTurns() === true && this.winner === null) ? true : false

    }

    getFieldValue(rowIndex, colIndex) {
    //should return matrix[row][col] value (if any) or null
    let value = this.matrix[rowIndex][colIndex];
    return value
    }
}

module.exports = TicTacToe;



  
  
   