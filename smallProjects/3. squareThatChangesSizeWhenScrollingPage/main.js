class ChangeSizeSquare {
    constructor(size, maxSizeFactor = 0.5, growRate = 5) {
        this.size = size;
        this.maxSize = window.innerWidth * maxSizeFactor;
        this.grow = true;
        this.growRate = growRate;
        this.square = this.createSquare();
        window.addEventListener('scroll', this.changeSizeSquare.bind(this));
    }

    createSquare() {
        const square = document.createElement('div');
        square.style.width = `${this.size}px`;
        square.style.height = `${this.size}px`;
        document.body.appendChild(square);
        return square;
    }

    changeSizeSquare() {
        if (this.size >= this.maxSize || this.size <= 0) {
            this.grow = !this.grow;
        }
        if (this.grow) {
            this.size += this.growRate;
        } else {
            this.size -= this.growRate;
        }
        this.square.style.width = `${this.size}px`;
        this.square.style.height = `${this.size}px`;
    }
}

const changeSizeSquare = new ChangeSizeSquare(100);
