const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(e){
    const btn = e.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    // JSON.stringify는 자바스크립트 object를 string로 바꿔준다
    // localStorage는 무조건 text타입
    // 예를 들어 true를 Boolean으로 인식 X
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const newId = toDos.length+1;
    delBtn.value = "X";
    delBtn.addEventListener("click",deleteToDo);
    const span = document.createElement("span");
    span.innerHTML = text
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);

    
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(e){
    e.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos= localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        // string을 object로도 바꿔주어 자바스크립트에서도 사용 가능하게 만들어준다
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        }); // localStorage에 저장된걸 기억한 후 다시 가져오는 것
    }
}




function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
}

init();