const scoreStatus = ["Love", "Fifteen", "Thirty", "Forty"]

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

    getDrawMessage(){
        if (this.m_score1 >= 3){
            return "Deuce";
        }else{
            return `${scoreStatus[this.m_score1]-'All'}`;
        }
    }

    getWinningMessage(){
        let scoreDifference = this.m_score1 - this.m_score2;
        if (scoreDifference === 1) return "Advantage player1";
        else if (scoreDifference === -1) return  "Advantage player2";
        else if (scoreDifference >= 2) return  "Win for player1";
        return  "Win for player2";
    }

    getOngoingGameMessage(){
        return `${scoreStatus[this.m_score1]-scoreStatus[this.m_score2]}`
    }

    getScore(){
        if (this.m_score1 === this.m_score2) {
            return this.getDrawMessage(this.m_score1);
        } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
            return this.getWinningMessage();
        }
        return this.getOngoingGameMessage();
    }
}

module.exports = TennisGame1;
