class Game {
    constructor() {
        this.gameSummary = {
            number: 0,
            wins: 0,
            losses: 0,
            draws: 0
        }
    
        this.playerHand = '';
        this.aiHand = '';

        this.hands = document.querySelectorAll('.select img')
        this.hands.forEach((hand) => {
            hand.addEventListener('click', this.handSelection.bind(this))
        })
        document.querySelector('.start').addEventListener('click', () => this.letsPlay());
        
    }
    handSelection(event){
        this.playerHand = event.target.dataset.option;
        this.hands.forEach(hand => hand.style.boxShadow = '')
        event.target.style.boxShadow = '0 0 0 4px yellow';
    }

    generateAiHand(){
        return this.hands[Math.floor(Math.random() * this.hands.length)].dataset.option;
    }
    

    checkResults(player, ai) {
        if(player === ai){
            return 'remis';
        } else if ((player  === 'kamień' && ai === 'nożyczki') ||
            (player === 'nożyczki' && ai === 'papier') ||
            (player === 'papier' && ai === 'kamień')
        ) {
            return 'win';
        } else {
            return 'lost'
        }
        
    }

    updateSummary(player, ai, result) {
        document.querySelector('.numbers span').textContent = ++this.gameSummary.number;
        document.querySelector('[data-summary="your-choice"]').textContent = player;
        document.querySelector('[data-summary="ai-choice"]').textContent = ai;
        let whoWin = document.querySelector('[data-summary="who-win"]');

        switch(result) {
            case 'remis': 
            document.querySelector('.draws span').textContent = ++this.gameSummary.draws;
            whoWin.textContent = 'remis :\\';
            whoWin.style.color = 'grey';
            break;
            case 'win':
            document.querySelector('.wins span').textContent = ++this.gameSummary.wins; 
            whoWin.textContent = 'Ty wygrałeś';
            whoWin.style.color = 'green';
            break; 
            case 'lost': 
            document.querySelector('.losses span').textContent = ++this.gameSummary.losses;
            whoWin.textContent = 'Wygrała ai';
            whoWin.style.color = 'red';
        }
        //the same, but with If 
        // if(result === 'remis'){
        //     document.querySelector('.draws span').textContent = ++this.gameSummary.draws;
        //     whoWin.textContent = 'remis :\\';
        //     whoWin.style.color = 'grey';
        // } else if (result === 'win') {
        //     document.querySelector('.wins span').textContent = ++this.gameSummary.wins; 
        //     whoWin.textContent = 'Ty wygrałeś';
        //     whoWin.style.color = 'green';
        // } else {
        //     document.querySelector('.losses span').textContent = ++this.gameSummary.losses;
        //     whoWin.textContent = 'Wygrała ai';
        //     whoWin.style.color = 'red';
        // }
        
    }

    endGame() {
        document.querySelector(`[data-option="${this.playerHand}"]`).style.boxShadow = '';
        this.playerHand = '';
    }

    letsPlay() {
        if (this.playerHand === ''){
            alert('choose a hand!')
            return;
        }
        this.aiHand = this.generateAiHand();
        const gameResult = this.checkResults(this.playerHand, this.aiHand);
        this.updateSummary(this.playerHand, this.aiHand, gameResult);
        console.log(this.playerHand, this.aiHand, gameResult)
        this.endGame()
    }

}

const game = new Game();

