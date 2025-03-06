const textElement = document.querySelector(".changing-text");
const texts = ["Web Developer", "Graphic Designer"];
let index = 0;

function changeText() {
    textElement.style.opacity = 0;
    setTimeout(() => {
        textElement.textContent = texts[index];
        textElement.style.opacity = 1;
        index = (index + 1) % texts.length;
    }, 600);
}

setInterval(changeText, 2000);
