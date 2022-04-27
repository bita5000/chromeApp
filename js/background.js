const img = ["1.gif", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.gif", "7.gif", "8.gif", "9.jpeg", "10.jpeg"];

const chosenImg = img[Math.floor(Math.random() * img.length)];

const bgImage = document.createElement("img");
// createElement
// 지정한 tagname의 HTML요소를 만들어 반환합니다.
// 위 코드는 img 태그를 생성한 것입니다~

bgImage.src = `img/${chosenImg}`;

//여기까지 가정 밑은 실행

document.body.appendChild(bgImage);
// appendChild
// 지정한 값 안에 자식 맨 뒤 요소로 추가하는 기능
// 위 코드는 body 태그 안에 bgImage를 추가함
// prependChild는 맨 앞으로 오게 함

// ~ 어리석은 짓 ~
// const body = document.querySelector("body");
// 를 추가하여 body 자체에 이미지를 넣어 z-index가 없어도 되게 만들고 싶었는데..
// appendChild 자체가 이미 "자식" 요소로 추가하는 기능이라 소용이 없었따..