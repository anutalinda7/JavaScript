const timer = () => {
    let time = 0;
    function returnTime() {
        console.log(time);
        time++;
        document.body.textContent = `Jesteś już na stronie ${time} sekund`;
    }
    console.log(time);
    return returnTime;
};

const licznik = timer();
setInterval(licznik, 1000);
