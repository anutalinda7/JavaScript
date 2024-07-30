import Slide from './slide.js';

export default class Slider {
    #image;

    constructor(
        slideList,
        imageSelector,
        titleSelector,
        dotsSelector,
        time = 1000,
        active = 0
    ) {
        this.#image = document.querySelector(imageSelector);
        this.h1 = document.querySelector(titleSelector);
        this.dots = [...document.querySelectorAll(dotsSelector)];
        this.active = active;
        this.time = time;
        this.slides = [];
        this.indexInterval = null;

        for (const slide of slideList) {
            this.#addSlide(new Slide(slide.img, slide.txt));
        }
        // console.log(this.slides)
        window.addEventListener('keydown', (e) => this.keyChangeSlide(e));
    }
    #addSlide(slide) {
        this.slides.push(slide);
    }
    start() {
        this.indexInterval = setInterval(() => this.changeSlide(), this.time);
    }

    changeDot() {
        let dotsIndex = this.dots.findIndex((dot) =>
            dot.classList.contains('active')
        );
        this.dots[dotsIndex].classList.remove('active');
        this.dots[this.active].classList.add('active');
    }
    changeSlide() {
        console.log(this);
        console.log('cos');
        this.active++;
        console.log('dzia');
        if (this.active === this.slides.length) {
            this.active = 0;
        }
        this.#image.src = this.slides[this.active].image;
        this.h1.textContent = this.slides[this.active].text;
        this.changeDot();
    }

    keyChangeSlide(e) {
        if (e.keyCode === 37 || e.keyCode === 39) {
            clearInterval(this.indexInterval);
            if (e.keyCode === 39) {
                this.active++;
                if (this.active > 2) {
                    this.active = 0;
                }
            }
            if (e.keyCode == 37) {
                this.active--;
                if (this.active < 0) {
                    this.active = 2;
                }
            }
            this.#image.src = this.slides[this.active].image;
            this.h1.textContent = this.slides[this.active].text;
            this.changeDot();
            this.start();
        }
    }
}
