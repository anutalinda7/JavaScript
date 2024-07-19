class Square {
    constructor() {
        this.square = document.createElement('div');
        document.body.appendChild(this.square);
        this.grow = true;
        this.size = 10;
        this.square.style.height = this.size + 'px';
        this.square.style.width = this.size + 'px';
        window.addEventListener('scroll', this.scrollSquare.bind(this));
    }
    scrollSquare() {
        console.log(`cos, ${this.size}`);
        if (this.size >= window.innerWidth / 2) {
            this.grow = !this.grow;
        } else if (this.size == 0) {
            this.grow = !this.grow; //grow = true;
        }

        if (this.grow) {
            this.size += 5;
            this.square.style.height = this.size + 'px';
            this.square.style.width = this.size + 'px';
        } else {
            this.size -= 5;
            this.square.style.height = this.size + 'px';
            this.square.style.width = this.size + 'px';
        }
    }
}

const growSquare = new Square();
