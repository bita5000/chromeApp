const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
// 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용한다.

function onLoginSubmit(event) {
    event.preventDefault();
    // * preventDefault *
    // form 사용 시 기본으로 실행되는 행동을 무시함.
    // 위 코드는 input text를 입력하고 submit했을 때 페이지가 자동으로 넘어가지 않도록 막아줌
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    //greeting.innerText = "Hello, " + username;
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
