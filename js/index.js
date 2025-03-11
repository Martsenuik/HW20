// Завдання 1: Галерея зображень const images = document.querySelectorAll('.gallery .image'); let currentIndex = 0;

let images = document.querySelectorAll(".image");
let index = 0;

function updateGallery() {
    images.forEach(img => img.classList.remove("active"));
    images[index].classList.add("active");
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        index = (index + 1) % images.length;
    } else if (event.key === "ArrowLeft") {
        index = (index - 1 + images.length) % images.length;
    }
    updateGallery();
});

updateGallery();
// Завдання 2: Створення і очищення колекції const controls = document.querySelector('#controls'); const input = controls.querySelector('input'); const createBtn = controls.querySelector('[data-action="render"]'); const destroyBtn = controls.querySelector('[data-action="destroy"]'); const boxesContainer = document.querySelector('#boxes');
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-action='render']");
const destroyBtn = document.querySelector("[data-action='destroy']");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
    let size = 30;
    boxes.innerHTML = "";

    for (let i = 0; i < amount; i++) {
        let div = document.createElement("div");
        div.style.width = size + "px";
        div.style.height = size + "px";
        div.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        boxes.appendChild(div);
        size += 10;
    }
}

createBtn.addEventListener("click", () => {
    const amount = Number(input.value);
    if (amount > 0) {
        createBoxes(amount);
    }
});

destroyBtn.addEventListener("click", () => {
    boxes.innerHTML = "";
});