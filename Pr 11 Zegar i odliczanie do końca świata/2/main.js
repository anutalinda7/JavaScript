
const endDate = new Date('2024-04-12 19:20:00').getTime();

const spanD = document.querySelector('span.d');
const spanH = document.querySelector('span.h');
const spanM = document.querySelector('span.m');
const spanS = document.querySelector('span.s');

setInterval(function(){
    const startDate = new Date().getTime();
    const time = endDate - startDate
    console.log(time)
    let sec = Math.floor((time / 1000) % 60);
    sec = sec < 10 ? `0${sec}` : sec;
    spanS.textContent = sec;
    let min =  Math.floor((time / (1000*60)) % 60);
    min = min < 10 ? `0${min}` : min;
    spanM.textContent = min
    let hour =  Math.floor((time / (1000*60*60)) % 24);
    hour = hour < 10 ? `0${hour}` : hour;
    spanH.textContent = hour
    spanD.textContent = Math.floor((time / (1000*60*60*24)));
}, 1000)