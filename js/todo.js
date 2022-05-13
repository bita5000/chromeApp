const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = "❎";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) { // 2. 1의 동작을 event 인자로 넘겨받음
    event.preventDefault(); // 3. 새로운 페이지로 넘어가는 행동을 멈춤
    const newToDo = toDoInput.value; // 4. newToDo 선언 후 todo input에 작성되는 value를 그 안에 저장
    toDoInput.value = ""; // 5. 사용자가 입력 후 바로 다음 todo를 작성할 수 있도록 사용성을 높이기 위해 todo input value 창을 비우게 함
    paintToDo(newToDo); // 6. paintToDo function을 실행함과 동시에 newToDo 값을 paintToDo로 보냄
}

toDoForm.addEventListener("submit", handleToDoSubmit); // 1. addEventListener로 submit을 감지하면 handleToDoSubmit function을 실행