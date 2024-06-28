
const slides = [{
    img: "images/img1.jpg",
    text: 'Pierwszy tekst'
},
{ img: "images/img2.jpg",
text: 'Drugi tekst'
},
{
    img: "images/img3.jpg",
    text: 'Trzeci tekst'
}];

const image = document.querySelector('img.slider');
const h1 =  document.querySelector(' h1.slider ')
let active = 0
const dots = [...document.querySelectorAll('.dots span')]
const one = document.getElementById

const changeDot = () => {
    let dotsIndex = dots.findIndex(dot => dot.classList.contains('active'))
        dots[dotsIndex].classList.remove('active');
        dots[active].classList.add('active');
   
}
const banerMove = () => {
    active++;
    console.log('dzia')
    if (active === slides.length){
        active = 0;
    }
    image.src = slides[active].img
    h1.textContent = slides[active].text;
    changeDot()
}
let stopSetInterval = setInterval(banerMove, 1000)

const manualChange = (e) => {
    if(e.keyCode === 37 || e.keyCode === 39){
        clearInterval(stopSetInterval) 
        if (e.keyCode ===39){
            active++
            if (active > 2){active = 0}
        }
        if(e.keyCode == 37){
            active--
            if (active < 0){
                active = 2
            }
        }
        image.src = slides[active].img
        h1.textContent = slides[active].text;
        changeDot()
        console.log(active)
        stopSetInterval = setInterval(banerMove, 1000)
    }
    
}
window.addEventListener('keydown', manualChange)

