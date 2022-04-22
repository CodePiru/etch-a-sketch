const container = document.querySelector('#container');
const changeGrid = document.querySelector('#change-grid');
const modes = document.querySelectorAll('.mode');

function createGrid (num) {
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.innerHTML = '';
    for (let i = 1; i <= (num * num); i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        container.appendChild(div);
    }
}

function normalMode (e) {
    e.target.classList.add('active');
}

changeGrid.addEventListener('click', () => {
    const number = parseInt(prompt('¿How many squares (per side) do you want?\nFrom 2 to 100'));
    if (number >= 2 && number <= 100) {
        createGrid(number);
    } else {
        alert('Invalid option');
    };
})

container.addEventListener('mouseover', normalMode)

createGrid(16);
