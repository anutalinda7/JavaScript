class Filter{
    constructor(){
        this.input = document.querySelector('input');
        this.ul = document.querySelector('ul');
        this.liList = document.querySelectorAll('li');

        this.input.addEventListener('input', this.listToDo.bind(this))
    }

    listToDo(e){
        let searchText = e.target.value.toLowerCase();
        let list = [...this.liList];
        list = list.filter((el) => el.textContent.toLowerCase().includes(searchText))
        this.ul.textContent = '';
        list.forEach((el) => {
            this.ul.appendChild(el)
        })
    }
}


const filter = new Filter();

