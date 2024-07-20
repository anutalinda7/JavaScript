class MoveSquare {
    constructor(divX, divY, color) {
        
        this.divX = divX;
        this.divY = divY;
        this.color = color;
        this.drawActive = false;
        this.insertDivX = 0;
        this.insertDivY = 0;

        this.div = document.querySelector('div');
        this.div.style.backgroundColor = this.color;
        this.div.style.left = `${this.divX}px`;
        this.div.style.top = `${this.divY}px`;
        this.div.addEventListener('mousedown', this.mouseDownOnSquare.bind(this));
        this.div.addEventListener('mousemove', this.activeSquare.bind(this));
        this.div.addEventListener('mouseup', this.mouseUpFromSquare.bind(this));

    }

    mouseDownOnSquare(e){
        this.drawActive = !this.drawActive
        this.div.style.backgroundColor = 'grey';
        this.insertDivX = e.offsetX;
        this.insertDivY = e.offsetY;
    }

    activeSquare(e) {
        if(this.drawActive){
        this.divX = e.clientX - this.insertDivX;
        this.divY = e.clientY - this.insertDivY;
        this.div.style.left = `${this.divX}px`;
        this.div.style.top = `${this.divY}px`;
        }
    }

    mouseUpFromSquare(){
        this.div.style.backgroundColor = this.color;
        this.drawActive = !this.drawActive
    }
}

new MoveSquare(150, 50, 'black');