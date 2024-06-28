

const btnStart = document.querySelector('.main')

const btnReset = document.querySelector('.reset')
const p = document.querySelector('.time div')
let sek = 0
let msek = 0;
let active = true;
let indexI; 

const changeStatus = () => {
    if(active){
        btnStart.textContent = "Pause"
        indexI = setInterval(timer, 1000)
        active = !active
    } else if (!active)
     {btnStart.textContent = "Start"
    clearInterval(indexI);
    active = !active}
    console.log(active)

}

function timer (){
         p.textContent = `${sek}.${msek++ > 59 ? msek = 0 : msek}`
        if (msek === 59){
            sek++
        }    
}

const reset = () => {
    p.textContent = "---"
    sek = 0
    msek = 0;
    clearInterval(indexI);
    active = true;
    btnStart.textContent = "Start"
}


btnStart.addEventListener("click", changeStatus);
btnReset.addEventListener('click', reset)
