class ChangeColor {
    constructor(red, green, blue){
        this.red = red;
        this.green = green;
        this.blue = blue;
        document.body.style.backgroundColor = `rgb(${this.red}, ${this.green}, ${this.blue})`
        window.addEventListener('keydown', this.changeColor.bind(this))
    }

    changeColor(e) {
        switch(e.keyCode) {
            case 38:
                document.body.style.backgroundColor = `rgb(${this.red <= 255 ? this.red++ : this.red}, ${this.green <= 255 ? this.green++ : this.green}, ${this.blue <= 255 ? this.blue++ : this.blue})`;
                break;
            case 40:
                document.body.style.backgroundColor = `rgb(${this.red >=0 ? this.red-- : this.red}, ${this.green >=0 ? this.green-- : this.green}, ${this.blue >=0 ? this.blue-- : this.blue})`;
                break;
        }

        //The same code but with if-else if 
        // if(e.keyCode === 38){
        //     document.body.style.backgroundColor = `rgb(${this.red <= 255 ? this.red++ : this.red}, ${this.green <= 255 ? this.green++ : this.green}, ${this.blue <= 255 ? this.blue++ : this.blue})`;
        // } else if (e.keyCode === 40){
        //      document.body.style.backgroundColor = `rgb(${this.red >=0 ? this.red-- : this.red}, ${this.green >=0 ? this.green-- : this.green}, ${this.blue >=0 ? this.blue-- : this.blue})`
        // }
    }
}

new ChangeColor(100, 100, 100);



