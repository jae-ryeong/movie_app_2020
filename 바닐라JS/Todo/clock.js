const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");
// querySelector은 첫번째 자식 탐색

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerHTML = `${hours}:${minutes}:${
    seconds < 10 ? `0${seconds}` : seconds}`;
    }


function init() {
    getTime();
    setInterval(getTime,1000);
}

init();