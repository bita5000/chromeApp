const img = ["1.gif", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.gif", "7.gif", "8.gif", "9.jpeg", "10.jpeg"]

const chosenImg = img[Math.floor(Math.random() * img.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImg}`;

console.log(bgImage);

document.body.appendChild(bgImage);