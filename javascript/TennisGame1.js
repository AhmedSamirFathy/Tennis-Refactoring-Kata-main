const drawStatus = ["Love-All", "Fifteen-All", "Thirty-All"]

class TennisGame1{
    constructor(player1Name, player2Name) {
        this.m_score1 = 0;
        this.m_score2 = 0;
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    }

    wonPoint(playerName) {
        if (playerName === "player1")
            this.m_score1 += 1;
        else
            this.m_score2 += 1;
    }

    getDrawMessage(score){
        if (score >= 3){
            return "Deuce"
        }else{
            return drawStatus[score]
        }
    }

    getWinningMessage(){
        let scoreDifference = this.m_score1 - this.m_score2;
        if (scoreDifference === 1) return "Advantage player1";
        else if (scoreDifference === -1) return  "Advantage player2";
        else if (scoreDifference >= 2) return  "Win for player1";
        return  "Win for player2";
    }

    getScore(){
        let finalGameResult = "";
        let tempGameResult = 0;

        if (this.m_score1 === this.m_score2) {
            this.getDrawMessage(this.m_score1);

        } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
            this.getWinningMessage();
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
    }
}

module.exports = TennisGame1;
