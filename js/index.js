// Завдання 1: Галерея зображень const images = document.querySelectorAll('.gallery .image'); let currentIndex = 0;

function showImage(index) { images.forEach((img, i) => { img.style.border = i === index ? '2px solid red' : 'none'; }); }

document.addEventListener('keydown', (event) => { if (event.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % images.length; } else if (event.key === 'ArrowLeft') { currentIndex = (currentIndex - 1 + images.length) % images.length; } showImage(currentIndex); });

showImage(currentIndex);

// Завдання 2: Створення і очищення колекції const controls = document.querySelector('#controls'); const input = controls.querySelector('input'); const createBtn = controls.querySelector('[data-action="render"]'); const destroyBtn = controls.querySelector('[data-action="destroy"]'); const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
    destroyBoxes(); let size = 30; for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = rgb(`${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}`);
        boxesContainer.appendChild(box);
        size += 10;
    }
}

function destroyBoxes() { boxesContainer.innerHTML = ''; }

createBtn.addEventListener('click', () => { const amount = Number(input.value); if (amount > 0) createBoxes(amount); });

destroyBtn.addEventListener('click', destroyBoxes);