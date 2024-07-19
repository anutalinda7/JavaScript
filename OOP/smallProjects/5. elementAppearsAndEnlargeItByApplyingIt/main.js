class GrowLiElementsList {
    constructor(size = 10, growthRate = 10 ) {
        this.size = size;
        this.growthRate = growthRate;
        this.liList = document.querySelectorAll('ul>li');
        this.btn = document.querySelector('button');
        this.btn.addEventListener('click', this.showList.bind(this));
    }

    showList() {
        this.size += this.growthRate;
        this.liList.forEach((liItem) => {
            liItem.style.display = 'block';
            liItem.style.fontSize = `${this.size}px`;
        });
    }
}

const growLiElementsList = new GrowLiElementsList();