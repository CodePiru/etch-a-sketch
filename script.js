const container = document.querySelector('#container');
const changeGrid = document.querySelector('#change-grid');
const modes = document.querySelectorAll('.mode');
let activeMode = 'normal';

function createGrid (num) {
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.innerHTML = '';
    for (let i = 1; i <= (num * num); i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        container.appendChild(div);
    }
}

function paint (e) {
    if (!e.target.classList.contains('pixel')) return;
    if (activeMode === 'normal') {
        e.target.style.backgroundColor = 'black';
    } else if (activeMode === 'rgb') {
        const randomColor = Math.floor(Math.random() * 360);
        e.target.style.backgroundColor = `hsl(${randomColor}, 100%, 50%)`;
    } else if (activeMode === 'gradient') {
        let currentColor = e.target.style.backgroundColor.split(',')[1] || 255;
        currentColor -= 25.5;
        e.target.style.backgroundColor = `rgb(${currentColor}, ${currentColor}, ${currentColor})`;
    }
}

changeGrid.addEventListener('click', () => {
    const number = parseInt(prompt('¿How many squares (per side) do you want?\nFrom 2 to 100'));
    if (number >= 2 && number <= 100) {
        createGrid(number);
    } else {
        alert('Invalid option');
    };
})

modes.forEach(mode => mode.addEventListener('click', (e) => {
    modes.forEach(mode => mode.classList.remove('nav-active'))
    e.target.classList.add('nav-active');    
    activeMode = e.target.id;
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => pixel.style.backgroundColor = 'rgb(255, 255, 255)')
}))

container.addEventListener('mouseover', paint)

createGrid(16);
