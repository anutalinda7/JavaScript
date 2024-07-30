class Stopwatch {
    constructor(sec = 0, msec = 0){
        this.sec = sec;
        this.msec = msec;
        this.active = true;
        this.indexInterval;

        this.btnStart = document.querySelector('.main');
        this.btnReset = document.querySelector('.reset');
        this.p = document.querySelector('.time div');
        this.btnStart.addEventListener('click', this.changeStatus.bind(this));
        this.btnReset.addEventListener('click', () => this.reset());
    }

    changeStatus(){
        if(this.active){
            this.btnStart.textContent = 'Pause';
            this.indexInterval = setInterval(this.timer.bind(this), 1000);
            this.active = !this.active;
        } else if(!this.active){
            this.btnStart.textContent = 'Start';
            clearInterval(this.indexInterval);
            this.active = !this.active;
        }
    }

    timer(){
        this.p.textContent = `${this.sec}.${this.msec++ > 59 ? (this.msec = 0) : this.msec}`;
            if (this.msec === 59) {
                this.sec++;
            }
            console.log(this.sec, this.msec)
    }

    reset(){
        this.btnStart.textContent = 'Start';
        this.p.textContent = '---'
        clearInterval(this.indexInterval);
        this.active = true;
        this.sec = 0
        this.msec = 0;
    }
}


const stopwatch = new Stopwatch();


