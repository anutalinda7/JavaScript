class Clock{
    constructor() {
        // setInterval(this.updateClock.bind(this), 1000)
        this.startClock()
        
    }

    startClock(){
        setInterval(this.updateClock.bind(this), 1000)
    }

    updateClock() {
        const time = new Date();
        const hours = time.getHours() < 10 ? `0${time.getHours()}` : `${time.getHours()}`;
        const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : `${time.getMinutes()}`;
        const seconds = time.getSeconds() < 10 ? `0${time.getSeconds()}` : `${time.getSeconds()}`;
        document.querySelector('.clock span').textContent = `${hours} : ${minutes} : ${seconds}`;
    }
}


const clock = new Clock();

