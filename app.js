const h1 = document.querySelector("h1");

h1.style.cursor = "pointer";

// function handleTitleClick(){
//     const currentColor = h1.style.color;
//     let newColor

//     if (currentColor === "blue") {
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }

// function handleTitleClick(){
//     const clickedClass = "clicked";
//     if (h1.classList.contains(clickedClass)) {
//         h1.classList.remove(clickedClass) = "";
//     } else {
//         h1.classList.add(clickedClass);
//     }
    
// }

function handleTitleClick(){
    const clickedClass = "clicked"; 
    // css에서 선택자를 가져올 경우 이름을 틀림으로써 생기는 오류가 많고 확인이 어렵기 때문에 이름을 설정해주고 개발하는 것이 더 편리하고 오류를 찾기에 쉽다.
    h1.classList.toggle(clickedClass);
}

h1.addEventListener("click", handleTitleClick);

// console.log(h1);

// h1.style.cursor="pointer";

// function handleh1Click(){
//     h1.style.color="green";
// }

// function handleMouseEnter(){
//     h1.innerText="Mouse is here";
// }

// function handleMouseleave(){
//     h1.innerText="Mouse is gone";
// }

// function handleWindowResize(){
//     document.body.style.backgroundColor="powderblue";
// }

// function handleWindowCopy(){
//     alert("copier!");
// }

// function handleWindowOffline(){
//     alert("SOS no WIFI");
// }
// function handleWindowOnline(){
//     alert("home sweet home")
// }

// h1.onclick = handleh1Click;
// h1.onmouseenter = handleMouseEnter;
// h1.addEventListener("mouseleave", handleMouseleave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);
// // function을 바로 실행시키고 싶은 것이 아니라면 ()를 옆에 붙여줄 필요가 없슨

// const countNumber = document.querySelector(".count");
// const countNumberButton = document.querySelector(".count-button");

// function addNumber(){
    
// }

// countNumber.addEventListener("click", addNumber);
