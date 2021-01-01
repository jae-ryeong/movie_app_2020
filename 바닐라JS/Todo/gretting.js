const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const User_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(User_LS, text);
}

function handleSubmit(e){
    e.preventDefault();
    const inputValue = input.value;
    
    saveName(inputValue);
    paintGreeting(inputValue);
}
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}



function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}


function loadName(){
    const currentUser = localStorage.getItem(User_LS);
    if(currentUser === null){
        // user is not
        askForName();
    }else{
        // user is
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();