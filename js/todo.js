const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
const hello = document.getElementById("hello");

const TODOS_KEY = "toDos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.id = "deleteButton";
    button.addEventListener("click", deleteToDo); // !!실행!!
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) { // 2. 1의 동작을 event 인자로 넘겨받음
    event.preventDefault(); // 3. 새로운 페이지로 넘어가는 행동을 멈춤
    const newToDo = toDoInput.value; // 4. newToDo 선언 후 todo input에 작성되는 value를 그 안에 저장
    toDoInput.value = ""; // 5. 사용자가 입력 후 바로 다음 todo를 작성할 수 있도록 사용성을 높이기 위해 todo input value 창을 비우게 함
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj); // 6. paintToDo function을 실행함과 동시에 newToDo 값을 paintToDo로 보냄
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit); // !!실행!! 1. addEventListener로 submit을 감지하면 handleToDoSubmit function을 실행

// localStorage에 값이 없을 경우 null이 됨
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}




//  - Filter

// const arr = ["pizza", "banana", "tomato"];

// function arrFilter(food){
//     return food !== "banana"
// }

// arr.filter(arrFilter)
// result = pizza, tomato


// (item) => console.log("blah~~", item)
// 아래와 같은 코드임 솔직히 뭐라는지 잘 모르겠음 forEach
// function sayHello(item){
//     console.log("blah~~", item)
// }


// - argument

// function test(a) {
//     alert(a);
// }

// (a) => alert(a);

// function helloFunction(x, y) {
//     alert("hello, " + x + y);
// }

// hello.addEventListener("click", helloFunction);
// hello.addEventListener("click", (e) => helloFunction(e));


// - return

// function addOne(a, b) {
//     console.log(a + b);
//     // return;
// }

// function addTwo(a, b) {
//     return a + b;
// }

// testOne = addOne(2, 3)  // None
// testTwo = addTwo(2, 3)  // 5
// console.log(testOne)
// console.log(testTwo)

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }