class CreateBar {
  constructor(size, maxSizeFactor = 0.5, growRate = 10) {
    this.size = size;
    this.maxHeight = window.innerHeight * maxSizeFactor;
    this.growRate = growRate;
    this.grow = true; 
    this.bar = this.createBar();
    // window.addEventListener('resize', () => this.updateMaxHeight());
    window.addEventListener('scroll', this.changeBarHeight.bind(this));
  }

  createBar() {
    const bar = document.createElement('div');
    bar.style.height = `${this.size}px`;
    bar.style.backgroundColor = 'green';
    document.body.appendChild(bar);
    return bar;
  }

//   updateMaxHeight() {
//     this.maxHeight = window.innerHeight * this.maxSizeFactor; // Update maxHeight when the window is resized
//   }

  changeBarHeight() {
    console.log(this.size);
    if (this.size >= this.maxHeight || this.size <= 0){
        this.grow = !this.grow;
    }
    if (this.grow){
        this.size = Math.min(this.size + this.growRate, this.maxHeight);
        this.bar.style.backgroundColor = 'green';
    } else {
        this.size = Math.max(this.size - this.growRate, 0);
        this.bar.style.backgroundColor = 'red';
    }
    this.bar.style.height = `${this.size}px`;
  }
}

const createBar = new CreateBar(100);