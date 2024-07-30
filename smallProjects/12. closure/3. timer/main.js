class Timer {
    constructor(sec = 0){
        this.sec = sec
        this.activateCounter = this.count()

        this.startCounting();
    }

    count(){
        return function addNumbers(){
            this.sec++
            document.body.textContent = `Jesteś już na stronie ${this.sec} sekund`;
        }
    }

    runCounter() {
        this.activateCounter()
    }

    startCounting(){
        setInterval(this.runCounter.bind(this), 1000)
    }
    
}

const timer = new Timer();

