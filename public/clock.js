// initialize
let clockSet = false;

window.addEventListener('DOMContentLoaded', () => {
    const hands = {
        second: document.querySelector(".second-hand"),
        minute: document.querySelector(".minute-hand"),
        hour: document.querySelector(".hour-hand")
    }
    setInterval(()=>rotate(hands), 100);
    drawMarkers();
});

const rotate = (hands)=>{
    let now = new Date();
    let seconds = now.getSeconds();
    let milliSeconds = now.getMilliseconds();
    let secondDegrees = 6 * seconds + milliSeconds/ (1000/6);
    if (seconds !== 0 && clockSet) {
        hands.second.style.transform = `rotate(${secondDegrees}deg)`;
        return;
    }
    // second === 0 => adjust all hands
    let hours = now.getHours();
    let minutes = now.getMinutes();
    // convert to degrees and rotate hands
    let hourDegrees = 30 * hours + minutes / 2;
    let minuteDegrees = 6 * minutes;

    hands.hour.style.transform = `rotate(${hourDegrees}deg)`;
    hands.minute.style.transform = `rotate(${minuteDegrees}deg)`;
    hands.second.style.transform = `rotate(${secondDegrees}deg)`;
    clockSet = true;
}

const drawMarkers = ()=>{
    const markers = document.querySelectorAll(".marker");
    [...markers].forEach((m,i)=>{
        m.style.transform = `rotate(${i*30}deg)`;
        if (i % 3 === 0) {
            m.style.backgroundColor = "#D05663";
        }
    });
}