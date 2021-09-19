const hr = document.getElementById('hr'),
    min = document.getElementById('min'),
    sec = document.getElementById('sec');

setInterval(() => {
    const today = new Date();
    let hour = today.getHours() * 30,
        minitue = today.getMinutes() * 6,
        second = today.getSeconds() * 6;

    hr.style.transform = `rotateZ(${(hour) + (minitue / 12)}deg)`;
    min.style.transform = `rotateZ(${minitue}deg)`;
    sec.style.transform = `rotateZ(${second}deg)`;
}, 1000)
