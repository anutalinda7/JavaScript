class CatchMousePosition {
    constructor(){
        this.h1 = document.querySelector('h1');
        window.addEventListener('mousemove', this.catchMousePosition.bind(this));
    }
    
    catchMousePosition(event){
        const x = event.clientX + 1;
        const y = event.clientY + 1;
        const width = window.innerWidth;
        const height = window.innerHeight;
        this.h1.textContent = `${x}, ${y}`;

        const red = (x / width) * 100;
        const green = (y / height) * 100;
        const blue = ((x / width) * 100 + (y / height) * 100) / 2;
        document.body.style.backgroundColor = `rgb(${red}%,${green}%,${blue}%)`;

    }
}

const catchMousePosition = new CatchMousePosition();
