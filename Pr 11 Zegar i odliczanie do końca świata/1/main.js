const clock = () => {
    const time = new Date();
    const hours =
        time.getHours() < 10 ? `0${time.getHours()}` : `${time.getHours()}`;
    const min =
        time.getMinutes() < 10
            ? `0${time.getMinutes()}`
            : `${time.getMinutes()}`;
    const sek =
        time.getSeconds() < 10
            ? `0${time.getSeconds()}`
            : `${time.getSeconds()}`;
    document.querySelector('.clock span').textContent =
        `${hours} : ${min} : ${sek}`;
};

setInterval(clock, 1000);
