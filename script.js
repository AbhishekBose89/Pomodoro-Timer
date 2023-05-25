const timer = document.querySelector("#timer");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let interval;
let timeLeft = 1500;

const displayTimer = () => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes
        .toString()
        .padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
    timer.innerHTML = formattedTime;
};
start.addEventListener("click", () => {
    interval = setInterval(() => {
        timeLeft--;
        displayTimer();
        if (timeLeft === 0) {
            clearInterval(interval)
            alert("Time's up")
            timeLeft = 1500
            displayTimer()
        }
    }, 1000);
});
stop.addEventListener("click", () => {
    clearInterval(interval)
});
reset.addEventListener("click", () => {
    clearInterval(interval)
    timeLeft = 1500
    displayTimer()
});
