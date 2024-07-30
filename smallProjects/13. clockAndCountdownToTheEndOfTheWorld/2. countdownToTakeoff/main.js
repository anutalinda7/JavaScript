
class Countdown{
    constructor() {
        this.endDate = new Date('2024-07-30 19:20:00').getTime();

        this.spanD = document.querySelector('span.d');
        this.spanH = document.querySelector('span.h');
        this.spanM = document.querySelector('span.m');
        this.spanS = document.querySelector('span.s');

        this.start();
    }

    start() {
        setInterval(() => {
            const startDate = new Date().getTime();
            const time = this.endDate - startDate;
            console.log(time);
            let sec = Math.floor((time / 1000) % 60);
            sec = sec < 10 ? `0${sec}` : sec;
            this.spanS.textContent = sec;
            let min = Math.floor((time / (1000 * 60)) % 60);
            min = min < 10 ? `0${min}` : min;
            this.spanM.textContent = min;
            let hour = Math.floor((time / (1000 * 60 * 60)) % 24);
            hour = hour < 10 ? `0${hour}` : hour;
            this.spanH.textContent = hour;
            this.spanD.textContent = Math.floor(time / (1000 * 60 * 60 * 24));
        }, 1000);
    }
    
}



const countdown = new Countdown()

