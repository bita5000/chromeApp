// const loginForm = document.getElementsByClassName("login-form");
// const loginInput = loginForm.qeurySelector("input");
// const loginButton = loginForm.qeurySelector("button");

const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");

function onLoginSubmit() {
    // console.log("hello", loginInput.value);
    const username = loginInput.value;
    console.log(username);
    // if (username === "") {
    //     alert("Please write your name");
    // } else if (username.length > 15) {
    //     alert("Your name is too long");
    // } else {
    //     console.log(username);
    // }
}

loginForm.addEventListener("submit", onLoginSubmit);