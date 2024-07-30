class ChangeColor {
    constructor(color) {
        document.body.addEventListener('click', this.changeColor.bind(this))
        document.body.style.backgroundColor = color;

    }
    changeColor (event) {
        console.log(event.clientX, event.clientY);   
        const color = this.getColor(event);
        document.body.style.backgroundColor = color;    
    }

    getColor(event) {
        if(event.clientX%2 === 0){
            if(event.clientY%2 === 0){
                return 'red';    
            } else return 'green';    
           
        } else if(event.clientX%2 !== 0){
            if(event.clientY%2 === 0 ){
                return 'green';    
            }else return 'blue';    
        }
    }
}

new ChangeColor('yellow');
