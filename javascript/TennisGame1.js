class TennisGame1{
    constructor(player1Name, player2Name) {
        this.m_score1 = 0;
        this.m_score2 = 0;
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    }
}

let TennisGame = function(player1Name, player2Name) {
    this.m_score1 = 0;
    this.m_score2 = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame.prototype.wonPoint = function(playerName) {
    if (playerName === "player1")
        this.m_score1 += 1;
    else
        this.m_score2 += 1;
};

TennisGame.prototype.getScore = function() {
    let finalGameResult = "";
    let tempGameResult = 0;
    if (this.m_score1 === this.m_score2) {
        switch (this.m_score1) {
            case 0:
                finalGameResult = "Love-All";
                break;
            case 1:
                finalGameResult = "Fifteen-All";
                break;
            case 2:
                finalGameResult = "Thirty-All";
                break;
            default:
                finalGameResult = "Deuce";
                break;
        }
    } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
        let minusResult = this.m_score1 - this.m_score2;
        if (minusResult === 1) finalGameResult = "Advantage player1";
        else if (minusResult === -1) finalGameResult = "Advantage player2";
        else if (minusResult >= 2) finalGameResult = "Win for player1";
        else finalGameResult = "Win for player2";
    } else {
        for (let i = 1; i < 3; i++) {
            if (i === 1) tempGameResult = this.m_score1;
            else {
                finalGameResult += "-";
                tempGameResult = this.m_score2;
            }
            switch (tempGameResult) {
                case 0:
                    finalGameResult += "Love";
                    break;
                case 1:
                    finalGameResult += "Fifteen";
                    break;
                case 2:
                    finalGameResult += "Thirty";
                    break;
                case 3:
                    finalGameResult += "Forty";
                    break;
            }
        }
    }
    return finalGameResult;
};

if (typeof window === "undefined") {
    module.exports = TennisGame;
}