import Slider from './slider.js';

const slideList = [
    {
        img: 'images/img1.jpg',
        txt: 'Pierwszy tekst',
    },
    { img: 'images/img2.jpg', txt: 'Drugi tekst' },
    {
        img: 'images/img3.jpg',
        txt: 'Trzeci tekst',
    },
];

const slider = new Slider(slideList, 'img.slider', ' h1.slider ', '.dots span');

slider.start();
