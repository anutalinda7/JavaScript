function counter(start = 0) {
    let number = start;
    return function runCounter() {
        number++;
        document.body.textContent = `Aktualna warto licznika to ${number}`;
    };
}

// const countFrom0 = counter();
const countFrom5 = counter(5);

// window.addEventListener("click", countFrom0)
window.addEventListener('click', countFrom5);
