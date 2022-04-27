const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용한다.

function onLoginSubmit(event) {
    event.preventDefault();
    // * preventDefault *
    // form 사용 시 기본으로 실행되는 행동을 무시함.
    // 위 코드는 input text를 입력하고 submit했을 때 페이지가 자동으로 넘어가지 않도록 막아줌
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //greeting.innerText = "Hello, " + username;
    paintGreetings(username);
    // 이거 지우면 안되는 이유: 새로고침 전 유저에게 greeting 표시해주기 위해
}

function paintGreetings(username) {
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); // greeting에 있는 hidden 삭제 -> 새로고침을 하면 savedUsername에 데이터가 생겨서 else로 넘어오게 되는 원리
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // 로컬에 username을 저장

// 여기까지 가정 밑은 실행

if (savedUsername === null) { // if savedUsername에 값이 없을 때
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME); // loginForm에 있는 hidden class 삭제
    loginForm.addEventListener("submit", onLoginSubmit);
    // loginform이 제출되었을 때 onLoginSubmit 함수를 실행함 근데 왜 이건 여기에 넣지? 넣어도 안넣어도 상관없으니 보기 좋으라고 넣는건가
} else {
    // show the greetings
    paintGreetings(savedUsername);
}