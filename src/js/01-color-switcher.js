
const start = document.querySelector("[data-start]");
const stop = document.querySelector("[data-stop]");
const CHANGE_TIME = 1000;
let timerId = null;

stop.setAttribute("disabled", "disabled");


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClickStartBtn() {
    timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();       
   }, 1000);
   start.setAttribute("disabled", "disabled");
   stop.removeAttribute("disabled", "disabled")
}

function onClickStoptBtn() {
    clearInterval(timerId);
    start.removeAttribute("disabled", "disabled")
    stop.setAttribute("disabled", "disabled");
}



start.addEventListener("click", onClickStartBtn);
stop.addEventListener("click", onClickStoptBtn);